import { useState } from 'react'
import './Certificates.css'
import Logo from './Logo'
import { Reveal } from './Animations'
import ASMRStaticBackground from './ui/asmr-static-background'
import { CircularTestimonials } from './ui/circular-testimonials'
import CertificateModal from './CertificateModal'
import CertificatesListModal from './CertificatesListModal'
import { ArrowRight } from 'lucide-react'

// Import all certificates
import cert1 from '../Certificates/ChatGPT-4_Prompt_Engineering_ChatGPT_Generative_Al_LLM.png'
import cert2 from '../Certificates/Build Generative Al Apps and Solutions with No-Code Tools.png'
import cert3 from '../Certificates/Master Generative Al & Generative Al tools (ChatGPT & more).png'
import cert4 from '../Certificates/Computational Theory Language Principle & Finite Automata Theory.png'
import cert5 from '../Certificates/Computer Communications.png'
import cert6 from '../Certificates/Digital SystemsFrom Logic Gates to Processors.png'
import cert7 from '../Certificates/Packet Switching Networks and Algorithms.png'
import cert8 from '../Certificates/The Bits and Bytes of Computer Networking.png'
import cert9 from '../Certificates/Introduction to Hardware and Operating Systems.png'
import cert10 from '../Certificates/Legacy Responsive Web Design V8.png'
import cert11 from '../Certificates/Fundamentals of Data Transformation.png'
import cert12 from '../Certificates/Query Optimization.png'
import cert13 from '../Certificates/Advanced Schema Patterns and Antipatterns.png'

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null)
    const [isListOpen, setIsListOpen] = useState(false)

    const certsList = [
        {
            name: "ChatGPT-4 Prompt Engineering",
            designation: "Generative AI / LLM",
            quote: "Mastering prompt engineering for advanced AI interactions.",
            src: cert1
        },
        {
            name: "Generative AI Apps with No-Code",
            designation: "AI Solutions",
            quote: "Building AI-powered applications without coding.",
            src: cert2
        },
        {
            name: "Master Generative AI Tools",
            designation: "AI Productivity",
            quote: "Leveraging ChatGPT and other tools for efficiency.",
            src: cert3
        },
        {
            name: "Computational Theory & Automata",
            designation: "Computer Science Theory",
            quote: "Understanding finite automata and language principles.",
            src: cert4
        },
        {
            name: "Computer Communications",
            designation: "Network Engineering",
            quote: "Architecture, protocols, and internet technologies.",
            src: cert5
        },
        {
            name: "Digital Systems Design",
            designation: "Hardware Engineering",
            quote: "From logic gates to processor architecture.",
            src: cert6
        },
        {
            name: "Packet Switching Networks",
            designation: "Network Algorithms",
            quote: "Deep dive into data transmission and routing algorithms.",
            src: cert7
        },
        {
            name: "Bits and Bytes of Networking",
            designation: "IT Fundamentals",
            quote: "Core concepts of computer networking and protocols.",
            src: cert8
        },
        {
            name: "Hardware & Operating Systems",
            designation: "Systems Architecture",
            quote: "Fundamental interaction between hardware and OS.",
            src: cert9
        },
        {
            name: "Responsive Web Design",
            designation: "Frontend Development",
            quote: "Building adaptive and accessible web interfaces.",
            src: cert10
        },
        {
            name: "Data Transformation Fundamentals",
            designation: "Data Engineering",
            quote: "Techniques for converting and mapping data structures.",
            src: cert11
        },
        {
            name: "Query Optimization",
            designation: "Database Performance",
            quote: "Advanced strategies for efficient SQL queries.",
            src: cert12
        },
        {
            name: "Schema Patterns & Antipatterns",
            designation: "Database Design",
            quote: "Best practices for scalable database schemas.",
            src: cert13
        }
    ]

    return (
        <section className="certificates-section relative" id="certificates">
            <ASMRStaticBackground />
            <div className="certificates-container relative z-10">
                <header className="certificates-header flex flex-col md:flex-row justify-between items-end gap-6">
                    <Reveal>
                        <p className="eyebrow">PROFESSIONAL MILESTONES</p>
                        <h2 className="section-title">Certificates<Logo className="w-6 h-6 ml-2 inline-block align-baseline" color="#ff3333" /></h2>
                    </Reveal>
                    
                    <Reveal delay={0.2}>
                         <button 
                            className="view-all-certificates-btn"
                            onClick={() => setIsListOpen(true)}
                        >
                            View All Certificates
                            <ArrowRight size={16} />
                        </button>
                    </Reveal>
                </header>

                <div className="certificates-content-wrapper relative z-10 min-h-[500px] flex flex-col items-center justify-center">
                    <CircularTestimonials 
                        testimonials={certsList}
                        autoplay={true}
                        onItemClick={(cert) => setSelectedCert(cert)}
                        colors={{
                            name: "#ffffff",
                            designation: "rgba(255, 255, 255, 0.5)",
                            testimony: "rgba(255, 255, 255, 0.8)",
                            arrowBackground: "transparent",
                            arrowForeground: "#ffffff",
                            arrowHoverBackground: "rgba(255, 255, 255, 0.1)"
                        }}
                        fontSizes={{
                            name: "32px",
                            designation: "14px",
                            quote: "18px"
                        }}
                    />
                </div>
            </div>
            
            <CertificateModal 
                certificate={selectedCert}
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                onNext={() => {
                    const currentIndex = certsList.findIndex(c => c.src === selectedCert.src)
                    const nextIndex = (currentIndex + 1) % certsList.length
                    setSelectedCert(certsList[nextIndex])
                }}
                onPrev={() => {
                    const currentIndex = certsList.findIndex(c => c.src === selectedCert.src)
                    const prevIndex = (currentIndex - 1 + certsList.length) % certsList.length
                    setSelectedCert(certsList[prevIndex])
                }}
            />

            <CertificatesListModal 
                isOpen={isListOpen}
                onClose={() => setIsListOpen(false)}
                certificates={certsList}
                onSelect={(cert) => setSelectedCert(cert)}
            />
        </section>
    )
}

export default Certificates
