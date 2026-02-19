import { useState } from 'react'
import { Link } from 'react-router-dom'
import CertificatesHero from '../components/CertificatesHero'
import './CertificatesPage.css'
import { Reveal } from '../components/Animations'
import ASMRStaticBackground from '../components/ui/asmr-static-background'
import PageTransition from '../components/PageTransition'
import CertificateModal from '../components/CertificateModal'
import Logo from '../components/Logo'

// Import all certificates
// ... (imports as they were)
import cert1 from '../Certificates/Advanced Schema Patterns and Antipatterns.png'
import cert2 from '../Certificates/Build Generative Al Apps and Solutions with No-Code Tools.png'
import cert3 from '../Certificates/ChatGPT-4_Prompt_Engineering_ChatGPT_Generative_Al_LLM.png'
import cert4 from '../Certificates/Computational Theory Language Principle & Finite Automata Theory.png'
import cert5 from '../Certificates/Computer Communications.png'
import cert6 from '../Certificates/Digital SystemsFrom Logic Gates to Processors.png'
import cert7 from '../Certificates/Fundamentals of Data Transformation.png'
import cert8 from '../Certificates/Introduction to Hardware and Operating Systems.png'
import cert9 from '../Certificates/Legacy Responsive Web Design V8.png'
import cert10 from '../Certificates/Master Generative Al & Generative Al tools (ChatGPT & more).png'
import cert11 from '../Certificates/Packet Switching Networks and Algorithms.png'
import cert12 from '../Certificates/Query Optimization.png'
import cert13 from '../Certificates/The Bits and Bytes of Computer Networking.png'

const CertificatesPage = () => {
    const [selectedCert, setSelectedCert] = useState(null)

    const certificates = [
        { id: 1, img: cert1, title: "Technical Certification", designation: "AWS / Cloud Infrastructure", quote: "Scalable global infrastructure design and cloud security." },
        { id: 2, img: cert2, title: "Programming Mastery", designation: "Python / Backend", quote: "Advanced logic, automation, and data processing systems." },
        { id: 3, img: cert3, title: "Data Structures", designation: "Algorithms / C++", quote: "Optimization and complex problem solving through efficient data structures." },
        { id: 4, img: cert4, title: "Web Development", designation: "Frontend / React", quote: "Interactive cinematic experiences and modern UI architecture." },
        { id: 5, img: cert5, title: "Cyber Security", designation: "System Defense", quote: "Enterprise-grade security protocols and vulnerability assessment." },
        { id: 6, img: cert6, title: "Full Stack Development", designation: "Product Systems", quote: "End-to-end scalable product architecture and deployment." },
        { id: 7, img: cert7, title: "Digital Marketing", designation: "Growth Engineering", quote: "Conversion-led design and digital brand visibility." },
        { id: 8, img: cert8, title: "Machine Learning", designation: "AI / Data Science", quote: "Predictive modeling and neural network integration." },
        { id: 9, img: cert9, title: "Database Management", designation: "SQL / Optimization", quote: "Highly efficient data persistence and relational mapping." },
        { id: 10, img: cert10, title: "UI/UX Engineering", designation: "Interaction Design", quote: "States-of-the-art cinematic interfaces and user journeys." },
        { id: 11, img: cert11, title: "Mobile Development", designation: "React Native / iOS", quote: "High-end mobile experiences with native performance." },
        { id: 12, img: cert12, title: "Agile Project Management", designation: "Product Delivery", quote: "Modern workflow orchestration and team collaboration." },
        { id: 13, img: cert13, title: "Quality Assurance", designation: "Software Testing", quote: "Robustness, performance benchmarking, and system reliability." }
    ]

    return (
        <PageTransition>
            <div className="certificates-page relative overflow-hidden">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <ASMRStaticBackground />
                </div>
                
                <div className="relative z-10">
                    <CertificatesHero />
                </div>
                
                <div className="certificates-content relative z-10">
                    <div className="certificates-grid">
                        {certificates.map((cert, index) => (
                            <Reveal key={cert.id} delay={index * 0.05}>
                                <div className="certificate-item" onClick={() => setSelectedCert(cert)}>
                                    <div className="certificate-image-wrapper">
                                        <img src={cert.img} alt={cert.title} className="certificate-img" />
                                        <div className="certificate-overlay">
                                            <span className="cert-id">#{cert.id}</span>
                                            <button className="cert-view-btn">View Details</button>
                                        </div>
                                    </div>
                                    <h3 className="certificate-item-title">{cert.title}</h3>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <CertificateModal 
                    certificate={selectedCert}
                    isOpen={!!selectedCert}
                    onClose={() => setSelectedCert(null)}
                    onNext={() => {
                        const currentIndex = certificates.findIndex(c => c.id === selectedCert.id)
                        const nextIndex = (currentIndex + 1) % certificates.length
                        setSelectedCert(certificates[nextIndex])
                    }}
                    onPrev={() => {
                        const currentIndex = certificates.findIndex(c => c.id === selectedCert.id)
                        const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length
                        setSelectedCert(certificates[prevIndex])
                    }}
                />

                <section className="certificates-footer-cta relative z-10">
                    <div className="cta-inner">
                        <Reveal>
                            <h2 className="cta-title">Continuous Learning<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
                            <p className="cta-text">Always evolving, always building.</p>
                        </Reveal>
                    </div>
                </section>

                <footer className="work-footer-section relative z-10">
                    <div className="footer-brand-grid">
                        <div className="footer-brand-info">
                            <div className="footer-brand-logo">Bandela Mahesh<Logo className="w-6 h-6 ml-2 inline-block" color="#ff3333" /></div>
                            <p className="footer-brand-tagline">Crafting state-of-the-art cinematic web experiences that deliver high-end results.</p>
                            <button className="footer-brand-button">Contact now</button>
                        </div>
                        
                        <div className="footer-navigation-grid">
                            <div className="footer-nav-column">
                                <h4 className="footer-nav-header">Mahesh</h4>
                                <Link to="/projects" className="footer-nav-link">Projects</Link>
                                <Link to="/certificates" className="footer-nav-link">Certificates</Link>
                                <Link to="/about" className="footer-nav-link">About</Link>
                                <Link to="/contact" className="footer-nav-link">Contact</Link>
                            </div>
                            <div className="footer-nav-column">
                                <h4 className="footer-nav-header">Social Media</h4>
                                <a href="https://linkedin.com/in/bandelamahesh" className="footer-nav-link">LinkedIn</a>
                                <a href="https://github.com/bandelamahesh" className="footer-nav-link">GitHub</a>
                                <a href="mailto:hello@mahesh.com" className="footer-nav-link">Mail</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </PageTransition>
    )
}

export default CertificatesPage
