import WorkHero from '../components/WorkHero'
import Projects from '../components/Projects'
import './WorkPage.css'
import { Reveal } from '../components/Animations'
import { BackgroundBeams } from '../components/ui/background-beams'

import PageTransition from '../components/PageTransition'

const WorkPage = () => {
    return (
        <PageTransition>
            <div className="work-page relative overflow-hidden">
                <WorkHero isFullPage={true} />
                <div className="case-studies-section relative z-10">
                    <div className="case-studies-container">
                        {/* <header className="case-studies-header">
                            <Reveal>
                                <h2 className="all-case-studies">All case studies</h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <button className="template-badge">See Templates $99</button>
                            </Reveal>
                        </header> */}
                        <Reveal delay={0.3}>
                            <Projects isCaseStudiesGrid={true} />
                        </Reveal>
                    </div>
                </div>
                
                <div className="fixed inset-0 pointer-events-none z-0">
                    <BackgroundBeams className="opacity-40" />
                </div>
            </div>
        </PageTransition>
    )
}

export default WorkPage
