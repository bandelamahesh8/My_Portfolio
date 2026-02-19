import { Link } from 'react-router-dom'
import ArticlesHero from '../components/ArticlesHero'
import './ArticlesPage.css'
import { Reveal } from '../components/Animations'
import { FallingPattern } from '../components/ui/falling-pattern'

import PageTransition from '../components/PageTransition'
import Logo from '../components/Logo'

const ArticlesPage = () => {
    const articles = [
        {
            id: 1,
            title: "The Future of Design Systems",
            excerpt: "How AI is transforming the way we build and maintain design systems, making them more adaptive and efficient.",
            icon: "✦"
        },
        {
            id: 2,
            title: "Mastering Figma Variables",
            excerpt: "A comprehensive guide to managing complex design tokens and variables in Figma for scalable projects.",
            icon: "❖"
        },
        {
            id: 3,
            title: "Micro-interactions in 2024",
            excerpt: "Small details that make a huge impact. Exploring the latest trends in interface animation and user feedback.",
            icon: "⚡"
        },
        {
            id: 4,
            title: "Accessibility First Design",
            excerpt: "Why inclusive design is not just a requirement but a fundamental principle of modern product development.",
            icon: "Aa"
        }
    ]

    return (
        <PageTransition>
            <div className="articles-page relative overflow-hidden">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <FallingPattern color="rgba(255, 255, 255, 0.05)" />
                </div>
                
                <div className="relative z-10">
                    <ArticlesHero />
                </div>
                
                <div className="articles-content relative z-10">
                    <div className="articles-header">
                        <Reveal>
                            <h2 className="all-articles-title">All blog posts</h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <button className="template-badge-white">Collaboration</button>
                        </Reveal>
                    </div>

                    <div className="articles-grid">
                        {articles.map((article, index) => (
                            <Reveal key={article.id} delay={index * 0.1}>
                                <div className="article-card">
                                    <div className="article-image-container">
                                        <div className="article-icon-wrapper">
                                            <span className="article-icon">{article.icon}</span>
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <h3 className="article-card-title">{article.title}</h3>
                                        <p className="article-card-excerpt">{article.excerpt}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Reusing the Contact Section Structure */}
                <section className="articles-contact-section relative z-10">
                    <div className="contact-inner">
                        <Reveal>
                            <p className="contact-eyebrow">CONTACT</p>
                            <h2 className="contact-title">Start a conversation<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
                        </Reveal>
                        
                        <div className="contact-grid">
                            <div className="contact-left">
                                <Reveal delay={0.2}>
                                    <p className="contact-desc">
                                        Have a question or a project in mind? Let's build something exceptional together. Within 24 hours I will contact you to book a call.
                                    </p>
                                    <div className="contact-email">
                                        <a href="mailto:hello@mahesh.com">hello@mahesh.com</a>
                                    </div>
                                </Reveal>
                            </div>

                            <form className="contact-form">
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
                                <Link to="/articles" className="footer-nav-link">Articles</Link>
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

export default ArticlesPage
