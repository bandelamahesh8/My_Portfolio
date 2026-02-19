import './WorkHero.css'
import Logo from './Logo'
import heroBg from '../assets/profile.png'

const WorkHero = ({ isFullPage }) => {
    return (
        <section className={`work-hero-section ${isFullPage ? 'full-page' : ''}`}>
            {isFullPage && (
                <div className="work-hero-bg">
                    <img src={heroBg} alt="Work Background" />
                    <div className="hero-overlay"></div>
                </div>
            )}
            <div className="work-hero-container">
                <div className="work-hero-content">
                    {/* <p className="eyebrow">PROJECTS</p> */}
                    <h1 className="work-title">Projects<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h1>
                    <p className="work-subtext">
                        Real design process studios. Success stories of the products that I helped to improve or shape from the ground.
                    </p>
                </div>
                
                {!isFullPage && (
                    <div className="work-hero-decoration">
                        <div className="circular-glow"></div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default WorkHero
