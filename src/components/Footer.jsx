import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { portfolioData } from '../utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 mt-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
      <div className="section-container py-12 space-y-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">RM</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {portfolioData.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Skills', 'Projects'].map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-slate-900 dark:text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Resume', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'GitHub', href: portfolioData.socialLinks.github },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-slate-900 dark:text-white">
              Follow
            </h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all"
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={portfolioData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all"
              >
                <FiTwitter size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-slate-600 dark:text-slate-400"
          >
            © {currentYear} {portfolioData.name}. All rights reserved.
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-slate-500 dark:text-slate-600 pt-4"
        >
          <p>
            Designed & Built with <span className="text-red-500">❤️</span> using React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
