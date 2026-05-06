# shiftlab.works — AI Infrastructure Agency

**Modern landing page for shiftlab., an AI infrastructure studio built for speed.**

![GitHub Pages](https://img.shields.io/badge/Live-shiftlab.works-green?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-black?style=for-the-badge&logo=github)

---

## What is shiftlab.?

shiftlab. replaces slow, repetitive, expensive operations with AI infrastructure — in weeks, not months.

This repository contains the static landing page deployed at **[shiftlab.works](https://shiftlab.works)**.

---

## Features

| Feature | Description |
|---------|-------------|
| ⚡ **No Build Step** | Pure HTML/CSS/JS — deploy anywhere |
| 🎨 **Custom Design** | Hand-crafted CSS with dark/light logo support |
| 📱 **Responsive** | Works on all devices |
| 🚀 **GitHub Pages** | Automatic deployment on push to main |
| 🔗 **Cal.com Integration** | Booking flow connected to calendar |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | CSS3 (custom, no framework) |
| Fonts | Be Vietnam Pro, DM Serif Display, Space Mono |
| Hosting | GitHub Pages |
| Domain | Name.com (shiftlab.works) |

---

## Local Development

Since this is a static site, just open `index.html` in your browser:

```bash
# Open directly
open index.html

# Or use a simple server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## Deployment

Automatically deployed via GitHub Pages:

1. Push to `main` branch
2. GitHub Pages builds and deploys
3. Live at `https://shiftlab.works`

### DNS Configuration (Name.com)

```
A Records (root @):
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

CNAME (www):
  paulxg12.github.io
```

---

## Project Structure

```
shift-lab-landing/
├── index.html          # Main page
├── index.css           # All styles
├── logo-dark.png       # Dark mode logo
├── logo-light.png      # Light mode logo
├── hero-bg.png         # Hero section background
├── CNAME               # Custom domain
└── README.md           # This file
```

---

## Customization

### Colors
Edit the CSS variables in `index.css`:
```css
:root {
  --primary: #yourcolor;
  --bg: #yourbg;
}
```

### Content
Edit `index.html` directly — all content is in the HTML file.

---

## License

MIT License — feel free to use this as a template for your own agency site.

---

**Built by [Prince Raymond Paul](https://github.com/paulxg12)**
