import * as React from "react";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";


import { cn } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

/**
 * Props for the FreelancerProfileCard component.
 */
interface FreelancerProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The user's full name. */
  name: string;
  /** The user's job title or role. */
  title: string;
  /** URL for the user's avatar image. */
  avatarSrc: string;
  /** URL for the card's banner image. */
  bannerSrc: string;
  /** Custom text for slot 1 (e.g. "Design Systems") */
  stat1: string;
  /** Custom text for slot 2 (e.g. "Motion Architecture") */
  stat2: string;
  /** Custom text for slot 3 (e.g. "Full-Stack Execution") */
  stat3: string;
  /** A React node (e.g., array of icons) for the tools section. */
  tools: React.ReactNode;
  /** Optional click handler for the "Get in touch" button. */
  onGetInTouch?: () => void;
  /** Optional click handler for the bookmark icon. (Unused) */
  onBookmark?: () => void;
  /** Optional additional class names. */
  className?: string;
}

// Animation variants for Framer Motion
const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 40px 100px -20px rgba(139, 92, 246, 0.2)",
    transition: { duration: 0.4, ease: "circOut" },
  },
};



/**
 * A reusable, animated profile card component.
 */
export const FreelancerProfileCard = React.forwardRef<
  HTMLDivElement,
  FreelancerProfileCardProps
>(
  (
    {
      className,
      name,
      title,
      avatarSrc,
      bannerSrc,
      stat1,
      stat2,
      stat3,
      tools,
      onGetInTouch,
      onBookmark,
      ...props
    },
    ref
  ) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const mailtoUrl = `mailto:maheshnaidu7648@gmail.com?subject=Portfolio Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoUrl;
    };
    // Standardize props for motion.div by removing incompatible event handlers
    const { onDrag, onDragStart, onDragEnd, onDragOver, ...motionProps } = props as any;

    const avatarName = name
      .split(" ")
      .map((n) => n[0])
      .join("");

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative w-full max-w-[2400px] overflow-hidden rounded-[40px] sm:rounded-[56px] bg-card shadow-[0_48px_80px_-24px_rgba(0,0,0,0.8)]",
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        {...motionProps}
      >
        <div className="flex flex-col h-full">
          {/* Top Side: Banner - Tight Height for Rectangle Look */}
          <div className="relative w-full h-24 sm:h-48 overflow-hidden">
            <img
              src={bannerSrc}
              alt={`${name}'s banner`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Avatar Area */}
          <div className="absolute left-6 sm:left-16 top-24 sm:top-48 -translate-y-1/2 z-20">
            <Avatar className="h-20 w-20 sm:h-40 sm:w-40 border-[4px] sm:border-[10px] border-[#0a0a0a] shadow-4xl">
              <AvatarImage src={avatarSrc} alt={name} />
              <AvatarFallback>{avatarName}</AvatarFallback>
            </Avatar>
          </div>

          {/* Bottom Side: Content Area - Hyper Landscape */}
          <div className="relative flex-1 px-5 pb-6 pt-12 sm:px-14 sm:pb-12 sm:pt-20 min-h-[350px] sm:min-h-[400px] overflow-hidden bg-[#050505]">
            <AnimatePresence initial={false} mode="wait">
              {!isFormOpen ? (
                <motion.div
                  key="profile-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 px-5 pb-6 pt-12 sm:px-14 sm:pb-12 sm:pt-20 flex flex-col justify-between"
                >
                  {/* Profile Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg sm:text-4xl font-black text-white tracking-tighter leading-tight mb-1 uppercase whitespace-nowrap">
                        {name}
                      </h2>
                      <p className="text-xs sm:text-lg text-white/50 font-medium tracking-tight">
                        {title}
                      </p>
                    </div>
                    <div className="hidden sm:block">{tools}</div>
                  </div>

                  {/* Stats Grid - 3 Column Layout for Wide Rectangle Look */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                    <div className="text-xs sm:text-base font-bold tracking-tight bg-white/5 py-3 px-4 rounded-xl border border-white/10 text-white text-center flex items-center justify-center sm:whitespace-nowrap">{stat1}</div>
                    <div className="text-xs sm:text-base font-bold tracking-tight bg-white/5 py-3 px-4 rounded-xl border border-white/10 text-white text-center flex items-center justify-center sm:whitespace-nowrap">{stat2}</div>
                    <div className="text-xs sm:text-base font-bold tracking-tight bg-white/5 py-3 px-4 rounded-xl border border-white/10 text-white text-center flex items-center justify-center sm:whitespace-nowrap">{stat3}</div>
                  </div>

                  {/* Initial CTA */}
                  <Button 
                    onClick={() => setIsFormOpen(true)}
                    className="w-full h-12 sm:h-20 text-lg sm:text-2xl font-black rounded-[16px] sm:rounded-[28px] bg-white text-black shadow-2xl transition-all duration-300 hover:scale-[1.01]"
                  >
                    Send Message
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="message-form"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 px-5 pb-6 pt-12 sm:px-14 sm:pb-12 sm:pt-20 flex flex-col justify-between"
                >
                  <form onSubmit={handleFormSubmit} className="flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center mb-1">
                        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tighter leading-tight uppercase whitespace-nowrap">
                          {name}
                        </h2>
                        <button 
                          type="button"
                          onClick={() => setIsFormOpen(false)}
                          className="text-white/40 hover:text-white text-xs font-medium transition-colors"
                        >
                          Back to Profile
                        </button>
                      </div>
                      
                      {/* Interactive Input Fields */}
                      <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                        <input 
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="flex-1 h-10 sm:h-11 rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/[0.03] px-5 text-white text-xs sm:text-sm font-medium placeholder:text-white/30 focus:outline-none focus:bg-white/[0.06] transition-all"
                          required
                        />
                        <input 
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="flex-1 h-10 sm:h-11 rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/[0.03] px-5 text-white text-xs sm:text-sm font-medium placeholder:text-white/30 focus:outline-none focus:bg-white/[0.06] transition-all"
                          required
                        />
                      </div>
                      <textarea 
                        placeholder="Message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="h-14 sm:h-20 rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/[0.03] py-3 px-5 text-white text-xs sm:text-sm font-medium placeholder:text-white/30 focus:outline-none focus:bg-white/[0.06] transition-all resize-none"
                        required
                      />
                    </div>

                    {/* Final CTA */}
                    <Button 
                      type="submit"
                      className="w-full h-11 sm:h-14 text-base sm:text-lg font-black rounded-[12px] sm:rounded-[18px] bg-white text-black shadow-xl tracking-tight uppercase hover:scale-[1.01] transition-transform"
                    >
                      SEND MESSAGE
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  }
);
FreelancerProfileCard.displayName = "FreelancerProfileCard";


