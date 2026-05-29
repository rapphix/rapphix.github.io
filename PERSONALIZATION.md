# Personalization Guide

## Quick Customization

### 1. Update Your Name & Title
**File:** `components/Hero.tsx`

Find line 43:
```typescript
Hi, I'm <span className="text-accent">Your Name</span>
```

Replace `Your Name` with your actual name.

### 2. Update Professional Title
**File:** `components/Hero.tsx` (line 49)
```typescript
Full Stack Developer | Creative Problem Solver | Tech Enthusiast
```

Change to your professional title, e.g., "Frontend Developer | UI/UX Designer"

### 3. Update About Section
**File:** `components/About.tsx`

Edit the three paragraphs (lines 40-51) with your background, skills, and interests.

### 4. Add Your Projects
**File:** `lib/data.ts`

Update the `projects` array:
```typescript
{
  id: 5,
  title: 'Your Project Name',
  description: 'Brief description of what this project does',
  technologies: ['React', 'TypeScript', 'Node.js'],
  link: 'https://yourproject.com',  // Optional: live demo link
  github: 'https://github.com/yourusername/repo',  // Optional
}
```

### 5. Update Skills
**File:** `lib/data.ts`

Modify the `skills` array:
```typescript
{
  category: 'Frontend',
  items: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS'],
}
```

### 6. Update Experience
**File:** `lib/data.ts`

Edit the `experiences` array with your work history:
```typescript
{
  id: 1,
  company: 'Company Name',
  position: 'Your Position',
  period: '2023 - Present',
  description: 'What you accomplished...',
}
```

### 7. Update Contact Information
**File:** `components/Contact.tsx` (line 35)
```typescript
mailto:your@email.com
```

**File:** `components/Hero.tsx` (line 97)
```typescript
mailto:your@email.com
```

### 8. Update Social Links
**File:** `components/Hero.tsx`
- Line 101: Update GitHub URL
- Line 108: Update LinkedIn URL

**File:** `components/Footer.tsx`
- Line 24: Update GitHub URL
- Line 31: Update LinkedIn URL
- Line 38: Update email

### 9. Update Metadata
**File:** `lib/seo.ts`

Update the name in multiple places:
```typescript
name: 'Your Name',
url: 'https://rapphix.me',
email: 'your@email.com',
```

**File:** `app/layout.tsx`
```typescript
'https://rapphix.me/og-image.jpg'  // Add your own image
```

## Advanced Customization

### Change Colors

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: '#0f172a',        // Dark background
  secondary: '#1e293b',      // Secondary dark
  accent: '#3b82f6',         // Blue accent (change this!)
  'accent-dark': '#1e40af',  // Darker blue
}
```

Try color codes:
- Blue: `#3b82f6` (current)
- Purple: `#8b5cf6`
- Green: `#10b981`
- Red: `#ef4444`
- Pink: `#ec4899`

### Customize Fonts

**File:** `styles/globals.css`

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
}
```

Install a custom font via Google Fonts and replace the font-family.

### Add Sections

Create a new component in `components/`, e.g., `components/Blog.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Latest Articles</h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

Then add it to `app/page.tsx`:

```typescript
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blog />  {/* Add here */}
      <Skills />
      <Contact />
    </>
  );
}
```

## Environment Variables

**File:** `.env.local` (create this file)

```
NEXT_PUBLIC_EMAIL=your@email.com
NEXT_PUBLIC_BASE_URL=https://rapphix.me
```

Use in components:
```typescript
process.env.NEXT_PUBLIC_EMAIL
process.env.NEXT_PUBLIC_BASE_URL
```

## SEO Optimization

1. **Update metadata** in `app/layout.tsx`
2. **Add Open Graph images** to `public/` folder
3. **Update JSON-LD** in `lib/seo.ts`
4. **Add sitemap.xml** to `public/` folder

Example `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rapphix.me</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rapphix.me#projects</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Testing Changes Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

Changes auto-reload as you edit files.

## Deployment

Push to GitHub:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Actions automatically builds and deploys to rapphix.me!

## Need Help?

- Check the main [README.md](./README.md) for tech stack info
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review component files for examples
