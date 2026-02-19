import { Link } from 'react-router-dom'
import VenturesHero from '../components/VenturesHero'
import './VenturesPage.css'
import { Reveal } from '../components/Animations'
import ASMRStaticBackground from '../components/ui/asmr-static-background'
import PageTransition from '../components/PageTransition'
import Logo from '../components/Logo'

const VenturesPage = () => {
    const ventures = [
        {
            id: 1,
            title: "High-End UI Framework",
            description: "A specialized framework for building cinematic web experiences with production-grade motion and depth. Master the art of high-fidelity interfaces.",
            tag: "FEATURED",
            link: "#"
        },
        {
            id: 2,
            title: "Prime Design System Kit",
            description: "Design System Kit for Figma. Powerful components with tokens to complete every project 10x faster. It's far more than just a UI Kit.",
            link: "#"
        },
        {
            id: 3,
            title: "Mahesh's Motion Lab",
            description: "An educational resource exploring advanced Framer Motion techniques for front-end engineers who want to build premium user experiences.",
            link: "#"
        }
    ]

    return (
        <PageTransition>
            <div className="ventures-page relative overflow-hidden">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <ASMRStaticBackground />
                </div>
                
                <div className="relative z-10">
                    <VenturesHero />
                </div>
                
                <div className="ventures-content relative z-10">
                    <div className="ventures-header">
                        <Reveal>
                            <h2 className="all-ventures-title">All projects</h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <button className="template-badge-white">Collaboration</button>
                        </Reveal>
                    </div>

                    <div className="ventures-list">
                        {ventures.map((venture, index) => (
                            <Reveal key={venture.id} delay={index * 0.1}>
                                <div className="venture-card">
                                    <div className="venture-image-container">
                                        {venture.tag && <span className="venture-tag">{venture.tag}</span>}
                                        <div className="venture-placeholder-image"></div>
                                        <button className="venture-arrow-btn">↗</button>
                                    </div>
                                    <div className="venture-info">
                                        <h3 className="venture-card-title">{venture.title}</h3>
                                        <p className="venture-card-desc">{venture.description}</p>
                                        <a href={venture.link} className="venture-learn-more">Learn more <Logo className="w-4 h-4 ml-1 inline-block" color="#ff3333" /></a>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <section className="ventures-contact-section relative z-10">
                    <div className="contact-inner">
                        <Reveal>
                            <p className="contact-eyebrow">CONTACT</p>
                            <h2 className="contact-title">Start a project<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
                        </Reveal>
                        
                        <div className="contact-grid">
                            <div className="contact-left">
                                <Reveal delay={0.2}>
                                    <p className="contact-desc">
                                        Describe your vision. Let's build something exceptional together. Within 24 hours I will contact you to book a call.
                                    </p>
                                    
                                    <div className="contact-email">
                                        <a href="mailto:maheshbandela88@gmail.com">maheshbandela88@gmail.com</a>
                                    </div>
                                </Reveal>
                            </div>

                            <form className="contact-form">
                                <Reveal delay={0.3} width="100%">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" placeholder="Bandela Mahesh" />
                                    </div>
                                </Reveal>
                                <Reveal delay={0.4} width="100%">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="maheshbandela88@gmail.com" />
                                    </div>
                                </Reveal>
                                <Reveal delay={0.5} width="100%">
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea placeholder="How can I help you?" rows="4"></textarea>
                                    </div>
                                </Reveal>
                                <Reveal delay={0.6}>
                                    <button type="submit" className="submit-btn">Submit</button>
                                </Reveal>
                            </form>
                        </div>
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
                                <Link to="/work" className="footer-nav-link">Work</Link>
                                <Link to="/ventures" className="footer-nav-link">Ventures</Link>
                                <Link to="#" className="footer-nav-link">Blog</Link>
                                <Link to="/about" className="footer-nav-link">About</Link>
                                <Link to="#" className="footer-nav-link">Contact</Link>
                            </div>
                            <div className="footer-nav-column">
                                <h4 className="footer-nav-header">Social Media</h4>
                                <a href="#" className="footer-nav-link">Gumroad</a>
                                <a href="#" className="footer-nav-link">Instagram</a>
                                <a href="#" className="footer-nav-link">Dribbble</a>
                                <a href="#" className="footer-nav-link">X (Twitter)</a>
                                <a href="#" className="footer-nav-link">LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-legal-bar">
                        <p className="footer-legal-text">Available for new projects ↗</p>
                        <div className="footer-legal-right-container">
                            <span className="footer-legal-author">Created by Mahesh</span>
                            <div className="footer-legal-badge-container">
                                <button className="footer-badge-item">Collaboration</button>
                                <button className="footer-badge-item">Design & Dev</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </PageTransition>
    )
}

export default VenturesPage
