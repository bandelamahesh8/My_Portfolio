import './CertificatesHero.css'
import Logo from './Logo'

const CertificatesHero = () => {
    return (
        <section className="certificates-hero-section">
            <div className="certificates-hero-content">
                <p className="eyebrow">ACHIEVEMENTS</p>
                <h1 className="certificates-title">Certificates<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h1>
                <p className="certificates-subtext">
                    Professional certifications and technical training accomplishments.
                </p>
            </div>
        </section>
    )
}

export default CertificatesHero
