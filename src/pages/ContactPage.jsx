import { Link } from 'react-router-dom'
import './ContactPage.css'
import { Reveal } from '../components/Animations'
import { WorkBackground } from '../components/ui/work-background'
import { FreelancerProfileCard } from '../components/ui/freelancer-profile-card'
import { Instagram, Twitter, Linkedin, Mail, Calendar, Github } from 'lucide-react'
import profileImg from '../assets/Profile1.png'
import Logo from '../components/Logo'

import PageTransition from '../components/PageTransition'

const ToolIcon = ({ icon, href }) => {
    const Icon = icon;
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white transition-colors">
            <Icon className="h-4 w-4" />
        </a>
    );
};

const ContactPage = () => {
    const tools = [
        <ToolIcon key="tool-1" icon={Instagram} href="https://www.instagram.com/maheshbandela8?igsh=MThwaXVwemltcnJscA==" />,
        <ToolIcon key="tool-2" icon={Twitter} href="https://x.com/MaheshBandela88" />,
        <ToolIcon key="tool-3" icon={Linkedin} href="https://www.linkedin.com/in/bandelamahesh88" />,
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
                                <div className="profile-card-wrapper">
                                    <Reveal>
                                        <FreelancerProfileCard
                                            name="Bandela Mahesh"
                                            title="Product Designer & Dev"
                                            avatarSrc={profileImg}
                                            bannerSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
                                            stat1="⚡Performance-First"
                                            stat2="📈High Engagement"
                                            stat3="🧩Real-Time Systems"
                                            tools={tools}
                                            className="border border-white/10 bg-black/20 backdrop-blur-xl text-white"
                                            onGetInTouch={() => {}}
                                        />
                                    </Reveal>
                                </div>

                                <div className="contact-info-footer">
                                    <Reveal delay={0.2}>
                                        <h3 className="cta-heading">Let's build the next big thing together.</h3>
                                        <div className="action-buttons-grid">
                                            <a href="mailto:maheshbandela88@gmail.com" className="contact-btn primary">
                                                <Mail size={20} />
                                                Send an email
                                            </a>
                                            <a href="#" className="contact-btn ghost">
                                                <Calendar size={20} />
                                                Book a call
                                            </a>
                                        </div>
                                        <div className="social-links-row">
                                            <a href="https://x.com/MaheshBandela88" className="social-link"><Twitter size={20} /></a>
                                            <a href="https://github.com/bandelamahesh8" className="social-link"><Github size={20} /></a>
                                            <a href="https://www.linkedin.com/in/bandelamahesh88" className="social-link"><Linkedin size={20} /></a>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>

                            <div className="contact-hero-right">
                                <form className="contact-page-form">
                                    <Reveal delay={0.3} width="100%">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                    </Reveal>
                                    <Reveal delay={0.4} width="100%">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" placeholder="your@email.com" />
                                        </div>
                                    </Reveal>
                                    <Reveal delay={0.5} width="100%">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea placeholder="How can I help you?" rows="6"></textarea>
                                        </div>
                                    </Reveal>
                                    <Reveal delay={0.6}>
                                        <button type="submit" className="submit-btn-full">Submit Message</button>
                                    </Reveal>
                                </form>
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
