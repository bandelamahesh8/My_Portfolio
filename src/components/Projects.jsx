import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import './Projects.css'
import { SlideIn } from './Animations'
import ProjectModal from './ProjectModal'

import cospiraImg from '../Project_banners/Cospira.png'
import portfolioImg from '../Project_banners/Portfolio.png'
import conceptImg from '../Project_banners/Concept.png'
import ecommerceImg from '../Project_banners/Ecommerce.png'
import authImg from '../Project_banners/Authentication.png'

const CARD_WIDTH = 400 // Must match CSS min-width
const GAP = 32

const ProjectCard = ({ project, isActive, onClick }) => {
    return (
        <motion.div
            className={`work-card ${isActive ? 'active' : ''}`}
            onClick={onClick}
            animate={{
                scale: isActive ? 1.1 : 0.8,
                opacity: 1,
                filter: 'blur(0px)'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ zIndex: isActive ? 10 : 1 }}
        >
            <div className="work-image-wrapper">
                {project.featured && <span className="featured-tag">FEATURED</span>}
                <span className="work-date-badge">{project.startDate} — {project.endDate}</span>
                <div className="work-placeholder">
                    <div 
                        className="image-container-target"
                        style={project.image ? {
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        } : {}}
                    ></div>
                    <div className="overlay-texture"></div>
                </div>
            </div>
            <div className="work-info">
                <h3 className="work-title">{project.title}</h3>
                <p className="work-meta">{project.desc}</p>
            </div>
        </motion.div>
    )
}

