import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'
import { navLinks } from '../utils/constants'
import { Link } from 'react-scroll'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-primary-200/20 dark:border-primary-700/20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            RM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href.slice(1)}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </motion.button>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
            >
              {isDark ? (
                <FiSun className="text-yellow-400 text-xl" />
              ) : (
                <FiMoon className="text-slate-700 text-xl" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href.slice(1)}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                <button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors">
                  {link.name}
                </button>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
