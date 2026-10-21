# Jose R. Manalo — Portfolio Website

This is a fully functioning responsive static portfolio: **no npm, database, server, build command or paid domain required.**

## Preview locally

Double-click `index.html` to open the site in Chrome. The Resume buttons open your actual PDF at `assets/Jose_R_Manalo_Resume.pdf` in a new tab.

## Personalize before sharing

1. Your email, GitHub, and LinkedIn from your uploaded resume are already connected in `script.js`. Add PawMatch and BANTAY repository URLs when available; blank links appear as unavailable labels.
2. Open `index.html` to update your introduction, skills, and project descriptions. BANTAY is intentionally described conservatively until verified.
3. To update the resume later, replace `assets/Jose_R_Manalo_Resume.pdf` with your new PDF using the same filename.
4. Replace project artwork if you want by editing `index.html` and `styles.css`. The existing design works without external images.
5. For a custom domain, only configure it after you own the domain; otherwise leave **Custom domain** blank in GitHub Pages.

## Publish on GitHub Pages (FREE)

1. Sign in to GitHub and create a **public** repository named `YOUR_GITHUB_USERNAME.github.io`. Make sure the exact GitHub username matches your account.
2. Click **Add file → Upload files** and upload the **contents** of this folder: `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder.
3. Commit the files to the `main` branch.
4. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main**, Folder to **/(root)** and Save.
5. Open `https://YOUR_GITHUB_USERNAME.github.io/` after GitHub finishes publishing. DNS configuration is not required.

For a different repository name, your URL is normally `https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/`.

## Files

- `index.html` — main page
- `styles.css` — desktop and mobile styles
- `script.js` — links, menu, current year
- `assets/Jose_R_Manalo_Resume.pdf` — original one-page resume PDF (embedded unchanged)
- `assets/favicon.svg` — website tab icon
- `README.md` — instructions

No external JavaScript libraries. Google Fonts are optional: the site still works with the fallback system fonts when offline.
