# NoelBingo-site
This is a temporary landing page for the NoelBingo project.

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### How it works:
- The site is deployed automatically when changes are pushed to the `main` branch
- The workflow file is located at `.github/workflows/deploy.yml`
- After merging this PR and the workflow runs, the site will be available at: `https://madddennison.github.io/NoelBingo-site/`

### Manual Setup Required:
After merging this PR, you need to enable GitHub Pages in your repository settings:
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", ensure **Source** is set to "GitHub Actions"
4. The workflow will automatically deploy on the next push to `main`
