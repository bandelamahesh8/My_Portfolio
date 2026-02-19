import './VenturesHero.css'
import Logo from './Logo'

const VenturesHero = () => {
    return (
        <section className="ventures-hero-section">
            <div className="ventures-hero-content">
                <p className="eyebrow">SIDE PROJECTS</p>
                <h1 className="ventures-title">Ventures<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h1>
                <p className="ventures-subtext">
                    The initiatives beyond regular design work.
                </p>
            </div>
        </section>
    )
}

export default VenturesHero
