import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './CertificatesListModal.css'

const CertificatesListModal = ({ isOpen, onClose, certificates, onSelect }) => {
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

    if (!isOpen) return null

    return createPortal(
        <div className="cert-list-modal-root">
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            className="cert-list-modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                        />
                        
                        <motion.div 
                            className="cert-list-modal-container"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <header className="cert-list-header">
                                <div>
                                    <div className="eyebrow">GALLERY</div>
                                    <h2 className="title">All Certificates</h2>
                                </div>
                                <button className="close-btn" onClick={onClose}>
                                    <X size={24} />
                                </button>
                            </header>
                            
                            <div className="cert-grid-scroll">
                                <div className="cert-grid">
                                    {certificates.map((cert, index) => (
                                        <motion.div 
                                            key={index} 
                                            className="cert-grid-item"
                                            onClick={() => {
                                                onSelect(cert)
                                                onClose()
                                            }}
                                            whileHover={{ y: -5 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <div className="cert-img-wrapper">
                                                <img src={cert.src || cert.img} alt={cert.name || cert.title} loading="lazy" />
                                                <div className="cert-hover-overlay">
                                                    <span>View Certificate</span>
                                                </div>
                                            </div>
                                            <div className="cert-info">
                                                <h3 className="cert-name">{cert.name || cert.title}</h3>
                                                <p className="cert-role">{cert.designation}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>,
        document.body
    )
}

export default CertificatesListModal
