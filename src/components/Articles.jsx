import { useState } from 'react'
import Logo from './Logo'
import { Reveal, SlideIn } from './Animations'
import { ElegantShape } from './ui/shape-landing-hero'
import CertificateModal from './CertificateModal'
import './Articles.css'

// Import certificates
import cert10 from '../EDUCATION/10th certificate.pdf'
import cert12 from '../EDUCATION/12th certificate.pdf'
import cert10Img from '../EDUCATION/10TH_certificate.png'
import cert12Img from '../EDUCATION/12th_certificate.png'
import btechImg from '../EDUCATION/B.tech.png'

const Articles = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null)

    const education = [
        {
            id: 1,
            title: "Bachelor of Technology",
            institution: "Lovely Professional University, Phagwara",
            year: "Aug 2023 - Present",
            description: "Computer Science and Engineering\nCGPA: 7.24",
            icon: "🎓",
            coverImage: btechImg
        },
        {
            id: 2,
            title: "Intermediate",
            institution: "Narayana Jr College, Bhimavaram",
            year: "Apr 2021 - Mar 2023",
            description: "Percentage: 81.4%",
            icon: "📚",
            certificate: cert12,
            coverImage: cert12Img
        },
        {
            id: 3,
            title: "Matriculation",
            institution: "Narayana E.M School, Bhimavaram",
            year: "Apr 2020 - Mar 2021",
            description: "Percentage: 95.5%",
            icon: "🏫",
            certificate: cert10,
            coverImage: cert10Img
        }
    ]

    const handleViewCertificate = (item) => {
        setSelectedCertificate({
            ...item,
            src: item.coverImage, // Use cover image for modal display
            link: item.certificate, // Pass PDF link for download/full view
            designation: item.institution // Map institution to designation for modal
        })
    }

    return (
        <section className="articles-section relative overflow-hidden" id="education">
             {/* Background Elements */}
             <div className="absolute inset-0 bg-[#030303] z-0" style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
                }}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
                
                <div className="absolute inset-0 overflow-hidden">
                    <ElegantShape
                        delay={0.3}
                        width={600}
                        height={140}
                        rotate={12}
                        gradient="from-indigo-500/[0.15]"
                        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    />
                    <ElegantShape
                        delay={0.5}
                        width={500}
                        height={120}
                        rotate={-15}
                        gradient="from-rose-500/[0.15]"
                        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    />
                    <ElegantShape
                        delay={0.4}
                        width={300}
                        height={80}
                        rotate={-8}
                        gradient="from-violet-500/[0.15]"
                        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    />
                    <ElegantShape
                        delay={0.6}
                        width={200}
                        height={60}
                        rotate={20}
                        gradient="from-amber-500/[0.15]"
                        className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                    />
                </div>
            </div>

            <div className="articles-content relative z-10 container mx-auto px-4 py-20">
                <div className="articles-header mb-16 flex flex-col items-center text-center">
                    <Reveal>
                        {/* <p className="eyebrow">ACADEMIC BACKGROUND</p> */}
                        <h2 className="section-title">
                            Education<Logo className="w-8 h-8 mb-4 ml-2 inline-block" color="#ff3333" />
                        </h2>
                    </Reveal>
                </div>

                <div className="articles-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                    {education.map((item, index) => (
                        <SlideIn key={item.id} delay={index * 0.1} className="h-full">
                            <div className="article-card bg-white/5 border border-white/10 rounded-2xl p-0 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col justify-between overflow-hidden group">
                                <div>
                                    {item.coverImage ? (
                                        <div 
                                            className="h-48 w-full relative overflow-hidden cursor-pointer"
                                            onClick={() => handleViewCertificate(item)}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-transparent z-10 opacity-60" />
                                            <img 
                                                src={item.coverImage} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                                            />
                                            <div className="absolute top-4 left-4 z-20">
                                                <div className="w-10 h-10 rounded-full bg-[#ff3333]/90 flex items-center justify-center text-white text-lg backdrop-blur-sm">
                                                    <span className="article-icon">{item.icon}</span>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium">
                                                    View Certificate
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-48 w-full bg-white/5 relative flex items-center justify-center">
                                             <div className="w-16 h-16 rounded-full bg-[#ff3333]/20 flex items-center justify-center text-[#ff3333] text-3xl">
                                                <span className="article-icon">{item.icon}</span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-4 min-h-[3rem]">
                                            <span className="text-[#ff3333] font-medium text-sm tracking-wide max-w-[70%]">{item.institution}</span>
                                            <span className="text-white/40 text-xs font-mono bg-white/5 px-2 py-1 rounded whitespace-nowrap">{item.year}</span>
                                        </div>
                                        <h3 className="article-card-title text-xl font-bold text-white mb-2 min-h-[3.5rem]">{item.title}</h3>
                                        <p className="article-card-excerpt text-gray-400 text-sm leading-relaxed whitespace-pre-line">{item.description}</p>
                                    </div>
                                </div>
                                
                                {/* {item.certificate && (
                                    // <div className="px-8 pb-8 pt-0">
                                    //     <button 
                                    //         onClick={() => handleViewCertificate(item)}
                                    //         className="inline-flex items-center text-sm font-semibold text-white hover:text-[#ff3333] transition-colors group/link cursor-pointer"
                                    //     >
                                    //         View Certificate
                                    //         <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    //         </svg>
                                    //     </button>
                                    // </div>
                                )} */}
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
