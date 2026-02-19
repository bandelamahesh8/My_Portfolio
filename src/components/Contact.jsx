import './Contact.css'
import { Mail, Phone, Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import Logo from './Logo'
import { Reveal } from './Animations'
import { FreelancerProfileCard } from './ui/freelancer-profile-card'
import profileImg from '../assets/profile3.png'
import bannerImg from '../assets/profile4.png'
import { WavyBackground } from './ui/wavy-background'
import LazyBackground from './LazyBackground'

const ToolIcon = ({ icon, href }) => {
  const Icon = icon;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-white/50 border border-white/10 tooltip hover:bg-white/10 hover:text-white transition-colors" title="Social Link">
      <Icon className="h-4 w-4" />
    </a>
  );
};

const Contact = () => {
    const tools = [
        <ToolIcon key="tool-1" icon={Instagram} href="https://www.instagram.com/maheshbandela8?igsh=MThwaXVwemltcnJscA==" />,
        <ToolIcon key="tool-2" icon={Twitter} href="https://x.com/MaheshBandela88" />,
        <ToolIcon key="tool-3" icon={Linkedin} href="https://www.linkedin.com/in/bandelamahesh88" />,
    ];

    return (
        <section className="contact-section relative overflow-hidden" id="contact">
            <LazyBackground className="absolute inset-0 z-0">
                <WavyBackground 
                    className="max-w-4xl mx-auto pb-40"
                    containerClassName="absolute inset-0 z-0 h-full"
                    colors={['#22d3ee', '#e879f9', '#c084fc', '#818cf8', '#38bdf8']}
                    waveWidth={50}
                    backgroundFill="black"
                    blur={10}
                    speed="fast"
                    waveOpacity={0.5}
                />
            </LazyBackground>
            <div className="contact-container relative z-10">
                <div className="contact-card">
                    <header className="contact-header">
                        <Reveal>
                            <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" />
                            <p className="eyebrow">READY TO WORK?</p>
                            <h2 className="section-title">Get in touch</h2>
                        </Reveal>
                    </header>

                    <div className="contact-grid">
                        <div className="contact-left">
                            <Reveal delay={0.2}>
                                <h3 className="cta-heading">Let's build the next big thing together.</h3>
                                <div className="action-buttons">
                                    <a href="mailto:maheshbandela88@gmail.com" className="contact-btn primary">
                                        <Mail size={20} />
                                        maheshbandela88@gmail.com
                                    </a>
                                    <a href="tel:+919177447240" className="contact-btn ghost">
                                        <Phone size={20} />
                                        +91-9177447240
                                    </a>
                                </div>
                                <div className="social-links">
                                    <a href="https://github.com/bandelamahesh8" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={20} /></a>
                                    <a href="https://www.linkedin.com/in/bandelamahesh88" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={20} /></a>
                                </div>
                            </Reveal>
                        </div>

                        <div className="contact-right">
                            <Reveal delay={0.4}>
                                <div className="profile-card-wrapper">
                                    <FreelancerProfileCard
                                        name="Bandela Mahesh"
                                        title="Product Designer & Dev"
                                        avatarSrc={profileImg}
                                        bannerSrc={bannerImg}
                                        stat1="⚡Performance-First"
                                        stat2="📈High Engagement"
                                        stat3="🧩Real-Time Systems"
                                        tools={tools}
                                        className="mx-auto lg:ml-auto lg:mr-0 border border-white/10 bg-black/20 backdrop-blur-xl text-white"
                                        onGetInTouch={() => window.location.href = 'mailto:maheshbandela88@gmail.com'}
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
