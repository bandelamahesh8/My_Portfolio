import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'
import DownloadButton from './ui/button-download'
import './Header.css'

import cvFile from "../assets/MaheshBandela_Cv.pdf"

const Header = () => {
    const [activeSection, setActiveSection] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('idle')
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const sections = ['about', 'projects', 'certificates', 'education', 'contact']
        let sectionOffsets = {}

        const updateOffsets = () => {
            sections.forEach(section => {
                const element = document.getElementById(section)
                if (element) {
                    sectionOffsets[section] = {
                        top: element.offsetTop,
                        height: element.offsetHeight
                    }
                }
            })
        }

        // Initial calculation
        updateOffsets()
        
        // Recalculate on resize
        window.addEventListener('resize', updateOffsets)


        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY + 100
                    let currentSection = ''
                    
                    for (const section of sections) {
                        if (sectionOffsets[section]) {
                            const { top, height } = sectionOffsets[section]
                            if (scrollPosition >= top && scrollPosition < top + height) {
                                currentSection = section
                                break
                            }
                        }
                    }
                    
                    setActiveSection(currentSection)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', updateOffsets)
        }
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            })
            setActiveSection(id)
        }
    }

    const handleDownload = () => {
        if (downloadStatus !== 'idle') return

        setDownloadStatus('downloading')
        setProgress(0)

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setDownloadStatus('downloaded')
                    
                    // Trigger actual download
                    const link = document.createElement('a')
                    link.href = cvFile
                    link.download = "MaheshBandela_CV.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)

                    return 100
                }
                return prev + 5
            })
        }, 100)

        setTimeout(() => {
            setDownloadStatus('complete')
            setTimeout(() => {
                setDownloadStatus('idle')
                setProgress(0)
            }, 1000)
        }, 2200) // Adjusted timing to match simulation
    }

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
            }}
        >
            <div className="nav-left">
                <Link to="/" className="logo-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <motion.span 
                        className="logo"
                        layoutId="site-logo"
                        style={{ color: activeSection === '' ? '#ff5252' : '#ffffff' }}
                    >
                        Bandela Mahesh<Logo className="w-4 h-4 ml-1.5 inline-block align-baseline" color={activeSection === '' ? '#ff5252' : '#ff5252'} />
                    </motion.span>
                </Link>
            </div>

            <div className="nav-center">
                {['ABOUT', 'PROJECTS', 'CERTIFICATES', 'EDUCATION', 'CONTACT'].map(item => (
                    <button 
                        key={item} 
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="cta-wrapper">
                <DownloadButton 
                    downloadStatus={downloadStatus}
                    progress={progress}
                    onClick={handleDownload}
                    className="cta"
                />
            </div>
        </motion.nav>
    )
}

export default Header
