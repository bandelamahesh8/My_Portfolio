import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Target, Code2, ChevronLeft, ChevronRight } from 'lucide-react'
import './ProjectModal.css'

const ProjectModal = ({ project, isOpen, onClose, onNext, onPrev }) => {

    const handleDragEnd = (event, info) => {
        const threshold = 100
        if (info.offset.x < -threshold && onNext) {
            onNext()
        } else if (info.offset.x > threshold && onPrev) {
            onPrev()
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!project) return null

    return createPortal(
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="modal-root">
                        <motion.div
                            key={project.id}
                            className="modal-card"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="modal-nav-container">
                                <button className="nav-arrow prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
                                    <ChevronLeft size={24} />
                                </button>
                                <button className="nav-arrow next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            <div className="swipe-indicator">Swipe to navigate</div>
                            {/* Close Button */}
                            <button className="modal-close" onClick={onClose}>
                                <X size={20} />
                            </button>

                            {/* Content Grid */}
                            <div className="modal-grid">
                                {/* Left Side: Visuals */}
                                <div className="modal-visuals">
                                    <div 
                                        className="modal-image-placeholder"
                                        style={project.image ? {
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'contain',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        } : {}}
                                    >
                                        {!project.image && <div className="glow-effect"></div>}
                                        <div className="project-type-tag">{project.featured ? 'Featured Project' : 'Case Study'}</div>
                                    </div>
                                    
                                    <div className="modal-stats">
                                        <div className="stat-box">
                                            <Calendar size={16} />
                                            <span>{project.startDate} — {project.endDate}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="modal-details">
                                    <div className="modal-header">
                                        <h2 className="modal-title">{project.title}</h2>
                                        <p className="modal-subtitle">{project.desc}</p>
                                    </div>

                                    <div className="modal-section">
                                        <div className="section-title">
                                            <Target size={16} />
                                            <span>Overview</span>
                                        </div>
                                        <p className="section-text">
                                            {project.longDesc || "This project explores the intersection of high-performance engineering and cinematic design. Built to provide a seamless user experience while maintaining robust backend scalability."}
                                        </p>
                                    </div>

                                    <div className="modal-section">
                                        <div className="section-title">
                                            <Code2 size={16} />
                                            <span>Technologies</span>
                                        </div>
                                        <div className="tech-pills">
                                            {project.tech?.map((t, i) => (
                                                <span key={i} className="tech-pill">{t}</span>
                                            )) || (
                                                <>
                                                    <span className="tech-pill">React</span>
                                                    <span className="tech-pill">Framer Motion</span>
                                                    <span className="tech-pill">Node.js</span>
                                                    <span className="tech-pill">Tailwind</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="modal-actions">
                                        <a href="#" className="modal-btn primary">
                                            <span>Live Demo</span>
                                            <ExternalLink size={16} />
                                        </a>
                                        <a href="#" className="modal-btn ghost">
                                            <Github size={16} />
                                            <span>Source</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default ProjectModal
