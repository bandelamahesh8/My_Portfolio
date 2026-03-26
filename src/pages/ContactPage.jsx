import { Link } from 'react-router-dom'
import './ContactPage.css'
import { Reveal } from '../components/Animations'
import { WorkBackground } from '../components/ui/work-background'
import { FreelancerProfileCard } from '../components/ui/freelancer-profile-card'
import { Instagram, Twitter, Linkedin, Mail, Calendar, Github, Phone } from 'lucide-react'
import profileImg from '../assets/Profile1.png'
import Logo from '../components/Logo'

import PageTransition from '../components/PageTransition'

const ToolIcon = ({ icon, href }) => {
    const Icon = icon;
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1">
            <Icon className="h-5 w-5" />
        </a>
    );
};

const ContactPage = () => {
    const tools = [
        <div key="tool-1" className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" title="Online" />,
    ];

    return (
        <PageTransition>
            <div className="contact-page">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <WorkBackground />
                </div>

                <div className="contact-page-content relative z-10">
                    <div className="contact-main-card">
                        <header className="contact-page-header">
                            <Reveal>
                                <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" />
                                <p className="contact-eyebrow">READY TO PRE-ORDER?</p>
                                <h1 className="contact-page-title">Get in touch<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h1>
                            </Reveal>
                        </header>

                        <div className="contact-hero-grid">
                            <div className="contact-hero-left">
                                <Reveal delay={0.2}>
                                    <h3 className="cta-heading">Let's build the next big thing together.</h3>
                                    <div className="action-buttons-grid">
                                        <a href="mailto:maheshnaidu7648@gmail.com" className="contact-btn primary">
                                            <Mail size={20} />
                                            maheshnaidu7648@gmail.com
                                        </a>
                                        <a href="tel:+919177447240" className="contact-btn ghost">
                                            <Phone size={20} />
                                            +91-9177447240
                                        </a>
                                    </div>
                                    <div className="social-links-row">
                                        <ToolIcon icon={Github} href="https://github.com/bandelamahesh8" />
                                        <ToolIcon icon={Linkedin} href="https://www.linkedin.com/in/bandelamahesh88" />
                                    </div>
                                </Reveal>
                            </div>

                            <div className="contact-hero-right">
                                <div className="profile-card-wrapper">
                                    <Reveal>
                                        <FreelancerProfileCard
                                            name="Bandela Mahesh"
                                            title="Product Designer & Dev"
                                            avatarSrc={profileImg}
                                            bannerSrc="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80"
                                            stat1="⚡ Performance-First"
                                            stat2="📈 High Engagement"
                                            stat3="🧩 Real-Time Systems"
                                            tools={tools}
                                            className="border border-white/10 bg-black/20 backdrop-blur-3xl text-white"
                                            onGetInTouch={() => {}}
                                        />
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                <Link to="/articles" className="footer-nav-link">Articles</Link>
                                <Link to="/about" className="footer-nav-link">About</Link>
                                <Link to="/contact" className="footer-nav-link">Contact</Link>
                            </div>
                            <div className="footer-nav-column">
                                <h4 className="footer-nav-header">Social Media</h4>
                                <a href="https://www.instagram.com/maheshbandela8?igsh=MThwaXVwemltcnJscA==" className="footer-nav-link">Instagram</a>
                                <a href="#" className="footer-nav-link">Dribbble</a>
                                <a href="https://x.com/MaheshBandela88" className="footer-nav-link">X (Twitter)</a>
                                <a href="https://www.linkedin.com/in/bandelamahesh88" className="footer-nav-link">LinkedIn</a>
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

export default ContactPage
