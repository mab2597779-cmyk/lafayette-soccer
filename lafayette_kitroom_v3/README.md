# Lafayette Varsity Soccer — Kit Room Redesign

A mobile-friendly static website concept for Lafayette International High School Varsity Soccer. It is a design showcase, not an online store or an official school site.

## Files
- `index.html` — homepage and sections
- `style.css` — responsive visual design
- `script.js` — working jersey customizer (kit, name, number, front/back, number buttons, save SVG preview)
- `assets/` — school logo and provided kit/team photos

## Publish on GitHub Pages
1. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's root (same level as the `assets` folder).
2. Upload all five image files into the root `assets` folder. Keep the exact filenames and capitalization.
3. In GitHub repository Settings → Pages, select **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
4. Wait for the Pages deployment to finish, then open the published website and hard-refresh it.

## Notes
- All image references are relative paths such as `assets/school-logo.gif`, so this works from a GitHub Pages project URL.
- The jersey preview is a scalable vector mockup, not a photorealistic 3D garment model. Dragging gives a light perspective effect; FRONT/BACK switches the artwork.
- The name and squad number update live and are downloadable as an SVG preview.
- External Google Fonts are optional; system fonts are used as fallbacks.
