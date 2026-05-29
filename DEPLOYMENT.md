# DEPLOYMENT.md - Complete Deployment Guide

## 🚀 Pre-Deployment Checklist

- [ ] Update personal information in `src/utils/constants.js`
- [ ] Add resume PDF to `public/resume.pdf`
- [ ] Update social media links
- [ ] Configure EmailJS (optional but recommended)
- [ ] Test all features locally with `npm run dev`
- [ ] Run `npm run build` and verify no errors
- [ ] Test production build with `npm run preview`

## 📋 Deployment Platforms

### 1. VERCEL (Recommended - Fastest & Easiest)

**Step-by-step:**

1. **Prepare GitHub Repository**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

2. **Deploy to Vercel**
   - Visit https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Vercel automatically detects Vite configuration
   - Click "Deploy"

3. **Configure Custom Domain**
   - Go to project settings → Domains
   - Add your custom domain
   - Update DNS records (detailed instructions on Vercel)

4. **Environment Variables (if using EmailJS)**
   - Settings → Environment Variables
   - Add your EmailJS credentials

**Deployment Time**: ~1-2 minutes  
**Cost**: Free with optional paid tiers  
**Auto Deploy**: Yes (on git push)

---

### 2. NETLIFY

**Step-by-step:**

1. **Build Project**
```bash
npm run build
```

2. **Deploy Option A - Git Integration**
   - Push code to GitHub
   - Visit https://netlify.com
   - Click "New site from Git"
   - Select repository
   - Build settings auto-detected
   - Click "Deploy"

2. **Deploy Option B - Manual Upload**
   - Visit https://netlify.com
   - Drag and drop `dist` folder
   - Site deployed instantly!

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Add Custom Domain**
   - Settings → Domain settings
   - Add custom domain
   - Update DNS

**Deployment Time**: ~1-2 minutes  
**Cost**: Free with optional paid features  
**Auto Deploy**: Yes (Git integration)

---

### 3. GITHUB PAGES

**Step-by-step:**

1. **Update package.json**
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio",
  ...
}
```

2. **Create deploy script** (optional but recommended)

3. **Build and Deploy**
```bash
npm run build
git add dist/
git commit -m "Deploy: Build dist folder"
git push origin main
```

4. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Select "Deploy from a branch"
   - Branch: `main` / folder: `/root` (if using root)
   - Or use `/dist` if built

5. **Add Custom Domain**
   - Settings → Pages → Custom domain
   - Update DNS records

**Deployment Time**: ~5 minutes  
**Cost**: Free  
**Auto Deploy**: Manual (push dist folder)

---

### 4. AWS S3 + CloudFront

**Step-by-step:**

1. **Build Project**
```bash
npm run build
```

2. **Create S3 Bucket**
   - AWS Console → S3
   - Create bucket: `your-portfolio-bucket`
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Configure CloudFront**
   - AWS Console → CloudFront
   - Create distribution
   - Point to S3 bucket
   - Configure cache settings

4. **Connect Domain**
   - Update Route 53 records
   - Or use CloudFront domain

**Deployment Time**: ~10-15 minutes  
**Cost**: Low (pay-as-you-go)  
**Auto Deploy**: Manual or use AWS CLI

---

## 🔧 EmailJS Configuration

If you want contact form to work:

1. **Create EmailJS Account**
   - Visit https://www.emailjs.com
   - Sign up with email

2. **Get Credentials**
   - Dashboard → Add Service
   - Create email service
   - Get Service ID
   - Dashboard → Templates
   - Create email template
   - Get Template ID
   - Account → API Keys
   - Get Public Key

3. **Update Configuration**

Option A - Environment Variables:
```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_xxxxx
```

Option B - Direct Update:
Edit `src/utils/email.js`:
```javascript
const SERVICE_ID = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const PUBLIC_KEY = 'your_public_key'
```

---

## 📱 Domain Name

### Purchase Domain
- Namecheap
- GoDaddy
- Google Domains
- Bluehost

### Recommended Setup
1. Buy domain with DNS management
2. Point to deployment platform
3. Each platform has specific DNS instructions

---

## 🔒 Security

### Before Deployment
- [ ] No secrets in code (use .env)
- [ ] Update all social links
- [ ] Remove placeholder credentials
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Check mobile responsiveness

### After Deployment
- [ ] Test site in browser
- [ ] Run Lighthouse audit
- [ ] Check all pages load
- [ ] Test contact form
- [ ] Verify dark mode works
- [ ] Test on mobile devices

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use optimized images in `public/`
   - Consider WebP format

2. **Code Splitting**
   - Vite automatically does this
   - Monitor bundle size: `npm run build`

3. **Caching**
   - Enable browser caching
   - Set CDN cache headers

4. **Analytics**
   - Google Analytics
   - Vercel Analytics
   - Netlify Analytics

---

## 🔄 Post-Deployment Updates

### Update Content
1. Edit `src/utils/constants.js`
2. Commit and push
3. Auto-deployed!

### Update Styling
1. Edit Tailwind classes
2. Rebuild: `npm run build`
3. Deploy updated `dist`

### Add New Sections
1. Create component
2. Import in `App.jsx`
3. Build and deploy

---

## 🆘 Troubleshooting

### Site Not Loading
- Check deployment logs
- Verify build was successful
- Check domain DNS settings

### Styles Not Applied
- Clear browser cache
- Rebuild: `npm run build`
- Check Tailwind configuration

### EmailJS Not Working
- Verify credentials
- Check browser console for errors
- Test template in EmailJS dashboard

### Performance Issues
- Check bundle size
- Optimize images
- Enable compression on server
- Use CDN

---

## 📞 Support Resources

- **Vite Issues**: https://github.com/vitejs/vite/issues
- **React Issues**: https://github.com/facebook/react/issues
- **Tailwind Issues**: https://github.com/tailwindlabs/tailwindcss/discussions
- **Framer Motion Issues**: https://github.com/framer/motion/discussions

---

## 🎉 Deployment Complete!

Your portfolio is now live and accessible to the world!

**Next Steps:**
- Share your portfolio link
- Update resume with portfolio URL
- Share on LinkedIn, GitHub
- Monitor analytics
- Gather feedback

---

**Version**: 1.0.0  
**Last Updated**: May 2026
