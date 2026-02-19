import './AboutPage.css'
import profileImg from '../assets/Profile1.png'
import PageTransition from '../components/PageTransition'
import { Reveal } from '../components/Animations'
import { WavyBackground } from '../components/ui/wavy-background'
import Logo from '../components/Logo'

const AboutPage = () => {
    return (
        <PageTransition>
            <div className="about-page relative overflow-hidden">
                <WavyBackground 
                    className="max-w-4xl mx-auto pb-40"
                    containerClassName="fixed inset-0 z-0"
                    colors={['#22d3ee', '#e879f9', '#c084fc', '#818cf8', '#38bdf8']}
                    waveWidth={50}
                    backgroundFill="black"
                    blur={10}
                    speed="fast"
                    waveOpacity={0.5}
                />
                
                {/* Hero Section */}
                <section className="about-hero-full relative z-10">
                    <div className="grid-lines-container">
                        <div className="v-line"></div>
                        <div className="v-line"></div>
                        <div className="v-line"></div>
                        <div className="v-line"></div>
                    </div>
                    <div className="about-hero-container">
                        <div className="about-hero-content">
                            <Reveal>
                                <p className="eyebrow">HI, I'M MAHESH</p>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <h1 className="hero-title">About<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h1>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <p className="hero-tagline">Bandela Mahesh Designer</p>
                            </Reveal>
                        </div>
                        <div className="about-hero-image">
                            <Reveal delay={0.6}>
                                <img src={profileImg} alt="Bandela Mahesh" />
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="about-stats-section relative z-10">
                    <div className="about-stats-container">
                        <div className="stat-item">
                            <Reveal delay={0.1}>
                                <p className="stat-label">Experience</p>
                                <h3 className="stat-value">3+ years</h3>
                            </Reveal>
                        </div>
                        <div className="stat-item">
                            <Reveal delay={0.2}>
                                <p className="stat-label">Projects</p>
                                <h3 className="stat-value">20+ Works</h3>
                            </Reveal>
                        </div>
                        <div className="stat-item">
                            <Reveal delay={0.3}>
                                <p className="stat-label">Based In</p>
                                <h3 className="stat-value">India</h3>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="about-mission-section relative z-10">
                    <div className="about-mission-container">
                        <div className="mission-left">
                            <Reveal>
                                <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" />
                                <p className="eyebrow">THE MISSION</p>
                                <h2 className="mission-title">The mission</h2>
                            </Reveal>
                        </div>
                        <div className="mission-right">
                            <Reveal delay={0.2}>
                                <p className="mission-text">
                                    Users deserve products that approach design with <strong>intention</strong>, to create solutions that drive real usability and impact. Each iteration refines the product with <strong>purpose</strong>.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="about-gallery-section relative z-10">
                    <div className="about-gallery-container">
                        <div className="gallery-main">
                            <div className="gallery-item large">
                                <Reveal>
                                    <img src={profileImg} alt="Designer portrait" />
                                </Reveal>
                            </div>
                            <div className="gallery-stack">
                                <div className="gallery-item small">
                                    <Reveal delay={0.2}>
                                        <img src={profileImg} alt="Designer at work" />
                                    </Reveal>
                                </div>
                                <div className="gallery-item small">
                                    <Reveal delay={0.4}>
                                        <img src={profileImg} alt="Designer sketching" />
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Career Timeline Section */}
                <section className="about-career-section relative z-10">
                    <div className="about-career-container">
                        <div className="career-left">
                            <Reveal>
                                <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" />
                                <p className="eyebrow">EXPERIENCE</p>
                                <h2 className="career-title">Professional Path</h2>
                            </Reveal>
                        </div>
                        <div className="career-right">
                            <Reveal delay={0.2} width="100%">
                                <div className="career-item">
                                    <header className="career-header">
                                        <p className="career-date">2021 — Present</p>
                                        <h3 className="career-role">Product Designer & Developer</h3>
                                    </header>
                                    <p className="career-desc">
                                        Focusing on cinematic web experiences and complex UI systems. Bridging the gap between brand stories and technical implementation.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Training Section */}
                <section className="about-training-section relative z-10">
                    <div className="about-training-container">
                        <div className="training-left">
                            <Reveal>
                                <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" />
                                <p className="eyebrow">TRAINING & CERTIFICATIONS</p>
                                <h2 className="training-title">Skills Enhancement</h2>
                            </Reveal>
                        </div>
                        <div className="training-right">
                            <Reveal delay={0.2} width="100%">
                                <div className="training-item">
                                    <header className="training-header">
                                        <div className="training-meta">
                                            <p className="training-date">Jun' 2025 — Jul' 2025</p>
                                            <span className="training-badge">Summer Training | CERTIFICATE</span>
                                        </div>
                                        <h3 className="training-name">Data Structures and Algorithms using C++</h3>
                                        <p className="training-org">Lovely Professional University</p>
                                    </header>
                                    <ul className="training-bullets">
                                        <Reveal delay={0.3}>
                                            <li>Constructed a console-based library management system capable of handling 5,000+ records while attaining 98% memory efficiency and sustaining error-free execution.</li>
                                        </Reveal>
                                        <Reveal delay={0.4}>
                                            <li>Structured a modular program layout that shortened compilation time by 30% and curtailed pointer-related defects by 25% through disciplined memory control.</li>
                                        </Reveal>
                                        <Reveal delay={0.5}>
                                            <li>Employed advanced DSA constructs—including linked lists, hash tables, min-heaps, and undo stacks—to elevate runtime performance by 35% during intensive operations.</li>
                                        </Reveal>
                                        <Reveal delay={0.6}>
                                            <li>Incorporated recursive traversal and bubble-sort ordering logic to accelerate record retrieval and sorting throughput by 40%.</li>
                                        </Reveal>
                                        <Reveal delay={0.7}>
                                            <li>Leveraged C++, object-oriented design, and core data structures using VS Code and MinGW for efficient low-level system engineering.</li>
                                        </Reveal>
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Long About Me / Values */}
                <section className="about-values-section relative z-10">
                    <div className="about-values-container">
                        <div className="values-header">
                            <Reveal>
                                <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" />
                                <p className="eyebrow">ABOUT ME</p>
                            </Reveal>
                        </div>
                        <div className="values-content">
                            <div className="values-text">
                                <Reveal delay={0.2}>
                                    <p>
                                        Throughout my career, I've had the privilege of working on various technical projects. These experiences have shaped my perspective on innovation, efficiency, and user-centric engineering.
                                    </p>
                                </Reveal>
                                <br />
                                <Reveal delay={0.3}>
                                    <p>
                                        What sets my work apart is my <strong>technical depth</strong> and my ability to create meaningful interfaces that drive results. My journey is about blending code with high-end design.
                                    </p>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="work-contact-section relative z-10">
                    <div className="work-contact-container">
                        <div className="work-contact-content">
                            <div className="work-contact-text-side">
                                <Reveal>
                                    <p className="contact-eyebrow">CONTACT</p>
                                    <h2 className="work-contact-title">Start a project<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
                                    <p className="work-contact-description">
                                        Describe your vision. Let's build something exceptional together.
                                    </p>
                                    <p className="work-collab-text">Let's collaborate.</p>
                                </Reveal>
                            </div>
                            <div className="work-contact-form-side">
                                <form>
                                    <Reveal delay={0.2} width="100%">
                                        <div className="work-form-group">
                                            <label>Name</label>
                                            <input type="text" placeholder="Your Name" className="work-form-input" />
                                        </div>
                                    </Reveal>
                                    <Reveal delay={0.3} width="100%">
                                        <div className="work-form-group">
                                            <label>Email</label>
                                            <input type="email" placeholder="your@email.com" className="work-form-input" />
                                        </div>
                                    </Reveal>
                                    <Reveal delay={0.4} width="100%">
                                        <div className="work-form-group">
                                            <label>Message</label>
                                            <textarea placeholder="How can I help you?" rows="4" className="work-form-textarea"></textarea>
                                        </div>
                                    </Reveal>
                                    <Reveal delay={0.5}>
                                        <button type="submit" className="work-submit-btn">Submit</button>
                                    </Reveal>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="work-footer-section relative z-10">
                    <div className="footer-brand-grid">
                        <div className="footer-brand-info">
                            <div className="footer-brand-logo">Bandela Mahesh<Logo className="w-6 h-6 ml-2 inline-block" color="#ff3333" /></div>
                            <p className="footer-brand-tagline">Crafting state-of-the-art cinematic web experiences that deliver high-end results.</p>
                        </div>
                    </div>

                    <div className="footer-legal-bar">
                        <p className="footer-legal-text">Available for new projects</p>
                        <div className="footer-legal-right-container">
                            <span className="footer-legal-author">Created by Mahesh</span>
                        </div>
                    </div>
                </footer>
            </div>
        </PageTransition>
    )
}

export default AboutPage
