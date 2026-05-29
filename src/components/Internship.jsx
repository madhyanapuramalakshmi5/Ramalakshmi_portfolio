import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { portfolioData } from '../utils/constants'
import { staggerContainer, itemVariants, fadeInUp } from '../utils/animations'

const Internship = () => {
  return (
    <section
      id="internship"
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
            <span className="gradient-text">Internship</span> Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hands-on experience in telecommunications and VLSI technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {portfolioData.internship.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== portfolioData.internship.experience.length - 1 && (
                <div className="absolute left-6 top-20 w-1 h-20 bg-gradient-to-b from-primary-500 to-transparent" />
              )}

              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-green flex items-center justify-center text-white z-10"
              >
                <FiBriefcase size={24} />
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 10 }}
                className="card-container ml-20"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <FiMapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCalendar size={16} />
                      {exp.duration}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="text-primary-600 dark:text-primary-400 font-bold">
                          ✓
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Skills Gained:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Internship
