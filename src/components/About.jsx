import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../utils/constants'
import { fadeInUp, staggerContainer, itemVariants } from '../utils/animations'

const About = () => {
  return (
    <section
      id="about"
      className="section-container py-20 scroll-mt-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about building intelligent solutions and learning modern technologies
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="card-container">
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {portfolioData.about.description}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm driven to create innovative AI-powered solutions that solve real-world problems. My background in Electronics and Communication Engineering combined with my passion for software development enables me to bridge hardware and software worlds.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                className="card-container text-center"
              >
                <p className="text-3xl font-bold gradient-text mb-2">8.5</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  CGPA
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="card-container text-center"
              >
                <p className="text-3xl font-bold gradient-text mb-2">10+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Technologies
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Education & Timeline */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Education Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="card-container"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                📚 Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {portfolioData.about.education.degree}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {portfolioData.about.education.institute}
                  </p>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mt-2">
                    CGPA: {portfolioData.about.education.cgpa}/10
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Career Vision */}
            <motion.div
              whileHover={{ y: -5 }}
              className="card-container"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                🎯 Career Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                To become a leading AI/ML engineer who develops innovative solutions that make a positive impact on society. I'm committed to continuous learning and excellence in software development.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              whileHover={{ y: -5 }}
              className="card-container"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                ⚡ Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Machine Learning',
                  'AI',
                  'Web Development',
                  'Data Science',
                  'IoT',
                  'Python',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
