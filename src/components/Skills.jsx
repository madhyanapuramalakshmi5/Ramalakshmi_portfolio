import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../utils/constants'
import { staggerContainer, itemVariants, fadeInUp } from '../utils/animations'

const SkillCard = ({ category, skills }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="card-container"
    >
      <h3 className="text-xl font-bold mb-6 gradient-text">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <p className="font-medium text-slate-900 dark:text-white">
                {skill.name}
              </p>
              <span className="text-sm text-primary-600 dark:text-primary-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-green rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section
      id="skills"
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Proficient in multiple programming languages and modern technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            category="💻 Programming"
            skills={portfolioData.skills.programming}
          />
          <SkillCard
            category="🎨 Frontend"
            skills={portfolioData.skills.frontend}
          />
          <SkillCard
            category="🤖 AI & Data"
            skills={portfolioData.skills.aiData}
          />
          <SkillCard
            category="🛠️ Tools"
            skills={portfolioData.skills.tools}
          />
        </div>

        {/* Soft Skills */}
        <motion.div variants={fadeInUp} className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Soft Skills</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              '💬 Communication',
              '👥 Teamwork',
              '🎯 Problem Solving',
              '🧠 Leadership',
              '✨ Creativity',
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card-container text-center py-6"
              >
                <p className="font-semibold text-slate-900 dark:text-white">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Visual */}
        <motion.div variants={fadeInUp} className="mt-12 p-8 card-container">
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python',
              'JavaScript',
              'React',
              'Tailwind',
              'Framer Motion',
              'Pandas',
              'NumPy',
              'Scikit-learn',
              'Git',
              'GitHub',
              'VS Code',
              'SQL',
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-primary-500/10 dark:bg-primary-400/10 text-primary-700 dark:text-primary-300 border border-primary-300/30 dark:border-primary-600/30 hover:bg-primary-500/20 dark:hover:bg-primary-400/20 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
