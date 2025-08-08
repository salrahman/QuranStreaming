# Quran Audio Player — Accessible Dark Theme (v4)

This release fixes the reciter selection and preserves previous accessibility improvements.

## Features
- Dark accessible UI (high contrast, big focus outlines)
- Bilingual surah list (English + Arabic)
- `role="button"` and `aria-pressed` on surah items
- Reciter selection with persistence and fallback
- Resume last played surah and timestamp (localStorage)
- ARIA live announcements for playback, errors, and reciter changes
- Next / Previous buttons and keyboard shortcuts (n, p, m)

## Deploy to GitHub Pages
1. Upload `index.html`, `styles.css`, `app.js`, and `README.md` to your repo root.
2. In GitHub, go to **Settings → Pages** and set source to `Deploy from a branch` → `main` → `/ (root)`
3. Save; your site should be live at `https://<username>.github.io/<repo>/` shortly.

## Notes
- If a reciter's files are moved or removed from the remote server, the player will try a fallback reciter automatically.
- Some servers may restrict cross-origin audio requests (CORS). If you encounter persistent errors, try a different reciter or host files yourself.
