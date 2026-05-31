import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { portfolioData, projectCategories } from '../utils/constants'
import { staggerContainer, itemVariants, fadeInUp } from '../utils/animations'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="card-container group overflow-hidden cursor-pointer relative h-full"
    >
      {/* Project Header with Image/Icon */}
      <div className="h-40 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center text-6xl relative overflow-hidden group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all">
        {project.image}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        {/* Category Badge */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold gradient-text">{project.title}</h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 rounded text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={project.githubLink}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/40 transition-colors font-medium text-sm"
          >
            <FiGithub size={16} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioData.projects
    }
    return portfolioData.projects.filter(
      (project) => project.category === selectedCategory
    )
  }, [selectedCategory])

  return (
    <section
      id="projects"
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Innovative projects showcasing AI, ML, and full-stack development expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          className="flex gap-3 flex-wrap justify-center"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-600 dark:text-slate-400">
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Projects
