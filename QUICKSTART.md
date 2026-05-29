# Ramalakshmi's AI Engineer Portfolio

## Quick Start Guide

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server (auto-opens in browser)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup (Optional - For Email)

Create a `.env` file in the root directory:
```
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

## Key Sections

1. **Hero Section** - Welcome with typing animation
2. **About Me** - Personal story and career vision
3. **Skills** - Categorized with progress bars
4. **Projects** - Filterable showcase
5. **Internship** - Timeline experience
6. **Certifications** - Professional credentials
7. **Achievements** - Recognition badges
8. **GitHub Stats** - Repository statistics
9. **Contact** - Get in touch form
10. **Footer** - Navigation and social links

## Customization

### Update Personal Information
Edit `src/utils/constants.js` with:
- Name, email, phone, location
- Skills and proficiency levels
- Projects and descriptions
- Social media links
- Professional achievements

### Modify Colors
Edit `tailwind.config.js` to change the green color scheme.

### Change Animations
Modify `src/utils/animations.js` using Framer Motion variants.

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Connect GitHub repo to Vercel dashboard
```

### Netlify
```bash
npm run build
# Drag dist folder to netlify.com
```

### GitHub Pages
Update `package.json` homepage and use GitHub Pages deployment.

## Features

✨ Dark/Light mode toggle  
📱 Mobile responsive  
🎨 Modern glassmorphism design  
🎬 Smooth animations  
⌨️ Typing text effect  
🌊 Particle background  
💫 Hover interactions  
🔍 SEO optimized  

## Troubleshooting

- **Port in use**: `npm run dev -- --port 3001`
- **Build fails**: `rm -rf node_modules && npm install`
- **Dark mode issue**: Check theme context initialization

## Documentation

See [README.md](./README.md) for full documentation.

## Support

For questions, refer to:
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vite: https://vitejs.dev

---

**Happy Coding!** 🚀
