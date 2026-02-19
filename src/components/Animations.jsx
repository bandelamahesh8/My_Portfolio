import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export const Reveal = ({ children, width = "fit-content", delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const FadeIn = ({ children, delay = 0, duration = 0.5, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const SlideIn = ({ children, direction = "up", delay = 0, duration = 0.5, className = "", viewportMargin = "-100px" }) => {
    const variants = {
        hidden: { 
            opacity: 0, 
            x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0
        },
        visible: { opacity: 1, x: 0, y: 0 }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={variants}
            transition={{ duration: duration, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const ScaleIn = ({ children, delay = 0, duration = 0.5, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const BlurIn = ({ children, delay = 0, duration = 0.8, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
