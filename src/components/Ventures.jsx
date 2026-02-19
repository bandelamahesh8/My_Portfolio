import './Ventures.css'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { Reveal } from './Animations'
import ASMRStaticBackground from './ui/asmr-static-background'
import { CircularTestimonials } from './ui/circular-testimonials'

const Ventures = () => {
    const venturesList = [
        {
            name: "High-End UI Framework",
            designation: "Technical Venture",
            quote: "A specialized framework for building cinematic web experiences with production-grade motion and depth. Master the art of high-fidelity interfaces.",
            src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400"
        },
        {
            name: "Advanced Design Tokens",
            designation: "Utility System",
            quote: "A comprehensive design system architecture for Figma and React. Bridge the gap between brand identity and scalable product code seamlessly.",
            src: "https://images.unsplash.com/photo-1581291518655-9523bb99de09?q=80&w=1400"
        },
        {
            name: "Mahesh's Motion Lab",
            designation: "Experimental Tool",
            quote: "An educational resource exploring advanced Framer Motion techniques for front-end engineers who want to build premium user experiences.",
            src: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1400"
        }
    ]

    return (
        <section className="ventures-section relative">
            <ASMRStaticBackground />
            <div className="ventures-container relative z-10">
                <header className="ventures-header">
                    <Reveal>
                        <p className="eyebrow">SELECTED WORKS</p>
                        <h2 className="section-title">Ventures<Logo className="w-6 h-6 ml-2 inline-block align-baseline" color="#ff3333" /></h2>
                    </Reveal>
                </header>

                <motion.div 
                    className="ventures-content-wrapper min-h-[500px] flex items-center justify-center"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                        duration: 1, 
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <CircularTestimonials 
                        testimonials={venturesList}
                        autoplay={true}
                        colors={{
                            name: "#ffffff",
                            designation: "rgba(255, 255, 255, 0.5)",
                            testimony: "rgba(255, 255, 255, 0.8)",
                            arrowBackground: "rgba(255, 255, 255, 0.05)",
                            arrowForeground: "#ffffff",
                            arrowHoverBackground: "#ff3333"
                        }}
                        fontSizes={{
                            name: "32px",
                            designation: "14px",
                            quote: "18px"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Ventures
