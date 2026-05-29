# Professional Portfolio

A modern, clean, and professional portfolio website built with Next.js, TypeScript, React, and Tailwind CSS.

## Features

- ✨ **Modern Design** - Clean and professional aesthetic with smooth animations
- 📱 **Responsive** - Fully responsive design that works on all devices
- ⚡ **Fast** - Built with Next.js for optimal performance
- 🎨 **Beautiful Animations** - Smooth transitions powered by Framer Motion
- 🌙 **Dark Theme** - Professional dark theme with accent colors
- 📧 **Contact Form** - Functional contact form for visitor inquiries
- 🔍 **SEO Optimized** - Meta tags and structured data for better SEO

## Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Brief bio and highlights about your experience
- **Projects** - Showcase of your best work with descriptions and links
- **Skills** - Organized list of technical skills
- **Contact** - Contact form for getting in touch

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Update Personal Information

Edit the following files with your information:

- `lib/data.ts` - Update projects, skills, and experience
- `components/Hero.tsx` - Update your name and title
- `app/layout.tsx` - Update metadata
- `components/Contact.tsx` - Update your email address

### Change Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0f172a',
  secondary: '#1e293b',
  accent: '#3b82f6',
  'accent-dark': '#1e40af',
}
```

### Add More Projects

Add entries to the `projects` array in `lib/data.ts`:

```typescript
{
  id: 5,
  title: 'Your Project',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  link: 'https://example.com',
  github: 'https://github.com/yourusername/repo',
}
```

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy on GitHub Pages

The `CNAME` file is already configured for custom domain deployment.

## Type Checking

```bash
npm run type-check
```

## Linting

```bash
npm run lint
```

## License

This project is open source and available under the MIT License.

## Support

If you have questions or need help customizing your portfolio, feel free to reach out!

---

Made with ❤️ using Next.js & React