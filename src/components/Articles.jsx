import { useState } from 'react'
import Logo from './Logo'
import { Reveal, SlideIn } from './Animations'
import { ElegantShape } from './ui/shape-landing-hero'
import CertificateModal from './CertificateModal'
import './Articles.css'

// Import certificates from standardized paths
import cert10 from '../education/10th-certificate.pdf'
import cert12 from '../education/12th-certificate.pdf'
import cert10Img from '../education/10th-certificate.png'
import cert12Img from '../education/12th-certificate.png'
import btechImg from '../education/b-tech.png'

const Articles = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null)

    const education = [
        {
            id: 1,
            title: "Bachelor of Technology",
            institution: "Lovely Professional University",
            year: "2023 — Present",
            description: "Computer Science and Engineering\nFocusing on advanced systems and AI architecture.",
            icon: "🎓",
            coverImage: btechImg
        },
        {
            id: 2,
            title: "Intermediate Education",
            institution: "Narayana Junior College",
            year: "2021 — 2023",
            description: "Concentration in MPC\nAchieved 81.4% with a focus on core sciences.",
            icon: "📚",
            certificate: cert12,
            coverImage: cert12Img
        },
        {
            id: 3,
            title: "Matriculation",
            institution: "Narayana E.M School",
            year: "2020 — 2021",
            description: "Foundational secondary education\nState-level excellence with 95.5%.",
            icon: "🏫",
            certificate: cert10,
            coverImage: cert10Img
        }
    ]

    const handleViewCertificate = (item) => {
        setSelectedCertificate({
            ...item,
            name: item.title,
            src: item.coverImage, 
            img: item.coverImage,
            link: item.certificate, 
            designation: item.institution,
            quote: item.description.split('\n')[1] || item.description
        })
    }

    return (
        <section className="articles-section relative overflow-hidden" id="education">
             {/* Dynamic Background */}
             <div className="absolute inset-0 bg-[#030303] z-0" style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl opacity-50" />
                
                <div className="absolute inset-0 overflow-hidden">
                    <ElegantShape
                        delay={0.3}
                        width={600}
                        height={140}
                        rotate={12}
                        gradient="from-indigo-500/[0.12]"
                        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    />
                    <ElegantShape
                        delay={0.5}
                        width={500}
                        height={120}
                        rotate={-15}
                        gradient="from-rose-500/[0.12]"
                        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    />
                    <ElegantShape
                        delay={0.4}
                        width={300}
                        height={80}
                        rotate={-8}
                        gradient="from-violet-500/[0.12]"
                        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    />
                </div>
            </div>

            <div className="articles-content relative z-10 container mx-auto px-3 sm:px-6 py-12 sm:py-32">
                <div className="articles-header mb-8 sm:mb-24 flex flex-col items-center text-center px-4">
                    <Reveal>
                        <p className="eyebrow text-[9px] sm:text-xs">ACADEMIC PATHWAY</p>
                        <h2 className="section-title text-3xl sm:text-7xl">
                            Education<Logo className="w-5 h-5 sm:w-8 sm:h-8 mb-2 sm:mb-4 ml-2 inline-block font-bold" color="#8b0000" />
                        </h2>
                    </Reveal>
                </div>

                <div className="articles-grid grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-8">
                    {education.map((item, index) => (
                        <SlideIn key={item.id} delay={index * 0.1} className="h-full">
                            <div className="article-card-wrapper h-full">
                                <div className="article-card-inner bg-white/[0.02] border border-white/[0.08] rounded-xl sm:rounded-[2rem] p-0 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col justify-between overflow-hidden group">
                                    <div className="flex flex-col h-full">
                                        <div 
                                            className="h-24 sm:h-56 w-full relative overflow-hidden cursor-pointer"
                                            onClick={() => handleViewCertificate(item)}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                                            <img 
                                                src={item.coverImage} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                                            />
                                            <div className="absolute top-2 left-2 sm:top-6 sm:left-6 z-20">
                                                <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-xs sm:text-xl">
                                                    <span className="article-icon">{item.icon}</span>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                                                <div className="bg-white/10 backdrop-blur-xl px-2.5 py-1 sm:px-5 sm:py-2.5 rounded-full border border-white/20 text-[8px] sm:text-xs font-bold uppercase tracking-widest translate-y-2 sm:translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                                                    View
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="p-3 sm:p-8 flex flex-col flex-grow">
                                            <div className="flex justify-between items-center mb-2 sm:mb-6">
                                                <span className="text-white/40 text-[7px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">{item.year}</span>
                                                {item.certificate && <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#8b0000] shadow-[0_0_8px_#ff3333]"></span>}
                                            </div>
                                            <h3 className="text-[11px] sm:text-2xl font-bold text-white mb-1 leading-tight group-hover:text-[#ff5252] transition-colors duration-300 line-clamp-2">{item.title}</h3>
                                            <p className="text-white/60 text-[7px] sm:text-xs font-medium uppercase tracking-wide mb-2 sm:mb-6 line-clamp-1">{item.institution}</p>
                                            <p className="text-white/40 text-[10px] sm:text-sm leading-relaxed whitespace-pre-line border-t border-white/[0.05] pt-3 sm:pt-6 mt-auto italic hidden sm:block">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideIn>
                    ))}
                </div>
            </div>

            <CertificateModal 
                certificate={selectedCertificate}
                isOpen={!!selectedCertificate}
                onClose={() => setSelectedCertificate(null)}
            />
        </section>
    )
}

export default Articles
