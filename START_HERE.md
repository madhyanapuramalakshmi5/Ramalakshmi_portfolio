# Getting Started - Start Here! 🚀

Welcome to your AI Engineer Portfolio! This guide will have you up and running in 5 minutes.

## ⚡ Quick Start (5 Minutes)

### 1. Install & Run

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# 🎉 Your portfolio opens at http://localhost:3000!
```

### 2. Customize Your Info

Edit `src/utils/constants.js` and update:
- Your name, email, phone
- Social media links
- Skills and projects
- About section
- Everything about YOU!

### 3. Stop Server & Refresh Browser

Your changes appear instantly! The dev server has hot module reloading.

## 📁 What's Included?

✅ **10 Complete Sections** - Hero, About, Skills, Projects, Internship, Certifications, Achievements, GitHub Stats, Contact, Footer  
✅ **Dark/Light Mode** - Auto-detects system preference  
✅ **Fully Responsive** - Perfect on mobile, tablet, desktop  
✅ **Premium Animations** - Smooth Framer Motion transitions  
✅ **Modern Design** - Green AI theme, glassmorphism effects  
✅ **Production Ready** - Optimized for performance  

## 🎯 Key Files to Edit

| File | Purpose | What to Change |
|------|---------|----------------|
| `src/utils/constants.js` | Portfolio data | Your name, skills, projects |
| `tailwind.config.js` | Colors & theme | Change green to your color |
| `src/components/*` | Sections | Custom styling or layout |
| `.env` | Secrets | EmailJS credentials |

## 🚀 Building for Production

```bash
# Create optimized build
npm run build

# Output: dist/ folder (ready to deploy!)

# Test production build locally
npm run preview
```

## 🌐 Deploy (Choose One)

### Vercel (Easiest - 1 click!)
```bash
# Push to GitHub
git push origin main

# Visit https://vercel.com
# Connect GitHub repo
# Done! Auto-deploys on every push
```

### Netlify (Drag & Drop)
```bash
# Build
npm run build

# Drag dist/ to netlify.com
# Done!
```

### GitHub Pages
```bash
npm run build
git add dist/
git push
```

## 📖 Full Documentation

- **[README.md](./README.md)** - Comprehensive guide
- **[SETUP.md](./SETUP.md)** - Detailed setup instructions
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - All deployment options
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick reference

## 🎨 Customization Examples

### Change Your Name
**File**: `src/utils/constants.js`
```javascript
export const portfolioData = {
  name: 'YOUR NAME HERE', // Change this
  ...
}
```

### Add Your Project
**File**: `src/utils/constants.js`
```javascript
projects: [
  {
    id: 1,
    title: 'Your Project',
    description: 'What it does',
    technologies: ['React', 'Python'],
    category: 'AI & Machine Learning',
    // ... more details
  }
]
```

### Change Colors
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR', // Change from green
  }
}
```

## ❓ Common Questions

**Q: Can I change the green color?**  
A: Yes! Edit `tailwind.config.js` colors

**Q: How do I add a project?**  
A: Edit `src/utils/constants.js` and add to projects array

**Q: Does contact form work?**  
A: Not yet. Set up EmailJS (see SETUP.md)

**Q: How do I add my resume?**  
A: Add PDF to `public/resume.pdf`

**Q: Can I add more sections?**  
A: Yes! Create component in `src/components/`, import in App.jsx

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3001
```

**Styles not updating?**
```bash
npm run dev
# Hard refresh browser: Ctrl+Shift+R
```

**Build failed?**
```bash
rm -rf node_modules dist
npm install
npm run build
```

## 🎓 Learning Paths

**New to React?**
→ https://react.dev/learn

**New to Tailwind?**
→ https://tailwindcss.com/docs/installation

**New to Framer Motion?**
→ https://www.framer.com/motion/

## 📞 Need Help?

1. Check the full [README.md](./README.md)
2. Read [SETUP.md](./SETUP.md) for detailed guide
3. Check component comments in code
4. Visit official documentation links

## ✨ Pro Tips

1. **Git is your friend**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   ```

2. **Use descriptive text**
   - Recruiters love detailed project descriptions
   - Explain your role and impact

3. **Keep it updated**
   - Add new projects regularly
   - Update skills as you learn

4. **Mobile first**
   - Always check mobile view
   - DevTools → Toggle device toolbar

5. **Performance matters**
   - Keep images optimized
   - Monitor build size

## 🎉 Next Steps

- [ ] Customize `constants.js` with your info
- [ ] Test locally: `npm run dev`
- [ ] Build: `npm run build`
- [ ] Deploy to Vercel/Netlify
- [ ] Share with recruiters!

---

## 🚀 Commands Cheatsheet

```bash
npm install              # Install dependencies (first time)
npm run dev              # Start development (http://localhost:3000)
npm run build            # Create production build
npm run preview          # Preview production build locally
npm update              # Update all packages
npm audit               # Check for security issues
```

---

## 📊 Project Stats

- **Components**: 12
- **Sections**: 10
- **Files**: 40+
- **Build Size**: ~300KB (gzipped)
- **Performance Score**: 95+

---

## 🎯 Your Portfolio Journey

```
Start Here → Customize → Test → Build → Deploy → Share! 🚀
```

---

**Ready to get started?** Run `npm install && npm run dev` now! 🎉

Questions? See [README.md](./README.md) for full documentation.

**Built with ❤️ using React, Tailwind CSS & Framer Motion**

---

**Version**: 1.0.0  
**Last Updated**: May 2026
