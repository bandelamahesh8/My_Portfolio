import './Testimonials.css'
import Logo from './Logo'
import { Code2, Database, Layout, Server, Sparkles, Brain, Zap, Award, Trophy, Code, ExternalLink, Cpu, GitBranch, Cloud } from 'lucide-react'
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
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import hackathonCert from '../certificates/code-a-haunt.jpg'
import algoCert from '../certificates/ALGO_UNIVERSITY.png'

const Skills = () => {
    const [activeTab, setActiveTab] = useState('skills')
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
            title: "AI & Machine Learning",
            icon: <Cpu size={24} className="text-[#ff3333]" />,
            skills: [
                { name: "RAG", icon: <Database size={24} color="#339933" /> },
                { name: "AI", icon: <Brain size={24} color="#61DAFB" /> },
                { name: "Machine Learning", icon: <Server size={24} color="#00599C" /> },
                { name: "VAD (Voice Activity)", icon: <Zap size={24} color="#F7DF1E" /> },
                { name: "Prompt Engineering", icon: <Code size={24} color="#ffffff" /> },
                { name: "LLMs & GenAI", icon: <Sparkles size={24} color="#ff3333" /> }
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
            title: "Cloud & DevOps",
            icon: <Cloud size={24} className="text-[#ff3333]" />,
            skills: [
                { name: "AWS", icon: <Cloud size={24} color="#FF9900" /> },
                { name: "Docker", icon: <Server size={24} color="#2496ED" /> },
                { name: "Git & GitHub", icon: <GitBranch size={24} color="#F05032" /> },
                { name: "Oracle OCI", icon: <Database size={24} color="#F80000" /> },
                { name: "Linux", icon: <Cpu size={24} color="#FCC624" /> }
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
                        <div className="section-tabs">
                            <h2 
                                className={`section-tab ${activeTab === 'skills' ? 'active' : ''}`}
                                onMouseEnter={() => setActiveTab('skills')}
                            >
                                Skills & Technologies
                            </h2>
                            <span className="tab-separator">/</span>
                            <h2 
                                className={`section-tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                                onMouseEnter={() => setActiveTab('achievements')}
                            >
                                <Award size={24} className="tab-icon" />
                                Achievements
                                <Logo className="heading-logo" color="#ff3333" />
                            </h2>
                        </div>
                    </Reveal>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'skills' ? (
                        <motion.div 
                            key="skills"
                            className="skills-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
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
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="achievements"
                            className="achievements-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="achievement-card">
                                <div className="achievement-icon-wrapper main">
                                    <Trophy size={48} />
                                </div>
                                <div className="achievement-details">
                                    <h3>Code-A-Haunt Hackathon</h3>
                                    <p>Participated in the 24-hour Code-A-Haunt hackathon organized by Coding Blocks LPU.</p>
                                    <button 
                                        className="achievement-btn"
                                        onClick={() => window.open(hackathonCert, '_blank')}
                                    >
                                        View Certificate <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="achievement-card">
                                <div className="achievement-icon-wrapper main">
                                    <Award size={48} />
                                </div>
                                <div className="achievement-details">
                                    <h3>AlgoUniversity Dynamic Programming Camp</h3>
                                    <p>Successfully completed the Dynamic Programming Camp under the mentorship of Codeforces Master Manas Kumar Verma, conquering Matrix Exponentiation and SQRT Decomposition.</p>
                                    <button 
                                        className="achievement-btn"
                                        onClick={() => window.open(algoCert, '_blank')}
                                    >
                                        View Certificate <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="achievement-card">
                                <div className="achievement-icon-wrapper main">
                                    <Sparkles size={48} />
                                </div>
                                <div className="achievement-details">
                                    <h3>Cospira Selected for LPU InnoTek 2026</h3>
                                    <p>Cospira project was selected and presented at LPU InnoTek 2026, showcasing outstanding technical innovation, architectural execution, and potential impact.</p>
                                    <div className="milestone-badge">Selected & Presented</div>
                                </div>
                            </div>

                            <div className="achievement-card">
                                <div className="achievement-icon-wrapper main">
                                    <Code size={48} />
                                </div>
                                <div className="achievement-details">
                                    <h3>LeetCode Milestone</h3>
                                    <p>Successfully completed 200+ coding problems on LeetCode, demonstrating strong algorithmic problem-solving skills.</p>
                                    <div className="milestone-badge">200+ Solved</div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Skills
