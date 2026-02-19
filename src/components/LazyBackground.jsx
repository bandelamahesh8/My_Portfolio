import { useState, useEffect, useRef } from 'react'

/**
 * LazyBackground - Only renders heavy background effects when the section is visible.
 * This prevents 6+ animated backgrounds from running simultaneously on page load.
 * Uses IntersectionObserver with a generous rootMargin so effects load slightly before
 * the user scrolls to them, avoiding pop-in.
 */
const LazyBackground = ({ children, rootMargin = '200px 0px', className = '' }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Once visible, stop observing — the background stays rendered
                    observer.disconnect()
                }
            },
            {
                rootMargin, // Start rendering 200px before it comes into view
                threshold: 0
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [rootMargin])

    return (
        <div ref={ref} className={className}>
            {isVisible ? children : null}
        </div>
    )
}

export default LazyBackground
