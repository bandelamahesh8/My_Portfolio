import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const WorkBackground = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} style={{ contain: 'strict' }}>
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center">
        {/* SVG Container for complex rings */}
        <svg className="absolute w-[1000px] h-[1000px]" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="ring-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="100%" stopColor="white" stopOpacity="0.05" />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1.5 0" result="intenseGlow"/>
              <feComposite in="SourceGraphic" in2="intenseGlow" operator="over" />
            </filter>
          </defs>

          {/* Large Outer Ring */}
          <motion.circle
            cx="500"
            cy="500"
            r="300"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.1"
            fill="url(#ring-gradient)"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />

          {/* Medium Dashed Ring */}
          <motion.circle
            cx="500"
            cy="500"
            r="225"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.15"
            strokeDasharray="4 12"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center", filter: "url(#glow)" }}
          />
        </svg>

        {/* Inner Glowing Ring (HTML for smooth blur/box-shadow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
            rotate: 360
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute w-[300px] h-[300px] border-[2px] border-transparent rounded-full"
          style={{
            background: "linear-gradient(white, white) padding-box, linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.6), rgba(255,255,255,0.2)) border-box",
            willChange: 'transform',
          }}
        />

        {/* Accent Glow Center */}
        <div className="absolute w-[300px] h-[300px] bg-white/[0.08] blur-[100px] rounded-full" />
      </div>

      {/* Dynamic Particles/Dots on Rings */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center">
         {[...Array(3)].map((_, i) => (
           <motion.div
             key={i}
             animate={{ rotate: 360 }}
             transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
             className="absolute"
             style={{ width: 350 + i * 100, height: 350 + i * 100 }}
           >
             <div 
               className="absolute top-0 left-1/2 -translate-x-1/2 w-1.2 h-1.2 bg-white/40 rounded-full"
               style={{ filter: "drop-shadow(0 0 8px white)" }}
             />
           </motion.div>
         ))}
      </div>
    </div>
  );
};
