import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import "./Loader.css";

const NAME = "MAHESH";
const letters = NAME.split("");

/*  ════════════════════════════════════════════════════════════
    TIMELINE
    ────────────────────────────────────────────────────────────
    0       pure black void  +  ambient particles start
    300     scanline grid materialises (slow fade)
    550     corner brackets slide in (staggered)
    800     "WELCOME TO" drifts down with blur → sharp
    1100    MAHESH letters slam in (3D X-axis rotation)
    1700    brief glitch flicker
    2200    letters ignite red sequentially M→A→H→E→S→H  + bloom
    2950    dash + PORTFOLIO subtitle float in
    3500    red sweep line fires across
    3700    context elements exit
    4200    onFinish — MAHESH morphs to hero title
    ════════════════════════════════════════════════════════════ */

const STEPS = {
  VOID:         0,
  GRID:         1,
  CORNERS:      2,
  WELCOME:      3,
  LETTERS_IN:   4,
  GLITCH:       5,
  IGNITE:       6,
  SUBTITLE:     7,
  SWEEP:        8,
  CONTEXT_EXIT: 9,
  MORPH:        10,
};

const TOTAL_MS = 4200;

export default function Loader({ onFinish }) {
  const [step, setStep] = useState(STEPS.VOID);
  const [counter, setCounter] = useState(0);

  const finish = useCallback(() => onFinish(), [onFinish]);

  /* ─── progress as motion value for butter-smooth bar ─── */
  const progressMV = useMotionValue(0);
  const progressWidth = useTransform(progressMV, [0, 1], ["0%", "100%"]);

  /* ─── timeline driver ─── */
  useEffect(() => {
    const schedule = [
      { ms: 300,  s: STEPS.GRID },
      { ms: 550,  s: STEPS.CORNERS },
      { ms: 800,  s: STEPS.WELCOME },
      { ms: 1100, s: STEPS.LETTERS_IN },
      { ms: 1700, s: STEPS.GLITCH },
      { ms: 2200, s: STEPS.IGNITE },
      { ms: 2950, s: STEPS.SUBTITLE },
      { ms: 3500, s: STEPS.SWEEP },
      { ms: 3700, s: STEPS.CONTEXT_EXIT },
      { ms: 4200, s: STEPS.MORPH },
    ];

    const ids = schedule.map(({ ms, s }) =>
      setTimeout(() => setStep(s), ms)
    );

    /* smooth progress */
    const start = performance.now();
    let raf;
    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(elapsed / TOTAL_MS, 1);
      progressMV.set(pct);
      setCounter(Math.floor(pct * 100));
      if (pct < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      ids.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
  }, [progressMV]);

  useEffect(() => {
    if (step === STEPS.MORPH) finish();
  }, [step, finish]);

  /* ─── derived states ─── */
  const isContextVisible = step >= STEPS.GRID && step < STEPS.CONTEXT_EXIT;
  const lettersIn = step >= STEPS.LETTERS_IN;
  const isGlitching = step === STEPS.GLITCH;
  const isIgnited = step >= STEPS.IGNITE;

  /* ─── Framer variants ─── */
  const containerVariants = useMemo(() => ({
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0 } },
    ignite:  { transition: { staggerChildren: 0.07, delayChildren: 0 } },
  }), []);

  const letterVariants = useMemo(() => ({
    hidden: {
      rotateX: 100,
      opacity: 0,
      filter: "blur(12px)",
      y: 60,
      scale: 0.8,
      color: "#ffffff",
      textShadow: "0 0 0 transparent",
    },
    visible: {
      rotateX: 0,
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      color: "#ffffff",
      textShadow: "0 0 0 transparent",
      transition: {
        rotateX: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        opacity:  { duration: 0.5 },
        filter:   { duration: 0.7 },
        y:        { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        scale:    { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
      },
    },
    ignite: {
      rotateX: 0,
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      color: "#ff1a1a",
      textShadow:
        "0 0 20px rgba(255,26,26,0.7), 0 0 50px rgba(139,0,0,0.4), 0 0 80px rgba(139,0,0,0.15)",
      transition: {
        color:      { duration: 0.3, ease: "easeOut" },
        textShadow: { duration: 0.5, ease: "easeOut" },
      },
    },
  }), []);

  /* ─── bracket config ─── */
  const brackets = useMemo(() => [
    { cls: "corner-tl", ix: { x: -50, y: -50 }, delay: 0 },
    { cls: "corner-tr", ix: { x:  50, y: -50 }, delay: 0.06 },
    { cls: "corner-bl", ix: { x: -50, y:  50 }, delay: 0.12 },
    { cls: "corner-br", ix: { x:  50, y:  50 }, delay: 0.18 },
  ], []);

  /* ─── particle count (CSS-driven, just need divs) ─── */
  const particles = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

  return (
    <motion.div
      className="loader-wrapper"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* ── ambient bg pulse ── */}
      <div className="loader-bg-pulse" />

      {/* ── noise grain ── */}
      <div className="loader-noise" />

      {/* ── vignette ── */}
      <div className="loader-vignette" />

      {/* ── scanline grid ── */}
      <motion.div
        className="scanline-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: isContextVisible ? 0.7 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* ── moving scanline beam ── */}
      {isContextVisible && <div className="scanline-beam" />}

      {/* ── floating particles ── */}
      <motion.div
        className="particles-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= STEPS.GRID ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {particles.map((i) => (
          <div key={i} className="particle" />
        ))}
      </motion.div>

      {/* ── pulsing rings ── */}
      {isContextVisible && (
        <>
          <div className="pulse-ring" />
          <div className="pulse-ring" />
          <div className="pulse-ring" />
        </>
      )}

      {/* ── sweep line ── */}
      {step >= STEPS.SWEEP && (
        <>
          <motion.div
            className="sweep-line"
            initial={{ x: "-110%" }}
            animate={{ x: "110%" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.div
            className="sweep-afterglow"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.8 }}
          />
        </>
      )}

      {/* ── progress bar ── */}
      <motion.div
        className="loader-progress"
        style={{ width: progressWidth }}
      />

      {/* ── loading counter ── */}
      <motion.div
        className="loader-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: isContextVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {String(counter).padStart(3, "0")}
      </motion.div>

      {/* ═══ STAGE ═══ */}
      <div className="loader-container">

        {/* CORNERS */}
        {brackets.map(({ cls, ix, delay }) => (
          <motion.div
            key={cls}
            className={`corner-bracket ${isIgnited ? "active" : ""} ${cls}`}
            initial={{ x: ix.x, y: ix.y, opacity: 0 }}
            animate={{
              x: isContextVisible ? 0 : ix.x,
              y: isContextVisible ? 0 : ix.y,
              opacity: isContextVisible ? 1 : 0,
            }}
            transition={{
              duration: 0.6,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* WELCOME TO */}
        <motion.div
          className="loader-welcome"
          initial={{ opacity: 0, y: -18, filter: "blur(8px)" }}
          animate={{
            opacity: step >= STEPS.WELCOME && step < STEPS.CONTEXT_EXIT ? 1 : 0,
            y: step >= STEPS.WELCOME ? 0 : -18,
            filter: step >= STEPS.WELCOME ? "blur(0px)" : "blur(8px)",
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          WELCOME TO
        </motion.div>

        {/* ═══ MAHESH LETTERS ═══ */}
        <motion.div
          className={`loader-name-block ${isGlitching ? "chromatic" : ""}`}
          layoutId="mahesh-title"
          data-text={NAME}
          variants={containerVariants}
          initial="hidden"
          animate={isIgnited ? "ignite" : lettersIn ? "visible" : "hidden"}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              className={`loader-letter ${isGlitching ? "glitching" : ""}`}
              variants={letterVariants}
              style={{ transformOrigin: "center bottom" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* GLOW BLOOM */}
        <motion.div
          className="loader-glow"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isIgnited && step < STEPS.CONTEXT_EXIT ? 1 : 0,
            scale: isIgnited ? 1.3 : 0.5,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* SUBTITLE: ── PORTFOLIO */}
        <motion.div
          className="loader-subtitle-wrap"
          initial={{ opacity: 0 }}
          animate={{
            opacity: step >= STEPS.SUBTITLE && step < STEPS.CONTEXT_EXIT ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="loader-dash"
            initial={{ width: 0 }}
            animate={{
              width: step >= STEPS.SUBTITLE && step < STEPS.CONTEXT_EXIT ? 32 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.span
            className="loader-subtitle"
            initial={{ opacity: 0, x: 14, filter: "blur(4px)" }}
            animate={{
              opacity: step >= STEPS.SUBTITLE && step < STEPS.CONTEXT_EXIT ? 1 : 0,
              x: step >= STEPS.SUBTITLE ? 0 : 14,
              filter: step >= STEPS.SUBTITLE ? "blur(0px)" : "blur(4px)",
            }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            PORTFOLIO
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
