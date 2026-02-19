import { useState } from 'react'
import './Experience.css'
import Logo from './Logo'
import { Reveal, SlideIn } from './Animations'
import { BackgroundBeams } from '@/components/ui/background-beams'
import LazyBackground from './LazyBackground'
import trainingImg from '../INTERNSHIP/Training.jpg'
import CertificateModal from './CertificateModal'

const Experience = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

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
                        {/* <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" /> */}
                        {/* <p className="eyebrow">LEVEL UP YOUR SKILLS</p> */}
                        <h2 className="section-title">Internship & Training<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
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
                                {/* <div className="cert-light-ray"></div>
                                <div className="image-overlay-hint">
                                    <span>Click to View</span>
                                </div> */}
                            </div>
                        </div>

                        <div className="training-content-side">
                            <div className="training-card-header">
                                <div className="training-meta">
                                    <span className="training-date">Jun’ 2025 - Jul’ 2025</span>
                                    <span className="training-tag">Summer Training</span>
                                </div>
                                <h3 className="training-title-large">DSA using C++</h3>
                                <p className="training-institution">Lovely Professional University</p>
                            </div>

                            <ul className="training-feature-list">
                                <li><strong>High-Scale System:</strong> 5,000+ records handled with 98% memory efficiency.</li>
                                <li><strong>Modular Architecture:</strong> 30% faster compilation & 25% fewer pointer defects.</li>
                                <li><strong>Advanced Algorithmics:</strong> Performance elevated by 35% using Min-Heaps & Hash Tables.</li>
                                <li><strong>Efficiency Boost:</strong> Accelerating throughput by 40% with recursive traversal.</li>
                                <li><strong>Stack Mastery:</strong> C++, OOP, VS Code, and MinGW for low-level engineering.</li>
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
