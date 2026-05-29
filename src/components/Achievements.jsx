import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../utils/constants'
import { staggerContainer, itemVariants, fadeInUp } from '../utils/animations'

const Achievements = () => {
  return (
    <section
      id="achievements"
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
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Recognition and milestones in my professional journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-container group relative overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  linear: true,
                }}
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary-500/10 blur-3xl group-hover:blur-2xl transition-all"
              />

              <div className="relative z-10 text-center py-8 space-y-4">
                {/* Icon */}
                <p className="text-6xl">{achievement.icon}</p>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Badge */}
                <div className="pt-4">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                  >
                    Achievement Unlocked
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 grid md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: 'Projects', value: '3+' },
            { label: 'Skills', value: '15+' },
            { label: 'Certifications', value: '3' },
            { label: 'Achievements', value: '6' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card-container"
            >
              <p className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Achievements
