// Build Trigger: Standardized paths
import { useState } from 'react'
import './Experience.css'
import Logo from './Logo'
import { Reveal, SlideIn } from './Animations'
import { BackgroundBeams } from '@/components/ui/background-beams'
import LazyBackground from './LazyBackground'
import trainingImg from '../intern-assets/experience-training.jpg'
import infosysImg from '../intern-assets/infosys.png'
import boldAnalyticsImg from '../intern-assets/BOLDANALYTICS_DATAANANALYST.jpg'
import ibmSkillsbuildImg from '../intern-assets/IBMSKILLSBUILD_INTERNSHIP.png'
import CertificateModal from './CertificateModal'

const Experience = () => {
    const [activeCert, setActiveCert] = useState(null)
    const [expandedCards, setExpandedCards] = useState({})

    const toggleExpand = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const experiences = [
        {
            id: 'infosys-1',
            type: 'internship',
            title: "Systems / AI Engineering Intern",
            institution: "Infosys Springboard",
            date: "Feb 2026 – Apr 2026",
            description: "Completed the mandatory assignment related to Internship 6.0 (B 13) ConceptClarity: AI-Powered Scientific Terminology Explanation Tool.",
            image: infosysImg,
            year: "2026 (Verified)",
            features: [
                "Worked on ConceptClarity, a group AI web app that explains complex scientific terms in simple language.",
                "Built a Flask backend with REST APIs and integrated a Hugging Face LLM using prompt engineering.",
                "Developed a search-based frontend with real-time JSON responses, error handling, and loading states.",
                "Dockerized the application for consistent deployment."
            ]
        },
        {
            id: 'bold-analytics-1',
            type: 'internship',
            title: "Data Analyst Intern",
            institution: "Bold Analytics",
            date: "Apr 2026 – May 2026",
            description: "Successfully completed a remote internship as a Data Analyst under the guidance of MR. Yash Kale (Project Manager), demonstrating dedication, professionalism, and strong analytical skills.",
            image: boldAnalyticsImg,
            year: "2026 (Verified)",
            features: [
                "Analyzed business metrics and database queries to extract actionable insights.",
                "Worked under the guidance of the Project Manager to assist in reporting and data models.",
                "Utilized analytics tools to visualize trends and present findings.",
                "Verified Certificate ID: BA3660 under Startup India recognized program."
            ]
        },
        {
            id: 'ibm-skillsbuild-1',
            type: 'internship',
            title: "AI Strategy & BI Intern",
            institution: "IBM SkillsBuild & CSRBOX",
            date: "Mar 2026 – Apr 2026",
            description: "Completed a 6-week virtual internship in collaboration with AICTE. Developed practical, job-ready skills in Generative AI, Agentic AI, automation, workflows, and modern AI integrations.",
            image: ibmSkillsbuildImg,
            year: "2026 (Verified)",
            features: [
                "Leveraged IBM Watsonx and IBM Granite for AI strategy and automation workflows.",
                "Developed a functional AI Agent using Python, Google Colab, and Relay.",
                "Attended masterclasses on AI-driven web architecture, interface design, conversational systems, and autonomous AI agents.",
                "Unique ID: 2026AICSIB0390, verified program with CSRBOX & AICTE."
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
            year: "2025 (Verified)",
            features: [
                "Scaled data structures to 5,000+ records with 98% memory efficiency.",
                "Improved modular architecture, achieving 30% faster compilation and 25% fewer pointer defects.",
                "Elevated performance by 35% using Min-Heaps & Hash Tables.",
                "Accelerated throughput by 40% using recursive traversal."
            ]
        }
    ]

    return (
        <section className="experience-section relative w-full overflow-visible">
            <div className="experience-container relative z-10">
                <header className="section-header">
                    <Reveal>
                        <h2 className="section-title">Internship & Training<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
                    </Reveal>
                </header>

                <div className="experience-cards-stack">
                    {experiences.map((exp, index) => {
                        const isExpanded = expandedCards[exp.id] || false
                        return (
                            <div 
                                key={exp.id} 
                                style={{ 
                                    position: 'sticky', 
                                    top: `calc(100px + ${index * 40}px)`, 
                                    zIndex: index + 1 
                                }}
                            >
                                <SlideIn 
                                    direction="up" 
                                    delay={0.1} 
                                    duration={0.6} 
                                    viewportMargin="-50px"
                                >
                                    <div className="training-unified-card">
                                        <div className="training-visual-side">
                                            <div 
                                                className="certificate-frame p-0 overflow-hidden bg-black/40 cursor-pointer group"
                                                onClick={() => setActiveCert(exp)}
                                            >
                                                <img 
                                                    src={exp.image} 
                                                    alt={`${exp.title} certificate`} 
                                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>

                                        <div className="training-content-side">
                                            <div className="training-card-header">
                                                <h3 className="training-title-large">{exp.title}</h3>
                                                <div className="training-meta">
                                                    <p className="training-institution">
                                                        {exp.institution} · {exp.type === 'internship' ? 'Internship' : 'Summer Training'}
                                                    </p>
                                                    <span className="training-date">{exp.date}</span>
                                                </div>
                                            </div>

                                            <ul className="training-feature-list">
                                                {exp.features.slice(0, 2).map((feature, idx) => (
                                                    <li key={idx}><strong>{feature.split(' ')[0]}</strong> {feature.split(' ').slice(1).join(' ')}</li>
                                                ))}
                                                {!isExpanded && exp.features.length > 2 && (
                                                    <button onClick={() => toggleExpand(exp.id)} className="read-more-btn mobile-only">Read more</button>
                                                )}
                                                {exp.features.slice(2).map((feature, idx) => (
                                                    <li key={idx} className={`extra-feature ${isExpanded ? 'expanded' : ''}`}>
                                                        <strong>{feature.split(' ')[0]}</strong> {feature.split(' ').slice(1).join(' ')}
                                                    </li>
                                                ))}
                                                {isExpanded && exp.features.length > 2 && (
                                                    <button onClick={() => toggleExpand(exp.id)} className="read-less-btn mobile-only">Read less</button>
                                                )}
                                            </ul>

                                            <button className="view-cert-btn" onClick={() => setActiveCert(exp)}>
                                                <span>{exp.type === 'internship' ? 'View Details' : 'View Full Certificate'}</span>
                                                <span className="arrow">↗</span>
                                            </button>
                                        </div>
                                    </div>
                                </SlideIn>
                            </div>
                        )
                    })}
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
                    year: activeCert.year
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

