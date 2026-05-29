import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiUsers, FiTrendingUp } from 'react-icons/fi'
import { portfolioData } from '../utils/constants'
import { staggerContainer, itemVariants, fadeInUp } from '../utils/animations'

const GitHubStats = () => {
  return (
    <section className="section-container py-20 scroll-mt-20">
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
            <span className="gradient-text">GitHub</span> Presence
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Active contributions and open-source engagement
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: 'Total Repositories',
              value: portfolioData.githubStats.totalRepos,
              icon: FiGithub,
              color: 'from-blue-500 to-blue-600',
            },
            {
              label: 'Total Stars',
              value: portfolioData.githubStats.totalStars,
              icon: FiStar,
              color: 'from-yellow-500 to-yellow-600',
            },
            {
              label: 'Followers',
              value: portfolioData.githubStats.followers,
              icon: FiUsers,
              color: 'from-green-500 to-green-600',
            },
            {
              label: 'Following',
              value: portfolioData.githubStats.following,
              icon: FiTrendingUp,
              color: 'from-purple-500 to-purple-600',
            },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card-container overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4`}>
                    <Icon size={24} />
                  </div>

                  {/* Value */}
                  <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value}+
                  </p>

                  {/* Label */}
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Card */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="card-container mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 flex-1">
              <h3 className="text-2xl font-bold gradient-text">
                Connect on GitHub
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Explore my projects, contribute, and see my latest work on GitHub. I'm actively involved in open-source development and constantly building new tools and solutions.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg btn-primary"
              >
                <FiGithub />
                Visit GitHub Profile
              </motion.a>
            </div>

            {/* Contribution Graph Placeholder */}
            <div className="flex-1 w-full">
              <div className="card-container border-2 border-primary-200/30 dark:border-primary-700/30">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4">
                  Contribution Activity
                </p>
                <div className="h-32 bg-gradient-to-b from-primary-500/10 to-transparent rounded-lg flex items-center justify-center">
                  <p className="text-slate-500 dark:text-slate-500 text-center">
                    📊 Interactive Contribution Graph
                    <br />
                    <span className="text-xs">Connect GitHub to display</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GitHubStats
