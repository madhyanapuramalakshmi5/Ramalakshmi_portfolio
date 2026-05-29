import { useEffect, useState } from 'react'

const useScrollReveal = () => {
  const [revealedElements, setRevealedElements] = useState(new Set())

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRevealedElements((prev) => new Set([...prev, entry.target]))
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('[data-scroll-reveal]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return revealedElements
}

export default useScrollReveal
