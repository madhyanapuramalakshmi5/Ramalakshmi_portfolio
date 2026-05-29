# SETUP.md - Detailed Setup Instructions

## 🎯 Complete Setup Guide

### Step 1: Initial Setup (5 minutes)

```bash
# Navigate to project directory
cd portfolio

# Install all dependencies
npm install

# Verify installation
npm --version
node --version
```

### Step 2: Local Development (2 minutes)

```bash
# Start development server
npm run dev

# Server runs on: http://localhost:3000
# Auto-opens in default browser
# Hot Module Replacement (HMR) enabled - changes reflect instantly
```

### Step 3: Customize Portfolio (10-15 minutes)

Edit `src/utils/constants.js`:

```javascript
export const portfolioData = {
  name: 'Your Name',
  tagline: 'Your Tagline',
  location: 'Your Location',
  email: 'your-email@example.com',
  phone: '+91-XXXXXXXXXX',
  
  // Update social links
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourhandle',
  },

  // Update about section
  about: { ... },
  
  // Update skills
  skills: { ... },
  
  // Update projects
  projects: [ ... ],
  
  // And so on...
}
```

### Step 4: Configuration

#### Dark Mode
Already enabled! Automatic based on system preference.
Users can toggle with the sun/moon icon.

#### EmailJS (Optional)

1. Sign up at https://www.emailjs.com
2. Create a service and template
3. Get your credentials
4. Update `src/utils/email.js`:

```javascript
const SERVICE_ID = 'service_xxxxxxxxx'
const TEMPLATE_ID = 'template_xxxxxxxxx'
const PUBLIC_KEY = 'public_xxxxxxxxx'
```

#### Tailwind Customization

Edit `tailwind.config.js` to change:
- Colors
- Fonts
- Spacing
- Animation timing
- Breakpoints

### Step 5: Testing Locally

```bash
# Development mode (with HMR)
npm run dev

# Production mode simulation
npm run build
npm run preview
```

### Step 6: Build for Production

```bash
# Create optimized production build
npm run build

# Output in: dist/
# Ready to deploy!
```

---

## 📂 File Structure Explained

```
portfolio/
├── index.html              # HTML entry point
├── package.json            # Dependencies config
├── vite.config.js          # Vite build config
├── tailwind.config.js      # Tailwind styling config
├── postcss.config.js       # PostCSS config
├── README.md               # Full documentation
├── QUICKSTART.md           # Quick reference
├── DEPLOYMENT.md           # Deployment guide
├── SETUP.md                # This file
│
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main component
│   │
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Internship.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticlesBackground.jsx
│   │   └── TypingAnimation.jsx
│   │
│   ├── context/            # State management
│   │   └── ThemeContext.jsx # Dark/light mode
│   │
│   ├── hooks/              # Custom React hooks
│   │   └── useScrollReveal.js
│   │
│   ├── utils/              # Utility functions
│   │   ├── animations.js   # Framer Motion variants
│   │   ├── constants.js    # Portfolio data
│   │   └── email.js        # EmailJS setup
│   │
│   ├── styles/             # Global styles
│   │   └── index.css       # Tailwind + custom CSS
│   │
│   └── assets/             # Images, fonts, etc
│
└── public/                 # Static files
    └── resume.pdf          # Add your resume here
```

---

## 🎨 Customization Examples

### Change Primary Color

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // Main color
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#145231',
  }
}
```

### Change Fonts

Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font Name', 'fallback'],
}
```

Also add to `src/styles/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Add New Project

Edit `src/utils/constants.js`:

```javascript
projects: [
  // ... existing projects
  {
    id: 4,
    title: 'New Project',
    description: 'Description',
    technologies: ['Tech1', 'Tech2'],
    category: 'Category',
    features: ['Feature1', 'Feature2'],
    image: '🎯',
    githubLink: '#',
    liveLink: '#',
    status: 'Completed',
  },
]
```

### Add New Skill

Edit `src/utils/constants.js`:

```javascript
skills: {
  programming: [
    // ... existing skills
    { name: 'New Skill', level: 85 },
  ]
}
```

---

## 🧪 Testing Features

### Test Dark Mode
- Click sun/moon icon in navbar
- Check theme persists on refresh
- Verify all colors work in both modes

### Test Responsiveness
- DevTools → Toggle device toolbar
- Test on various screen sizes:
  - Mobile: 375px
  - Tablet: 768px
  - Desktop: 1024px, 1280px

### Test Animations
- Hero section typing animation
- Scroll reveal animations
- Hover effects
- Project filtering

### Test Forms
- Fill contact form
- Submit (check console for errors)
- Verify validation works

### Test Navigation
- Click nav links
- Smooth scroll works
- Active highlighting updates
- Mobile menu works

---

## 🚀 Performance Optimization

### Check Build Size
```bash
npm run build
# Check output in terminal
# Should be under 500KB total
```

### Lighthouse Audit
```bash
# In browser DevTools
# Ctrl+Shift+I → Lighthouse
# Run audit
# Target: 90+ score
```

### Monitor Bundle
```bash
# See what's using space
npm run build
```

---

## 🔍 Debugging

### Enable Debug Mode

Add to `src/main.jsx`:
```javascript
window.__DEBUG__ = true
```

### Check Console
- F12 or Ctrl+Shift+I
- Console tab shows errors
- Network tab shows requests

### Common Issues

**1. Styles not updating**
```bash
# Clear cache and rebuild
rm -rf dist
npm run dev
```

**2. Components not showing**
- Check import statements
- Verify component export
- Check console for errors

**3. Animations not working**
- Verify Framer Motion installed
- Check animation variants exist
- Verify motion divs have proper props

---

## 📚 Learning Resources

### React
- https://react.dev - Official docs
- https://beta.react.dev - Interactive guide

### Tailwind CSS
- https://tailwindcss.com/docs - Complete docs
- https://ui.shadcn.com - Component library

### Framer Motion
- https://www.framer.com/motion - Official docs
- YouTube tutorials available

### Vite
- https://vitejs.dev - Official docs
- Blazing fast build tool

---

## ⚡ Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Maintenance
npm install              # Install dependencies
npm update              # Update dependencies
npm audit               # Check security

# Cleaning
rm -rf node_modules     # Remove dependencies
rm -rf dist             # Remove build output
```

---

## 🎯 Next Steps

1. ✅ Customize `constants.js` with your info
2. ✅ Test locally with `npm run dev`
3. ✅ Verify all sections display correctly
4. ✅ Test dark mode and responsiveness
5. ✅ Build with `npm run build`
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share your portfolio!

---

## 💡 Pro Tips

1. **Use Git**
   - Initialize git repo
   - Commit changes regularly
   - Easy rollback if needed

2. **Environment Variables**
   - Use `.env` for secrets
   - Never commit credentials
   - Use `.env.example` for reference

3. **Performance**
   - Lazy load images
   - Code split components
   - Monitor bundle size

4. **SEO**
   - Update meta tags
   - Add sitemap
   - Submit to Google Search Console

5. **Analytics**
   - Add Google Analytics
   - Track visitor behavior
   - Monitor performance

---

## 🎉 You're Ready!

Your portfolio is now set up and customized. Deploy it and start showcasing your work!

**Questions?** Check:
- README.md - Full documentation
- DEPLOYMENT.md - Deployment guide
- Component comments for code explanations

---

**Last Updated**: May 2026  
**Version**: 1.0.0
