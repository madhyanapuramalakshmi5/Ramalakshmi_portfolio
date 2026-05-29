import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { portfolioData } from '../utils/constants'
import { staggerContainer, itemVariants, fadeInUp } from '../utils/animations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with EmailJS
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section
      id="contact"
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            {/* Email */}
            <motion.a
              variants={itemVariants}
              whileHover={{ x: 10 }}
              href={`mailto:${portfolioData.email}`}
              className="flex gap-4 p-6 card-container group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                <FiMail size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Email
                </p>
                <p className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {portfolioData.email}
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              variants={itemVariants}
              whileHover={{ x: 10 }}
              href={`tel:${portfolioData.phone}`}
              className="flex gap-4 p-6 card-container group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                <FiPhone size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Phone
                </p>
                <p className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {portfolioData.phone}
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 p-6 card-container"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                <FiMapPin size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Location
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {portfolioData.location}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <p className="font-semibold text-slate-900 dark:text-white mb-4">
                Follow Me
              </p>
              <div className="flex gap-4">
                {[
                  { icon: '🐙', label: 'GitHub', url: portfolioData.socialLinks.github },
                  { icon: '💼', label: 'LinkedIn', url: portfolioData.socialLinks.linkedin },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-2xl hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <motion.form
              onSubmit={handleSubmit}
              className="card-container space-y-6"
            >
              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-green-100 dark:bg-green-900/20 border border-green-500 text-green-700 dark:text-green-400"
                >
                  ✓ Thanks for reaching out! I'll get back to you soon.
                </motion.div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-all"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <FiSend />
                Send Message
              </motion.button>

              {/* Note */}
              <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
                I'll respond to your message within 24 hours.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
