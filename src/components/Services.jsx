import './Services.css'
import { Layout, MonitorSmartphone, ShieldCheck } from 'lucide-react'
import Logo from './Logo'
import { Reveal, ScaleIn } from './Animations'

const Services = () => {
    const services = [
        {
            icon: <Layout size={24} />,
            title: "Framer Development",
            description: "Official Framer Expert creating custom web solutions that converts. Engage your clients with visually striking and functional experiences. Full assistance with site publication included.",
            price: "From 9,000 USD"
        },
        {
            icon: <MonitorSmartphone size={24} />,
            title: "Mobile & Web Design",
            description: "Great design isn't just about looks. It's about clarity and ease of use. Let's design app or site that engage your users, and elevate your brand with thoughtful interactions and polished aesthetics.",
            price: "From 7,000 USD"
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "UX Audit",
            description: "Struggling with website performance? A usability audit reveal pain points of your customers, and provides actionable insights to boost conversion. Excellent first step into growing your business.",
            price: "From 3,500 USD"
        }
    ]

    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <header className="services-header">
                    <Reveal>
                        <Logo className="w-8 h-8 mb-4 ml-0" color="#ff3333" />
                        <p className="eyebrow">LEVEL UP YOUR BUSINESS</p>
                        <h2 className="section-title">Services</h2>
                    </Reveal>
                </header>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ScaleIn key={index} delay={index * 0.1}>
                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                                <p className="service-price">{service.price}</p>
                                <button className="service-cta">
                                    Book a call ↗
                                </button>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
