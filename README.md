# Abracadabra Password Generator

A quick and easy mock password generator built during the Scrimba learning journey. It runs entirely in the browser and is packaged as a small Chrome extension.

> **Important:** This is a learning and testing project. Do not use generated passwords for real accounts. For production credentials, use a trusted password manager.

## Features

- Generate two passwords at once
- Choose a length from 8 to 32 characters
- Include or exclude numbers and symbols
- Copy either password with one click
- Use browser cryptographic randomness
- No server, tracking, or external dependencies

## Start From Scratch

1. Install Google Chrome or Chromium.
2. Clone this repository:

   ```bash
   git clone https://github.com/DRMCGT/Abracadabra.git
   cd Abracadabra
   ```

3. Open `chrome://extensions` in Chrome.
4. Turn on **Developer mode**.
5. Select **Load unpacked** and choose the project folder.
6. Pin the extension, open it from the toolbar, and select **Generate passwords**.

No `npm install` step is required because this extension uses plain HTML, CSS, and JavaScript.

## GitHub Setup

For a new copy of the project, use:

```bash
git init
git add .
git commit -m "Build Abracadabra password generator extension"
git branch -M main
git remote add origin https://github.com/DRMCGT/Abracadabra.git
git push -u origin main
```

Do not commit passwords, tokens, or other secrets.

## Development

Edit `index.html`, `index.js`, or `style.css`, then return to `chrome://extensions` and press **Reload** on the extension card. Chrome will show manifest or JavaScript errors on that page if something needs attention.

## Open Source Direction

This project is intended to grow from a Scrimba exercise into a welcoming public learning project. Suggested next contributions are automated tests for password rules, stronger accessibility checks, optional passphrase generation, and a contribution guide. Add a license file before accepting external contributions.

## Credits

Created as part of a Scrimba learning project. Brand artwork is stored in `assets/`.