import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypingAnimation = ({ texts, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout

    if (!isDeleting && charIndex < texts[textIndex].length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2)
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      setIsDeleting(false)
      setTextIndex((textIndex + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed])

  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-2xl md:text-4xl font-bold gradient-text min-h-[2.5rem] md:min-h-[3rem]">
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="text-2xl md:text-4xl font-bold text-primary-500 dark:text-primary-400"
      >
        |
      </motion.span>
    </div>
  )
}

export default TypingAnimation
