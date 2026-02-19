import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home' 
import WorkPage from './pages/WorkPage'
import VenturesPage from './pages/VenturesPage'
import ArticlesPage from './pages/ArticlesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CertificatesPage from './pages/CertificatesPage'
import Badges from './components/Badges'
import Loader from './components/Loader'
import SmoothScroll from './components/SmoothScroll'
import './App.css'

const AnimatedRoutes = ({ isLoading }) => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      {!isLoading && (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      )}
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <SmoothScroll />
      <LayoutGroup>
        <div className="app">
          {/* Loader — shares layoutId with Hero for MAHESH morph */}
          <AnimatePresence mode="wait">
            {isLoading && (
              <Loader key="loader" onFinish={() => setIsLoading(false)} />
            )}
          </AnimatePresence>
          
          {/* Main Content appears as loader exits */}
          {!isLoading && <Header />}
          <AnimatedRoutes isLoading={isLoading} />
          {!isLoading && <Badges />}
        </div>
      </LayoutGroup>
    </Router>
  )
}

export default App
