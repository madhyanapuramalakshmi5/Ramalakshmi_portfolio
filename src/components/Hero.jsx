import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'
import TypingAnimation from './TypingAnimation'
import { downloadResume } from '../utils/email'
import { portfolioData } from '../utils/constants'
import { fadeInUp, staggerContainer } from '../utils/animations'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-20 h-20 rounded-full bg-primary-500/10 dark:bg-primary-400/5 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-primary-500/10 dark:bg-primary-400/5 blur-2xl"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-container max-w-6xl"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Greeting */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  {portfolioData.name.split(' ')[0]}
                </span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={fadeInUp} className="py-4">
              <TypingAnimation texts={portfolioData.typingTexts} />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg"
            >
              {portfolioData.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 pt-4 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="btn-primary flex items-center gap-2"
              >
                <FiDownload />
                Download Resume
              </motion.button>
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2"
                >
                  View Projects
                  <FiArrowRight />
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex gap-4 pt-8">
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href={portfolioData.socialLinks.github}
                className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:text-white hover:bg-primary-600 transition-all"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href={portfolioData.socialLinks.linkedin}
                className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:text-white hover:bg-primary-600 transition-all"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href={portfolioData.socialLinks.twitter}
                className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:text-white hover:bg-primary-600 transition-all"
              >
                <FaTwitter size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Card */}
          <motion.div variants={fadeInUp} className="relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Profile Card */}
              <div className="card-container border-primary-200/40 dark:border-primary-600/30 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-30" />

                <div className="relative z-10 space-y-6">
                  {/* Avatar Placeholder */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(34, 197, 94, 0.3)',
                          '0 0 40px rgba(34, 197, 94, 0.5)',
                          '0 0 20px rgba(34, 197, 94, 0.3)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-6xl font-bold text-white"
                    >
                      RM
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold gradient-text">
                      {portfolioData.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                      📍 {portfolioData.location}
                    </p>
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {portfolioData.about.education.degree}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      CGPA: {portfolioData.about.education.cgpa}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary-200/20 dark:border-primary-700/20">
                    <div className="text-center">
                      <p className="text-2xl font-bold gradient-text">3+</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Projects
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold gradient-text">5+</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Skills
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold gradient-text">1+</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Internship
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute -top-5 -right-5 w-24 h-24 rounded-full border-2 border-primary-500/30 flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="text-sm font-bold gradient-text">AI</p>
                  <p className="text-xs text-slate-500">Engineer</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-center text-primary-600 dark:text-primary-400">
            <p className="text-sm font-medium mb-2">Scroll to explore</p>
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
