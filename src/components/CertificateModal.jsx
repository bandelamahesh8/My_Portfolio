import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import './CertificateModal.css'

const CertificateModal = ({ certificate, isOpen, onClose, onNext, onPrev }) => {

    const showNav = onNext && onPrev

    const handleDragEnd = (event, info) => {
        if (!showNav) return
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

    if (!certificate) return null

    return createPortal(
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    <motion.div
                        className="cert-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <div className="cert-modal-root">
                        <motion.div
                            key={certificate.id || certificate.name}
                            className="cert-modal-card"
                            drag={showNav ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {showNav && (
                                <div className="modal-nav-container">
                                    <button className="nav-arrow prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button className="nav-arrow next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            )}

                            {showNav && <div className="swipe-indicator">Swipe to navigate</div>}
                            <button className="cert-modal-close" onClick={onClose}>
                                <X size={20} />
                            </button>
                            {/* ... (rest of the content) */}
                            <div className="cert-modal-grid">
                                <div className="cert-modal-visual">
                                    <img src={certificate.src || certificate.img} alt={certificate.name || certificate.title} className="cert-modal-img" tabIndex="-1" />
                                </div>

                                <div className="cert-modal-details">
                                    <div className="cert-modal-header">
                                        <div className="cert-badge">Official Certificate</div>
                                        <h2 className="cert-modal-title">{certificate.name || certificate.title}</h2>
                                        <p className="cert-modal-org">{certificate.designation}</p>
                                    </div>

                                    <div className="cert-modal-info">
                                        <div className="info-block">
                                            <Award size={18} className="info-icon" />
                                            <div>
                                                <h4 className="info-label">Credential Description</h4>
                                                <p className="info-text">{certificate.quote || "A professional verification of skills and technical proficiency in the specified domain."}</p>
                                            </div>
                                        </div>

                                        <div className="info-block">
                                            <Calendar size={18} className="info-icon" />
                                            <div>
                                                <h4 className="info-label">Issued Year</h4>
                                                <p className="info-text">{certificate.year || "Present (Ongoing)"}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cert-modal-actions">
                                        <button className="cert-btn primary" onClick={() => window.open(certificate.src || certificate.img, '_blank')}>
                                            <span>Full Resolution</span>
                                            <ExternalLink size={16} />
                                        </button>
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

export default CertificateModal
