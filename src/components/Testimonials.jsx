import './Testimonials.css'
import Logo from './Logo'
import { Code2, Database, Layout, Server, Sparkles, Brain, Zap } from 'lucide-react'
import { 
    SiPython, SiJavascript, SiCplusplus, SiC, SiPhp, 
    SiDjango, SiFlask, SiNodedotjs, 
    SiHtml5, SiCss3, SiReact, SiBootstrap, 
    SiMongodb, SiSupabase, SiMysql 
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { Reveal } from './Animations'
import { FallingPattern } from './ui/falling-pattern'
import LazyBackground from './LazyBackground'

const Skills = () => {
    const skillsCategories = [
        {
            title: "Languages",
            icon: <Code2 size={24} className="text-[#ff3333]" />,
            skills: [
                { name: "Python", icon: <SiPython size={24} color="#3776AB" /> },
                { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
                { name: "C++", icon: <SiCplusplus size={24} color="#00599C" /> },
                { name: "Java", icon: <FaJava size={24} color="#ED8B00" /> },
                { name: "C", icon: <SiC size={24} color="#A8B9CC" /> },
                { name: "PHP", icon: <SiPhp size={24} color="#777BB4" /> }
            ]
        },
        {
            title: "Frontend",
            icon: <Layout size={32} className="text-[#ff3333]" />,
            skills: [
                { name: "HTML", icon: <SiHtml5 size={24} color="#E34F26" /> },
                { name: "CSS", icon: <SiCss3 size={24} color="#1572B6" /> },
                { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
                { name: "Bootstrap", icon: <SiBootstrap size={24} color="#7952B3" /> }
            ]
        },
        {
            title: "Backend & Databases",
            icon: <Database size={32} className="text-[#ff3333]" />,
            skills: [
                { name: "Django", icon: <SiDjango size={24} color="#092E20" /> },
                { name: "Flask", icon: <SiFlask size={24} color="#ffffff" /> },
                { name: "Node.js", icon: <SiNodedotjs size={24} color="#339933" /> },
                { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
                { name: "Supabase", icon: <SiSupabase size={24} color="#3ECF8E" /> },
                { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> }
            ]
        },
        {
            title: "Soft Skills",
            icon: <Brain size={32} className="text-[#ff3333]" />,
            skills: [
                { name: "Problem-Solving", icon: <Sparkles size={24} color="#ff3333" /> },
                { name: "Adaptability", icon: <Zap size={24} color="#ff3333" /> },
                { name: "Creative", icon: <Brain size={24} color="#ff3333" /> }
            ]
        }
    ]

    return (
        <section className="skills-section relative" id="skills">
            <LazyBackground className="absolute inset-0">
                <FallingPattern 
                    color="rgba(255, 255, 255, 0.05)" 
                    className="opacity-40"
                />
            </LazyBackground>
            <div className="skills-container relative z-10">
                <header className="skills-header">
                    <Reveal>
                        {/* <p className="eyebrow">EXPERTISE</p> */}
                        <h2 className="section-title">
                            Skills & Technologies<Logo className="heading-logo" color="#ff3333" />
                        </h2>
                    </Reveal>
                </header>

                <div className="skills-grid">
                    {skillsCategories.map((category, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className={`skill-card area-${category.title.split(' ')[0].toLowerCase()}`}>
                                <div className="skill-card-header">
                                    <div className="category-icon-wrapper">
                                        {category.icon}
                                    </div>
                                    <h3 className="category-title">{category.title}</h3>
                                </div>
                                <div className="skills-list">
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx} className="skill-pill">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
