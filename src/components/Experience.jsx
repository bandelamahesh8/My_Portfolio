// Build Trigger: Standardized paths
import { useState } from 'react'
import './Experience.css'
import Logo from './Logo'
import { Reveal, SlideIn } from './Animations'
import { BackgroundBeams } from '@/components/ui/background-beams'
import LazyBackground from './LazyBackground'
import trainingImg from '../intern-assets/experience-training.jpg'
import infosysImg from '../intern-assets/infosys.png'
import CertificateModal from './CertificateModal'

const Experience = () => {
    const [activeCert, setActiveCert] = useState(null)
    const [isInfosysExpanded, setIsInfosysExpanded] = useState(false)
    const [isDSAExpanded, setIsDSAExpanded] = useState(false)

    const experiences = [
        {
            id: 'infosys-1',
            type: 'internship',
            title: "Systems / AI Engineering Intern",
            institution: "Infosys",
            date: "Feb 2026 – Present",
            description: "Collaborating in a group project to build ConceptClarity, an AI-powered web application that simplifies complex scientific terminology for general users.",
            image: infosysImg,
            features: [
                "Working on ConceptClarity, a group AI web app that explains complex scientific terms in simple language.",
                "Building a Flask backend with REST APIs and integrated a Hugging Face LLM using prompt engineering.",
                "Developing a search-based frontend with real-time JSON responses, error handling, and loading states.",
                "Dockerizing the application for consistent deployment."
            ]
        },
        {
            id: 'training-1',
            type: 'training',
            title: "DSA Engineering Intern (C++)",
            institution: "Lovely Professional University",
            date: "Jun 2025 – Jul 2025",
            description: "Intensive training in Data Structures and Algorithms focusing on memory efficiency and high-performance engineering.",
            image: trainingImg,
            features: [
                "Scaled data structures to 5,000+ records with 98% memory efficiency.",
                "Improved modular architecture, achieving 30% faster compilation and 25% fewer pointer defects.",
                "Elevated performance by 35% using Min-Heaps & Hash Tables.",
                "Accelerated throughput by 40% using recursive traversal."
            ]
        }
    ]

    return (
        <section className="experience-section relative w-full overflow-hidden">
            <div className="experience-container relative z-10">
                <header className="section-header">
                    <Reveal>
                        <h2 className="section-title">Internship & Training<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
                    </Reveal>
                </header>

                <div className="experience-cards-stack">
                    {/* INFOSYS INTERNSHIP */}
                    <SlideIn direction="up" delay={0.2}>
                        <div className="training-unified-card">
                            <div className="training-visual-side">
                                <div 
                                    className="certificate-frame p-0 overflow-hidden bg-black/40 cursor-pointer group"
                                    onClick={() => setActiveCert(experiences[0])}
                                >
                                    <img 
                                        src={infosysImg} 
                                        alt="Infosys Internship" 
                                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            <div className="training-content-side">
                                <div className="training-card-header">
                                    <h3 className="training-title-large">{experiences[0].title}</h3>
                                    <div className="training-meta">
                                        <p className="training-institution">{experiences[0].institution} · Internship</p>
                                        <span className="training-date">{experiences[0].date}</span>
                                    </div>
                                </div>

                                <ul className="training-feature-list">
                                    {experiences[0].features.slice(0, 2).map((feature, idx) => (
                                        <li key={idx}><strong>{feature.split(' ')[0]}</strong> {feature.split(' ').slice(1).join(' ')}</li>
                                    ))}
                                    {!isInfosysExpanded && (
                                        <button onClick={() => setIsInfosysExpanded(true)} className="read-more-btn mobile-only">Read more</button>
                                    )}
                                    {experiences[0].features.slice(2).map((feature, idx) => (
                                        <li key={idx} className={`extra-feature ${isInfosysExpanded ? 'expanded' : ''}`}>
                                            <strong>{feature.split(' ')[0]}</strong> {feature.split(' ').slice(1).join(' ')}
                                        </li>
                                    ))}
                                    {isInfosysExpanded && (
                                        <button onClick={() => setIsInfosysExpanded(false)} className="read-less-btn mobile-only">Read less</button>
                                    )}
                                </ul>

                                <button className="view-cert-btn" onClick={() => setActiveCert(experiences[0])}>
                                    <span>View Details</span>
                                    <span className="arrow">↗</span>
                                </button>
                            </div>
                        </div>
                    </SlideIn>

                    {/* DSA TRAINING */}
                    <SlideIn direction="up" delay={0.4}>
                        <div className="training-unified-card">
                            <div className="training-visual-side">
                                <div 
                                    className="certificate-frame p-0 overflow-hidden bg-black/40 cursor-pointer group"
                                    onClick={() => setActiveCert(experiences[1])}
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
                                    <h3 className="training-title-large">{experiences[1].title}</h3>
                                    <div className="training-meta">
                                        <p className="training-institution">{experiences[1].institution} · Summer Training</p>
                                        <span className="training-date">{experiences[1].date}</span>
                                    </div>
                                </div>

                                <ul className="training-feature-list">
                                    {experiences[1].features.slice(0, 2).map((feature, idx) => (
                                        <li key={idx}><strong>{feature.split(' ')[0]}</strong> {feature.split(' ').slice(1).join(' ')}</li>
                                    ))}
                                    {!isDSAExpanded && (
                                        <button onClick={() => setIsDSAExpanded(true)} className="read-more-btn mobile-only">Read more</button>
                                    )}
                                    {experiences[1].features.slice(2).map((feature, idx) => (
                                        <li key={idx} className={`extra-feature ${isDSAExpanded ? 'expanded' : ''}`}>
                                            <strong>{feature.split(' ')[0]}</strong> {feature.split(' ').slice(1).join(' ')}
                                        </li>
                                    ))}
                                    {isDSAExpanded && (
                                        <button onClick={() => setIsDSAExpanded(false)} className="read-less-btn mobile-only">Read less</button>
                                    )}
                                </ul>

                                <button className="view-cert-btn" onClick={() => setActiveCert(experiences[1])}>
                                    <span>View Full Certificate</span>
                                    <span className="arrow">↗</span>
                                </button>
                            </div>
                        </div>
                    </SlideIn>
                </div>
            </div>
            <LazyBackground className="absolute inset-0">
                <BackgroundBeams className="opacity-40" />
            </LazyBackground>

            <CertificateModal 
                certificate={activeCert ? {
                    ...activeCert,
                    name: activeCert.title,
                    designation: activeCert.institution,
                    quote: activeCert.description,
                    src: activeCert.image,
                    year: activeCert.id === 'infosys-1' ? "Present" : "2025 (Verified)"
                } : null}
                isOpen={!!activeCert}
                onClose={() => setActiveCert(null)}
                onNext={null}
                onPrev={null}
            />
        </section>
    )
}

export default Experience
