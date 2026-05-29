# Quick Start Guide 🚀

## Getting Your Portfolio Live in 5 Minutes

### Step 1: Personalize Your Portfolio (2 min)
Open these files and update with your info:

**`lib/data.ts`** - Update:
- [ ] Your projects (replace example projects)
- [ ] Your skills (Frontend, Backend, Tools)
- [ ] Your experience (companies, roles, dates)

**`components/Hero.tsx`** - Update:
- [ ] Your name (line 43)
- [ ] Your title (line 49)
- [ ] Your email links

**`components/Contact.tsx`** - Update:
- [ ] Your email address (line 35)

### Step 2: Test Locally (1 min)
```bash
npm run dev
```
Open http://localhost:3000 and check everything looks good.

### Step 3: Deploy to GitHub (2 min)

```bash
# Stage changes
git add .

# Commit
git commit -m "Initial portfolio setup with personalized content"

# Push to main branch
git push origin main
```

**That's it!** GitHub Actions automatically builds and deploys.

### Step 4: Verify Deployment (wait 5-10 min)
Visit https://rapphix.me and your site is live! 🎉

---

## What You Get

✅ **Dark/Light Theme** - Toggle in navbar  
✅ **Responsive Design** - Works on all devices  
✅ **Smooth Animations** - Professional feel  
✅ **SEO Optimized** - Good search rankings  
✅ **Auto-Deploy** - Push = Live in 1-2 min  
✅ **Custom Domain** - Your own rapphix.me  

---

## Common Customizations

### Change Color Theme
**File:** `tailwind.config.ts` (line 11)

Current: `accent: '#3b82f6'` (blue)

Popular alternatives:
- Purple: `'#8b5cf6'`
- Green: `'#10b981'`
- Pink: `'#ec4899'`
- Orange: `'#f97316'`

### Add More Projects
**File:** `lib/data.ts` (line 20+)

```typescript
{
  id: 5,
  title: 'Your Project',
  description: 'What it does...',
  technologies: ['React', 'Node.js'],
  link: 'https://example.com',
  github: 'https://github.com/you/project',
}
```

### Change Social Links
**Files to update:**
- `components/Hero.tsx` (lines 101, 108)
- `components/Footer.tsx` (lines 24, 31, 38)

Replace URLs with your GitHub, LinkedIn, etc.

---

## Troubleshooting

**Q: Site not appearing at rapphix.me?**  
A: DNS takes 5-10 min to propagate. Try again in 10 minutes.

**Q: Getting build errors?**  
A: Check GitHub Actions tab for error logs. Most common: ensure `next.config.js` has `output: 'export'`

**Q: Theme toggle not working?**  
A: Make sure browser has JavaScript enabled.

**Q: Changes not showing?**  
A: Clear browser cache (Ctrl+Shift+Delete) and try again.

---

## File Structure Overview

```
rapphix.github.io/
├── app/
│   ├── layout.tsx      ← Main layout with metadata
│   ├── page.tsx        ← Home page sections
│   └── globals.css     ← Global styles
├── components/
│   ├── Navbar.tsx      ← Navigation (has theme toggle)
│   ├── Hero.tsx        ← Welcome section
│   ├── About.tsx       ← About you
│   ├── Projects.tsx    ← Your work
│   ├── Skills.tsx      ← Technical skills
│   ├── Contact.tsx     ← Contact form
│   ├── Footer.tsx      ← Footer links
│   └── ThemeToggle.tsx ← Dark/light switcher
├── lib/
│   ├── data.ts         ← Your content (projects, skills, etc)
│   └── seo.ts          ← SEO helpers
├── public/
│   └── manifest.json   ← PWA configuration
├── .github/workflows/
│   └── deploy.yml      ← Auto-deployment script
├── DEPLOYMENT.md       ← Deployment guide
├── PERSONALIZATION.md  ← Customization guide
├── IMPROVEMENTS.md     ← What's new
└── package.json        ← Dependencies
```

---

## Essential Files to Edit

| File | What to Change |
|------|----------------|
| `lib/data.ts` | Projects, skills, experience |
| `components/Hero.tsx` | Your name, title, email |
| `components/About.tsx` | Your bio |
| `tailwind.config.ts` | Colors, animations |
| `app/layout.tsx` | SEO metadata |

---

## Deploy Workflow

```
You edit files locally
        ↓
git commit + git push to main
        ↓
GitHub Actions triggered
        ↓
Next.js builds static site
        ↓
Deployed to GitHub Pages
        ↓
Live at rapphix.me (1-2 min)
```

---

## Feature Checklist

- [x] Dark/Light theme support
- [x] Mobile responsive
- [x] Smooth animations
- [x] SEO optimized
- [x] Auto-deployment
- [x] Custom domain (rapphix.me)
- [x] GitHub Pages hosting
- [x] Contact form
- [x] Social links
- [x] Professional design

---

## Next: Advanced Customization

After the basics, you can:
- Add a blog section
- Add resume/CV download
- Add testimonials
- Connect contact form to email service
- Add google analytics
- Add dark mode toggle animations
- Add newsletter signup

See **PERSONALIZATION.md** for detailed guides.

---

## Need Help?

1. **Deployment issues?** → See `DEPLOYMENT.md`
2. **Want to customize?** → See `PERSONALIZATION.md`
3. **What changed?** → See `IMPROVEMENTS.md`
4. **General info?** → See `README.md`

---

## You're All Set! 🎉

Your professional portfolio is ready to go live. Follow the 4 steps above and you'll be online in minutes!

Questions? Check the documentation files or review the component code—it's well-commented.

**Good luck! Your portfolio is going to look amazing!** ✨