const Projects = ({ isCaseStudiesGrid, count = 4, carousel = false }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [cardWidth, setCardWidth] = useState(400)
    const [containerWidth, setContainerWidth] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)
    const carouselRef = useRef(null)
    const x = useMotionValue(0)

    useEffect(() => {
        const updateDimensions = () => {
            if (carousel && carouselRef.current) {
                setContainerWidth(carouselRef.current.offsetWidth)
                
                // Measure card width from the first item
                const item = carouselRef.current.querySelector('.carousel-item')
                if (item) {
                    setCardWidth(item.offsetWidth)
                }
            }
        }
        
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [carousel])

    // Center the active item
    const projects = [
        {
            id: 'project-1',
            title: "Cospira",
            desc: "AI-Governed Real-Time Communication Platform.",
            longDesc: "A high-performance communication platform leveraging AI for real-time governance, moderation, and automated transcription. Focused on low-latency WebRTC streams and intelligent agent integration.",
            startDate: "2024-12",
            endDate: "Present",
            tech: ["React", "Node.js", "WebRTC", "OpenAI", "PostgreSQL"],
            featured: true,
            image: cospiraImg
        },
        {
            id: 'project-5',
            title: "My Portfolio",
            desc: "A 3D portfolio website.",
            longDesc: "A cinematic 3D portfolio experience built to showcase interactive storytelling and high-fidelity UI engineering. Features advanced motion systems and performance-optimized 3D interactions.",
            startDate: "2024-10",
            endDate: "2024-11",
            tech: ["React", "Three.js", "Framer Motion", "GLSL", "GSAP"],
            featured: false,
            image: portfolioImg
        },
        {
            id: 'project-3',
            title: "Concept Clarity",
            desc: "AI-Powered Concept Generation Platform.",
            longDesc: "An internal tool designed for rapid conceptualization and prototyping using generative AI. Streamlines the workflow from initial idea to visual mockups and interactive wireframes.",
            startDate: "2024-07",
            endDate: "2024-09",
            tech: ["Next.js", "Python", "TailwindCSS", "Prisma", "AWS"],
            featured: false,
            image: conceptImg
        },
        {
            id: 'project-2',
            title: "Ecommerce",
            desc: "Subscription-Based E-Commerce Website.",
            longDesc: "A specialized daily essentials platform with a subscription-first logic. Optimized for recurring billing, inventory tracking, and high-conversion user flows.",
            startDate: "2024-04",
            endDate: "2024-06",
            tech: ["Shopify", "React", "GraphQL", "Stripe", "Redis"],
            featured: false,
            image: ecommerceImg
        },
        {
            id: 'project-4',
            title: "Multi-Authentication system",
            desc: "Secure Authentication for Web Applications.",
            longDesc: "A modular authentication service providing OAuth, MFA, and passkey support. Designed for seamless integration into enterprise ecosystems with a focus on security and developer experience.",
            startDate: "2024-01",
            endDate: "2024-03",
            tech: ["Java", "Spring Boot", "OAuth2", "Docker", "Redis"],
            featured: false,
            image: authImg
        }
    ]

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x
        const velocity = info.velocity.x

        if (offset < -50 || velocity < -300) {
            setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1))
        } else if (offset > 50 || velocity > 300) {
            setActiveIndex((prev) => Math.max(prev - 1, 0))
        }
    }

    // Effect to update X when    // Center the active item
    useEffect(() => {
        if (carousel && containerWidth > 0 && cardWidth > 0) {
            // Calculate center position using dynamic cardWidth
            const centerOffset = containerWidth / 2 - cardWidth / 2
            const newX = -(activeIndex * (cardWidth + GAP)) + centerOffset
            animate(x, newX, { type: "spring", stiffness: 300, damping: 30 })
        }
    }, [activeIndex, containerWidth, cardWidth, carousel, x])

    // Wheel (trackpad) support
    const isScrollingRef = useRef(false)

    useEffect(() => {
        const element = carouselRef.current
        if (!element || !carousel) return

        const handleWheel = (e) => {
            // Check if horizontal scroll is dominant
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
                e.preventDefault()

                if (isScrollingRef.current) return

                isScrollingRef.current = true
                
                if (e.deltaX > 0) {
                    setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1))
                } else {
                    setActiveIndex((prev) => Math.max(prev - 1, 0))
                }
                
                // Cooldown
                setTimeout(() => {
                    isScrollingRef.current = false
                }, 500)
            }
        }

        element.addEventListener('wheel', handleWheel, { passive: false })
        return () => element.removeEventListener('wheel', handleWheel)
    }, [carousel, projects.length])

    if (carousel) {
        return (
            <>
                <div 
                    className="carousel-container" 
                    ref={carouselRef}
                >
                    <motion.div 
                        className="inner-carousel focused"
                        style={{ x }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                    >
                        {projects.map((project, index) => (
                            <div className="carousel-item" key={project.id}>
                                <ProjectCard 
                                    project={project} 
                                    isActive={index === activeIndex} 
                                    onClick={() => {
                                        if (index === activeIndex) {
                                            setSelectedProject(project)
                                        } else {
                                            setActiveIndex(index)
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <ProjectModal 
                    project={selectedProject} 
                    isOpen={!!selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                    onNext={() => {
                        const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
                        const nextIndex = (currentIndex + 1) % projects.length
                        setSelectedProject(projects[nextIndex])
                        // Also update active index if in carousel
                        if (carousel) setActiveIndex(nextIndex)
                    }}
                    onPrev={() => {
                        const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
                        const prevIndex = (currentIndex - 1 + projects.length) % projects.length
                        setSelectedProject(projects[prevIndex])
                        // Also update active index if in carousel
                        if (carousel) setActiveIndex(prevIndex)
                    }}
                />
            </>
        )
    }

    return (
        <>
            <div className={`projects-grid ${isCaseStudiesGrid ? 'case-studies' : ''}`}>
                {projects.map((project, index) => (
                    <SlideIn 
                        key={project.id} 
                        direction={index % 2 === 0 ? "left" : "right"} 
                        delay={index * 0.1}
                    >
                        <ProjectCard 
                            project={project} 
                            isActive={true} 
                            onClick={() => setSelectedProject(project)}
                        />
                    </SlideIn>
                ))}
            </div>
            <ProjectModal 
                project={selectedProject} 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
                onNext={() => {
                    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
                    const nextIndex = (currentIndex + 1) % projects.length
                    setSelectedProject(projects[nextIndex])
                }}
                onPrev={() => {
                    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
                    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
                    setSelectedProject(projects[prevIndex])
                }}
            />
        </>
    )
}

export default Projects
