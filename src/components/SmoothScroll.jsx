
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      // Use native scroll for page navigation transitions
      lerp: 0.1,
    })

    let rafId
    let last = 0

    function raf(time) {
      // Only tick if enough time has passed (target ~60fps cap)
      if (time - last >= 16) {
        lenis.raf(time)
        last = time
      }
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}
