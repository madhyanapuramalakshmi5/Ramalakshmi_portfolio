export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export const slideIn = (direction = 'left') => {
  const initialX = direction === 'left' ? -30 : 30
  return {
    hidden: { opacity: 0, x: initialX },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
}

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
}

export const hoverBounce = {
  y: -5,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
}

export const rotateVariant = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6 },
  },
}

export const pulseVariant = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

export const floatingVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const menuItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
}
