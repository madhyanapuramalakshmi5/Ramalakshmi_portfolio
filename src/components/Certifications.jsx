import React from 'react'
import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { portfolioData } from '../utils/constants'
import { staggerContainer, itemVariants, fadeInUp } from '../utils/animations'

const Certifications = () => {
  return (
    <section
      id="certifications"
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
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional credentials validating my technical expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card-container relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                  <FiAward className="text-primary-600 dark:text-primary-400" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Issued by
                  </p>
                  <p className="font-semibold text-primary-600 dark:text-primary-400">
                    {cert.issuer}
                  </p>
                </div>

                {/* Date */}
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  {cert.date}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* View Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/20 hover:bg-primary-200 dark:hover:bg-primary-900/40 transition-colors w-full"
                >
                  View Credential
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications
