import Hero from '../components/Hero'
import Logos from '../components/Logos'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Articles from '../components/Articles'
import { Reveal } from '../components/Animations'
import { WorkBackground } from '../components/ui/work-background'
import LazyBackground from '../components/LazyBackground'
import PageTransition from '../components/PageTransition'
import Logo from '../components/Logo'

const Home = () => {
    return (
        <PageTransition>
            <main>
                <div id="home">
                    <Hero />
                    <Logos />
                </div>
                
                <div id="about">
                    <About />
                    <Experience />
                </div>

                <section id="projects" className="work-homepage-section">
                    <LazyBackground className="absolute inset-0">
                        <WorkBackground className="opacity-60" />
                    </LazyBackground>
                    <div className="work-homepage-container">
                        <div className="work-homepage-header">
                            <Reveal>
                                {/* <p className="eyebrow">RESULTS DELIVERED</p> */}
                                <h2 className="title">Projects<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" /></h2>
                            </Reveal>
                        </div>
                        <Projects count={10} carousel />
                    </div>
                </section>

                <div id="certificates">
                    <Certificates />
                </div>

                <Testimonials />
                
                <Articles />
                
                <Contact />
            </main>
        </PageTransition>
    )
}

export default Home
