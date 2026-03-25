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
        <section className={`about-section ${isExpanded ? 'is-expanded' : ''}`}>
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
                    <div className={`about-left ${isExpanded ? 'fade-out' : ''}`}>
                        <Reveal>
                            <div className="about-image-wrapper">
                                <img src={profileImg} alt="Bandela Mahesh" className="about-photo" />
                                <div className="about-image-glow"></div>
                            </div>
                        </Reveal>
                    </div>
                    
                    <div className={`about-right ${isExpanded ? 'full-width' : ''}`}>
                        <Reveal delay={0.2}>
                            <div className={`about-header ${isExpanded ? 'centered' : ''}`}>
                                {!isExpanded && <p className="eyebrow">BANDELA MAHESH</p>}
                                <h2 className="section-title">
                                    ABOUT<Logo className="heading-logo" color="#ff3333" />
                                </h2>
                            </div>
                        </Reveal>
                        
                        <div className="about-text">
                          <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="expanded-split-view">
                                    <div className="expanded-left-col">
                                        <Reveal delay={0.1}>
                                            <p className="intro-main">
                                            I’m <strong>Mahesh (Bandela Mahesh)</strong>, a <strong>Product Designer & Full-Stack Developer</strong> focused on building high-performance digital products where design systems, advanced UI engineering, and scalable backend architecture operate as a unified system. My work centers on crafting digital experiences that are not only visually refined but also technically reliable, efficient, and capable of scaling in real-world environments.
                                            </p>
                                        </Reveal>

                                        {!isExpanded && (
                                            <Reveal delay={0.2}>
                                                <div className="collapsed-p2">
                                                    <p>I approach product development with a systems-oriented mindset, treating design and engineering as interconnected disciplines rather than separate stages. By integrating thoughtful interface design with disciplined software architecture, I build applications that prioritize performance, usability, and long-term maintainability while delivering meaningful and reliable user experiences.</p>
                                                    <button 
                                                        onClick={() => setIsExpanded(true)}
                                                        className="read-more-btn"
                                                    >
                                                        Know More About Me 
                                                    </button>
                                                </div>
                                            </Reveal>
                                        )}

                                        {isExpanded && (
                                            <div className="professional-details">
                                                <Reveal delay={0.2}>
                                                    <p>
                                                    I specialize in engineering production-grade full-stack systems designed to perform reliably under real-world scale and high-traffic usage.
                                                    </p>
                                                </Reveal>

                                                <Reveal delay={0.3}>
                                                    <p>
                                                    My work spans advanced authentication, AI-driven platforms, and real-time interactive applications, focusing on high-performance interfaces and motion design.
                                                    </p>
                                                </Reveal>

                                                <Reveal delay={0.4}>
                                                    <p>
                                                    Currently at Lovely Professional University, I continuously experiment with new architectural patterns and interaction models that push the boundaries of modern web apps.
                                                    </p>
                                                </Reveal>
                                            </div>
                                        )}
                                    </div>

                                    {isExpanded && (
                                      <div className="expanded-right-col">
                                        <div className="beyond-code-sections">
                                            <Reveal delay={0.1}>
                                                <h3 className="beyond-title">Beyond the Canvas</h3>
                                            </Reveal>
                                            
                                            <Reveal delay={0.2}>
                                                <div className="unified-lifestyle-card">
                                                    <div className="lifestyle-item">
                                                        <div className="item-header">
                                                            <span className="info-icon">🎮</span>
                                                            <h4>E-sports & Competition</h4>
                                                        </div>
                                                        <p>Active participant in mobile e-sports tournaments, bringing tactical precision to my workflow.</p>
                                                    </div>

                                                    <div className="lifestyle-divider"></div>

                                                    <div className="lifestyle-item">
                                                        <div className="item-header">
                                                            <span className="info-icon">🎵</span>
                                                            <h4>Sonic Process</h4>
                                                        </div>
                                                        <p>Music is vital to my creative rhythm, from cinematic scores to heavy-focus session beats.</p>
                                                    </div>

                                                    <div className="lifestyle-divider"></div>

                                                    <div className="lifestyle-item">
                                                        <div className="item-header">
                                                            <span className="info-icon">🚀</span>
                                                            <h4>Future Tech</h4>
                                                        </div>
                                                        <p>Lifelong student of innovation, exploring emerging tech communities to build global products.</p>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        </div>
                                    </div>
           )}
                                </div>

                                <button 
                                    onClick={() => setIsExpanded(false)}
                                    className={`read-less-btn ${isExpanded ? 'visible' : ''}`}
                                >
                                    Less
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
