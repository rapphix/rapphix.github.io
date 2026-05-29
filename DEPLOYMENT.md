# GitHub Pages Deployment Guide for rapphix.me

## Prerequisites

- GitHub account with the repository pushed
- Node.js 18+ installed locally
- Your custom domain (rapphix.me) configured on Namecheap

## Step 1: Configure Domain on Namecheap

1. Log in to Namecheap
2. Go to **Domain List** → **Manage** (next to rapphix.me)
3. Navigate to **Advanced DNS**
4. Add the following DNS records:

```
Type: A Record
Host: @
Value: 185.199.108.153

Type: A Record
Host: @
Value: 185.199.109.153

Type: A Record
Host: @
Value: 185.199.110.153

Type: A Record
Host: @
Value: 185.199.111.153

Type: CNAME Record
Host: www
Value: yourusername.github.io
```

Replace `yourusername` with your actual GitHub username.

## Step 2: Configure GitHub Repository

1. Push your code to the `main` branch
2. Go to your repository on GitHub
3. Navigate to **Settings** → **Pages**
4. Under "Build and deployment":
   - Source: **GitHub Actions**
   - Branch: keep default (will auto-detect)
5. Under "Custom domain":
   - Enter: `rapphix.me`
   - Check "Enforce HTTPS"

## Step 3: Deploy

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. **Trigger** on every push to the `main` branch
2. **Install** dependencies
3. **Build** the Next.js site for static export
4. **Deploy** to GitHub Pages with your custom domain

## Manual Deployment

To build and test locally:

```bash
npm install
npm run build
```

This creates an `out` folder with the static site.

## Verify Deployment

1. Wait 5-10 minutes for DNS propagation
2. Visit https://rapphix.me
3. Check that HTTPS certificate is active
4. Verify all pages load correctly

## Troubleshooting

### Domain not working
- DNS changes can take 24-48 hours to propagate
- Clear your browser cache
- Try from an incognito window

### GitHub Pages not building
- Check GitHub Actions tab for error logs
- Ensure `next.config.js` has `output: 'export'`
- Verify `.github/workflows/deploy.yml` is in the correct path

### Mixed content warning
- Ensure all external links use HTTPS
- Check for hardcoded HTTP URLs in code

## Updating Content

To update your portfolio:

1. Edit files locally
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and redeploy
4. Changes appear on rapphix.me within 1-2 minutes

## Next Steps

- Update personal information in `lib/data.ts`
- Customize colors in `tailwind.config.ts`
- Add your projects and skills
- Update social media links
- Test on different devices and browsers
