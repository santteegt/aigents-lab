# Deployment Guide

This repository is configured to automatically deploy the documentation site to Vercel when changes are pushed to the `main` branch.

## Vercel Deployment Setup

### Required GitHub Secrets

To enable automatic deployment, you need to configure the following secrets in your GitHub repository:

1. **VERCEL_TOKEN**: Your Vercel authentication token
   - Go to https://vercel.com/account/tokens
   - Create a new token
   - Add it as `VERCEL_TOKEN` in GitHub Secrets

2. **VERCEL_ORG_ID**: Your Vercel organization ID
   - Found in your Vercel project settings under "General" → "Organization ID"

3. **VERCEL_PROJECT_ID**: Your Vercel project ID
   - Found in your Vercel project settings under "General" → "Project ID"

### Setting up GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add each of the three secrets listed above

### Alternative: Vercel GitHub Integration

Instead of using GitHub Actions, you can also use Vercel's built-in GitHub integration:

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure the build settings:
   - **Root Directory**: `apps/docs`
   - **Build Command**: `npm install && npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
4. Vercel will automatically deploy on every push to `main`

### Manual Deployment

You can also deploy manually using Vercel CLI:

```bash
cd apps/docs
npm install -g vercel
vercel
```

## Workflow Configuration

The GitHub Actions workflow (`.github/workflows/deploy-docs.yml`) is configured to:

- Trigger on pushes to `main` branch when files in `apps/docs/` change
- Build the Docusaurus site
- Deploy to Vercel production

## Updating Vercel URL

If your Vercel deployment URL differs from `aigents-lab.vercel.app`, update it in:

- `apps/docs/docusaurus.config.ts` - Update the `url` field

## Troubleshooting

### Build Failures

- Check that all dependencies are installed correctly
- Verify Node.js version (should be 20+)
- Check for TypeScript or linting errors

### Deployment Failures

- Verify all required secrets are set in GitHub
- Check Vercel dashboard for deployment logs
- Ensure Vercel project is configured correctly

