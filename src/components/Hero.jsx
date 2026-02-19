// hero.jsx (Updated - REMOVE rays, ADD static grid)

import { motion } from 'framer-motion'
import { SlideIn, ScaleIn, BlurIn } from './Animations'
import Logo from './Logo'
import { Github, Linkedin, Mail } from 'lucide-react'
import maheshImg from '../assets/profile1.png' // Updated to profile1.png
import './hero.css'  // Make sure this is the only hero CSS

const Hero = () => {
  return (
    <div className="hero">
      {/* STATIC GRID - Middle layer */}
      <div className="hero-grid"></div>
      
      {/* ALIVE STARS - Middle layer */}
      <div className="hero-grid-rays falling"></div>
      <div className="hero-grid-rays rising"></div>
      
      {/* CONTENT */}
      <div className="hero-content">
        <SlideIn direction="left" delay={0.2}>
          <p className="eyebrow">Product Designer & Developer</p>
        </SlideIn>
        
        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <motion.span 
              className="title-row top-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bandela-text">Bandela</span>
              <span className="logo-wrapper">
                <BlurIn delay={0.6}>
                  <span className="logo-sup">
                    <Logo className="w-8 h-8" color="#8b0000" />
                  </span>
                </BlurIn>
              </span>
            </motion.span>
            <motion.span 
              className="title-row mahesh-big"
              layoutId="mahesh-title"
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Mahesh
            </motion.span>
          </h1>
        </div>


        
        <SlideIn direction="left" delay={0.6}>
        <p className="desc">
          Hi! I’m Mahesh — a Product Designer & Developer crafting cinematic, performance-driven web experiences. I build full-stack, AI-powered, real-time systems with a sharp focus on motion, 3D depth, clean architecture, and production-grade performance.
        </p>

        </SlideIn>

        <SlideIn direction="up" delay={0.8} viewportMargin="0px">
          <div className="hero-actions">
            <a href="https://github.com/bandelamahesh8" target="_blank" rel="noopener noreferrer" className="btn primary">
              <Github size={18} className="mr-2" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/bandelamahesh88" target="_blank" rel="noopener noreferrer" className="btn primary">
              <Linkedin size={18} className="mr-2" /> LinkedIn
            </a>
            <a href="mailto:maheshbandela88@gmail.com" className="btn ghost">
              <Mail size={18} className="mr-2" /> Mail
            </a>
          </div>
        </SlideIn>
      </div>

      {/* HERO IMAGE */}
      <div className="hero-right">
        <ScaleIn delay={0.6}>
          <div className="hero-image-wrapper">
             <img src={maheshImg} alt="Mahesh" className="hero-photo" />
             <div className="image-glow"></div>
          </div>
        </ScaleIn>
      </div>
      
      {/* Vignette */}
      <div className="hero-vignette-overlay"></div>
    </div>
  )
}

export default Hero