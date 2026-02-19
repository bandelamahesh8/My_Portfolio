'use client';

import { useRef, useId, useEffect, CSSProperties, PropsWithChildren } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';
import { cn } from "@/lib/utils";

// Type definitions
interface ResponsiveImage {
    src: string;
    alt?: string;
    srcSet?: string;
}

interface AnimationConfig {
    preview?: boolean;
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    type?: 'preset' | 'custom';
    presetIndex?: number;
    customImage?: ResponsiveImage;
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
}

function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
): number {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
    const id = useId();
    const cleanId = id.replace(/:/g, "");
    const instanceId = `shadowoverlay-${cleanId}`;
    return instanceId;
};

export function EtheralShadow({
    sizing = 'fill',
    color = 'rgba(128, 128, 128, 1)',
    animation,
    noise,
    style,
    className,
    children,
    customImage
}: PropsWithChildren<ShadowOverlayProps>) {
    const id = useInstanceId();
    const containerRef = useRef<HTMLDivElement>(null);
    const animationEnabled = animation && animation.scale > 0;
    const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
    const hueRotateMotionValue = useMotionValue(180);
    const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);
    const visibleRef = useRef(false);

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;

    useEffect(() => {
        if (!animationEnabled) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                visibleRef.current = entry.isIntersecting;
                if (entry.isIntersecting) {
                    // Resume: restart the animation
                    if (!hueRotateAnimation.current) {
                        hueRotateMotionValue.set(0);
                        let frameCount = 0; // Throttle counter
                        hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
                            duration: animationDuration / 25,
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: 0,
                            ease: "linear",
                            delay: 0,
                            onUpdate: (value: number) => {
                                // Update only every 2nd frame (30fps) to save CPU
                                frameCount++;
                                if (frameCount % 2 !== 0) return;

                                if (feColorMatrixRef.current) {
                                     feColorMatrixRef.current.setAttribute("values", String(value));
                                }
                            }
                        });
                    }
                } else {
                    // Pause: stop animation when off-screen
                    if (hueRotateAnimation.current) {
                        hueRotateAnimation.current.stop();
                        hueRotateAnimation.current = null;
                    }
                }
            },
            { threshold: 0.05 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
            if (hueRotateAnimation.current) {
                hueRotateAnimation.current.stop();
            }
        };
    }, [animationEnabled, animationDuration, hueRotateMotionValue]);

    return (
        <div
            ref={containerRef}
            className={cn(className)}
            style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
                ...style
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id}) blur(2px)` : "none",
                    willChange: 'auto',
                    transform: 'translateZ(0)',
                    contain: 'strict',
                }}
            >
                {animationEnabled && (
                    <svg style={{ position: "absolute" }}>
                        <defs>
                            <filter id={id}>
                                <feTurbulence
                                    result="undulation"
                                    numOctaves="1"
                                    baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                                    seed="0"
                                    type="turbulence"
                                />
                                <feColorMatrix
                                    ref={feColorMatrixRef}
                                    in="undulation"
                                    result="undulation_rotated"
                                    type="hueRotate"
                                    values="180"
                                />
                                <feColorMatrix
                                    in="undulation_rotated"
                                    result="circulation"
                                    type="matrix"
                                    values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="circulation"
                                    scale={displacementScale}
                                    result="dist"
                                />
                                <feDisplacementMap
                                    in="dist"
                                    in2="undulation"
                                    scale={displacementScale}
                                    result="output"
                                />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: customImage ? undefined : color,
                        backgroundImage: customImage ? `url('${customImage.src}')` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        WebkitMaskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        WebkitMaskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>

            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    height: "100%"
                }}
            >
                {children}
            </div>

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 2,
                        pointerEvents: 'none'
                    }}
                />
            )}
        </div>
    );
}
