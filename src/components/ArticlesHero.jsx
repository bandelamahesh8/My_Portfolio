import './ArticlesHero.css'
import Logo from './Logo'

const ArticlesHero = () => {
    return (
        <section className="articles-hero-section">
            <div className="articles-hero-content">
                <p className="eyebrow">DESIGN & PRODUCTIVITY INSIGHTS</p>
                <h1 className="articles-title">Articles<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h1>
                <p className="articles-subtext">
                    Insights from the lessons I learned through over a decade of working with the best in the industry.
                </p>
            </div>
        </section>
    )
}

export default ArticlesHero
