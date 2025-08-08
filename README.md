# Quran Audio Player — Accessible Dark Theme

An accessible, keyboard-friendly, screen-reader-compatible Quran audio player.

## Features
- **Dark theme** for low-vision users
- **ARIA live announcements** for playback events
- **Keyboard shortcuts**:
  - `n` — Next surah
  - `p` — Previous surah
  - `m` — Mute/unmute
  - Space/Enter on surah — Play selected surah
- **Next/Prev buttons**
- **Playback resume** — Remembers last played surah and timestamp
- **Screen reader friendly** — Proper roles, labels, focus handling

## Deployment on GitHub Pages
1. Push `index.html`, `styles.css`, `app.js` to your repo root.
2. Go to **Settings → Pages**.
3. Set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default)
   - **Folder**: `/ (root)`
4. Save — your site will be live at:
   `https://<username>.github.io/<repo-name>/`

## Keyboard Shortcuts
- `n` — Next surah
- `p` — Previous surah
- `m` — Mute/unmute
- Use Enter or Space when a surah is focused to play it.

## Credits
- Audio source: mp3quran.net
