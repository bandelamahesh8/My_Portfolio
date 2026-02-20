import './About.css'
import { useState } from 'react'
import profileImg from '../assets/Profile.png'
import Logo from './Logo'
import { Reveal } from './Animations'
import { EtheralShadow } from './ui/etheral-shadow'
import LazyBackground from './LazyBackground'

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <section className="about-section">
            <LazyBackground className="absolute inset-0 z-0">
                <EtheralShadow
                    color="rgba(50, 50, 50, 1)"
                    animation={{ scale: 100, speed: 30 }}
                    noise={{ opacity: 0.5, scale: 1.2 }}
                    sizing="fill"
                    className="absolute inset-0 z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                    }}
                />
            </LazyBackground>
            
            <div className="about-container relative z-10">
                <div className="about-content">
                    <div className="about-left">
                        <Reveal>
                            <div className="about-image-wrapper">
                                <img src={profileImg} alt="Bandela Mahesh" className="about-photo" />
                                <div className="about-image-glow"></div>
                            </div>
                        </Reveal>
                    </div>
                    
                    <div className="about-right">
                        <Reveal delay={0.2}>
                            <div className="about-header">
                                <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" />
                                <p className="eyebrow">BANDELA MAHESH</p>
                                <h2 className="section-title">About</h2>
                            </div>
                        </Reveal>
                        
                        <div className="about-text">
                          <Reveal delay={0.4}>
                                <p>
                                I’m <strong>Mahesh (Bandela Mahesh)</strong>, a <strong>Product Designer & Developer</strong> 
                                building cinematic, high-performance web systems where advanced UI engineering, motion design, 
                                and scalable backend architecture intersect.
                                {!isExpanded && (
                                    <button 
                                        onClick={() => setIsExpanded(true)}
                                        className="read-more-btn mobile-only"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            cursor: 'pointer',
                                            fontSize: 'inherit',
                                            fontWeight: 500,
                                            textDecoration: 'underline',
                                            padding: '8px 0',
                                            display: 'inline-block'
                                        }}
                                    >
                                        Read more
                                    </button>
                                )}
                                </p>
                          </Reveal>
                          
                          <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
                                <Reveal delay={0.5}>
                                    <p>
                                    I design and build production-grade full-stack systems — turning complex design systems into 
                                    maintainable, secure, and performance-focused code that survives real-world scale.
                                    </p>
                                </Reveal>

                                <Reveal delay={0.6}>
                                    <p>
                                    My work spans AI-driven platforms, advanced authentication, real-time systems, subscription 
                                    products, and immersive motion- and 3D-led interfaces.
                                    </p>
                                </Reveal>

                                <Reveal delay={0.7}>
                                    <p>
                                    Currently pursuing B.Tech in Computer Science & Engineering at Lovely Professional University, 
                                    I focus on building systems that go beyond demos — intentional interfaces that perform under 
                                    real constraints.
                                    </p>
                                </Reveal>

                                <button 
                                    onClick={() => setIsExpanded(false)}
                                    className="read-less-btn mobile-only"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        cursor: 'pointer',
                                        fontSize: 'inherit',
                                        fontWeight: 500,
                                        textDecoration: 'underline',
                                        padding: '8px 0',
                                        display: 'inline-block'
                                    }}
                                >
                                    Read less
                                </button>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default About
