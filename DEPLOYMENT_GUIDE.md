# Deployment Guide - Ania Olczyk Website

## 🚀 **Recommended: GitHub Actions (Option 1)**

This is the most professional approach - automatic deployment on every push to main branch.

### Setup:
1. **Create the workflow file** (already done: `.github/workflows/deploy.yml`)
2. **Enable GitHub Actions** in your repository settings
3. **Configure GitHub Pages** to use `gh-pages` branch
4. **Push to main branch** - deployment happens automatically!

### Benefits:
- ✅ **Fully automated** - no manual steps
- ✅ **Clean main branch** - only source code, no build files
- ✅ **Automatic builds** - every push triggers deployment
- ✅ **Professional workflow** - industry standard

---

## 🎯 **Simple: Direct Branch Deployment (Option 2)**

Deploy directly from your main branch (simpler but less clean).

### Setup:
1. **Install gh-pages**: `npm install --save-dev gh-pages`
2. **Configure package.json** (already done)
3. **Deploy**: `npm run deploy`

### Commands:
```bash
# Deploy to gh-pages branch
npm run deploy

# Or deploy directly to main branch
npm run deploy:main
```

---

## 🔧 **Current Workaround (Option 3)**

If you want to keep your current approach but simplify it:

### Create a deployment script:
```bash
#!/bin/bash
# deploy.sh
npm run build
git add build/
git commit -m "Build for deployment"
git push origin main
```

### Make it executable:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 📋 **GitHub Pages Configuration**

### In your repository settings:

1. **Go to Settings > Pages**
2. **Source**: Choose deployment method:
   - **GitHub Actions** (recommended)
   - **Deploy from a branch** → Select `gh-pages` branch
   - **Deploy from a branch** → Select `main` branch (if using Option 2)

3. **Custom domain**: `aniaolczyk.com`
4. **Enforce HTTPS**: ✅ Enabled

---

## 🎯 **Recommended Workflow**

### For daily development:
```bash
# Work on your code
git add .
git commit -m "Update singles section"
git push origin main

# GitHub Actions automatically builds and deploys!
```

### For manual deployment (if needed):
```bash
npm run deploy
```

---

## 🔍 **Troubleshooting**

### If GitHub Actions doesn't work:
1. Check **Actions** tab in your repository
2. Ensure **GitHub Pages** is enabled in settings
3. Verify **GITHUB_TOKEN** permissions

### If direct deployment doesn't work:
1. Check if `gh-pages` package is installed
2. Verify `homepage` field in package.json
3. Ensure build directory exists

### Common issues:
- **404 errors**: Check if `basename` is set correctly in React Router
- **Build failures**: Check Node.js version compatibility
- **Domain issues**: Verify CNAME file in build directory

---

## 🚀 **Quick Start (Recommended)**

1. **Push the workflow file** to your repository
2. **Enable GitHub Actions** in repository settings
3. **Configure GitHub Pages** to use `gh-pages` branch
4. **Make any changes** and push to main branch
5. **Deployment happens automatically!**

---

*This guide covers all deployment options for your React website on GitHub Pages*
