// Build Trigger: Standardized paths
import { useState } from 'react'
import './Experience.css'
import Logo from './Logo'
import { Reveal, SlideIn } from './Animations'
import { BackgroundBeams } from '@/components/ui/background-beams'
import LazyBackground from './LazyBackground'
import trainingImg from '../intern-assets/experience-training.jpg'
import CertificateModal from './CertificateModal'

const Experience = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const trainingData = {
        id: 'training-1',
        title: "DSA using C++", // Match ProjectModal title prop if needed, or cert name
        name: "DSA using C++",
        designation: "Lovely Professional University",
        quote: "Intensive training in Data Structures and Algorithms focusing on memory efficiency and high-performance engineering.",
        src: trainingImg,
        img: trainingImg,
        startDate: "Jun 2025",
        endDate: "Jul 2025",
    }

    return (
        <section className="experience-section relative w-full overflow-hidden">
            <div className="experience-container relative z-10">
                <header className="section-header">
                    <Reveal>
                        <h2 className="section-title">Internship & Training<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
                        <p className="section-subheading" style={{
                            fontSize: '16px',
                            color: 'rgba(255, 255, 255, 0.6)',
                            marginTop: '12px',
                            fontWeight: 400
                        }}>
                        </p>
                    </Reveal>
                </header>

                <SlideIn direction="up" delay={0.2}>
                    <div className="training-unified-card">
                        <div className="training-visual-side">
                            <div 
                                className="certificate-frame p-0 overflow-hidden bg-black/40 cursor-pointer group"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <img 
                                    src={trainingImg} 
                                    alt="Training Certificate" 
                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="training-content-side">
                            <div className="training-card-header">
                                <h3 className="training-title-large">DSA Engineering Intern (C++)</h3>
                                <div className="training-meta">
                                    <p className="training-institution">Lovely Professional University · Summer Training</p>
                                    <span className="training-date">Jun 2025 – Jul 2025</span>
                                </div>
                            </div>

                            <ul className="training-feature-list">
                                <li><strong>Scaled data structures</strong> to <strong>5,000+ records</strong> with <strong>98% memory efficiency</strong>.</li>
                                <li>
                                    <strong>Improved modular architecture</strong>, achieving <strong>30% faster compilation</strong> and <strong>25% fewer pointer defects</strong>.
                                    {!isExpanded && (
                                        <button 
                                            onClick={() => setIsExpanded(true)}
                                            className="read-more-btn"
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: 'rgba(255, 255, 255, 0.6)',
                                                cursor: 'pointer',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                textDecoration: 'underline',
                                                marginLeft: '8px',
                                                display: 'inline',
                                                padding: 0
                                            }}
                                        >
                                            Read more
                                        </button>
                                    )}
                                </li>
                                {isExpanded && (
                                    <>
                                        <li>Elevated performance by <strong>35%</strong> using <strong>Min-Heaps & Hash Tables</strong>.</li>
                                        <li>
                                            Accelerated throughput by <strong>40%</strong> using recursive traversal.
                                            <button 
                                                onClick={() => setIsExpanded(false)}
                                                className="read-less-btn"
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    color: 'rgba(255, 255, 255, 0.6)',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    textDecoration: 'underline',
                                                    marginLeft: '8px',
                                                    display: 'inline',
                                                    padding: 0
                                                }}
                                            >
                                                Read less
                                            </button>
                                        </li>
                                    </>
                                )}
                            </ul>

                            <button className="view-cert-btn" onClick={() => setIsModalOpen(true)}>
                                <span>View Full Certificate</span>
                                <span className="arrow">↗</span>
                            </button>
                        </div>
                    </div>
                </SlideIn>
            </div>
            <LazyBackground className="absolute inset-0">
                <BackgroundBeams className="opacity-40" />
            </LazyBackground>

            <CertificateModal 
                certificate={trainingData}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onNext={null}
                onPrev={null}
            />
        </section>
    )
}

export default Experience
