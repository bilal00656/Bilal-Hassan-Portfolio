# Bilal Hassan — Developer Portfolio

A premium, fully responsive personal portfolio built with **only HTML, CSS, and vanilla JavaScript**.
No frameworks, no backend — ready to deploy to GitHub Pages in minutes.

> Theme: Cybersecurity + Neon Glow + Professional
> Fonts: Orbitron (headings) + Poppins (body)
> Palette: Cyan · Purple · Dark Navy

---

## ✨ Features

- Sticky glassmorphism navbar with active section highlight + mobile hamburger
- Animated typing hero, glowing profile ring, floating chips
- Custom glowing cursor + scroll progress bar + back-to-top
- Cyber grid background with animated gradient orbs
- About / Education timeline / Experience cards
- Animated skills grid + premium services cards
- Animated stats counters
- Filterable projects showcase
- Certificates with lightbox preview + download
- Glassmorphism contact form (opens email client)
- Smooth reveal animations on scroll
- Fully responsive, mobile-first
- Lightweight, fast, SEO-ready

---

## 📂 Project Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/         (profile picture)
    ├── certificates/   (certificate images)
    ├── projects/       (project thumbnails - add your own)
    ├── icons/          (custom icons - optional)
    └── resume/         (Bilal_Hassan_Resume.pdf)
```

---

## 🚀 Run Locally

Just open `index.html` in your browser. That's it.

For a nicer dev experience:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## 🌐 Deploy to GitHub Pages

1. Create a new repository on GitHub, e.g. `portfolio`.
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages**.
4. Under _Build and deployment_, choose **Deploy from a branch**.
5. Branch: `main`, folder: `/ (root)` → **Save**.
6. Wait ~1 minute. Your site will be live at:
   `https://<your-username>.github.io/portfolio/`

To use a custom domain, add a `CNAME` file containing your domain and configure DNS.

---

## 🛠 Customization

- **Profile picture** → replace `assets/images/profile.jpeg`
- **Resume** → replace `assets/resume/Bilal_Hassan_Resume.pdf`
- **Certificates** → replace files in `assets/certificates/` and update the `CERTS` array in `script.js`
- **Projects** → edit the `PROJECTS` array in `script.js`
- **Skills / Services** → edit `SKILLS` / `SERVICES` arrays in `script.js`
- **Colors / fonts** → tweak CSS variables at the top of `style.css`

---

## 📧 Contact

- Email: bilaltohassan2@gmail.com
- WhatsApp: +92 329 4509864
- LinkedIn: https://www.linkedin.com/in/bilal-hassan-1a4561331
- GitHub: https://github.com/bilal00656

---

Built with passion in Lahore. © Bilal Hassan
