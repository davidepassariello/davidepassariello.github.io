# Davide Passariello — Personal Portfolio

Source code for [davidepassariello.github.io](https://davidepassariello.github.io/), a single-page portfolio featuring academic projects in Digital Humanities, Python, cybersecurity, machine learning, web development, and interactive 3D.

## Structure

- `index.html` — page content and project links
- `styles.css` — responsive design
- `script.js` — accessible project category filters and copyright year
- `assets/` — supporting images from my academic projects
- `.nojekyll` — publish static files as-is with GitHub Pages

## Editing and adding new projects

To add a project, duplicate a project card (`<article class="project-card">`) in `index.html`, update its content and links, and put any new screenshot in `assets/`. Set `data-categories` to one or more of `data`, `web`, `security`, `interactive` so the filter works. Update the number in the Projects section.

## Publication

In repository **Settings → Pages**, choose **Deploy from a branch**, `main`, `/(root)` and save. The site should be available at `https://davidepassariello.github.io/` after deployment.

No build step or external JavaScript libraries are required.

## Notes

This is a portfolio presentation. See individual repositories for attribution, research methodology, data availability and any third-party asset usage restrictions.
