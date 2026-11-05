# Chakshu Chopra · Personal Website

A one-page personal site in plain HTML, CSS and a little vanilla JavaScript. There's no build step.

| File | What it is |
| --- | --- |
| `index.html` | All the content. Each section and each project is a clearly commented block. |
| `style.css` | Styling. Colours are at the top under `:root`. |
| `script.js` | The rotating "I ..." phrases in the hero, fade-in on scroll, and the nav border. |
| `assets/` | Favicon, link-preview image (`og-image.png`), your CV and photos. |

## Editing

- **Text:** change the words in `index.html`.
- **Hero phrases:** edit the `phrases` list at the top of `script.js`.
- **Add a project:** copy a whole `<article class="card project"> ... </article>` block in the Projects section and edit it.
- **Find what's left to do:** search `index.html` for `TODO`.

### Adding photos

1. Convert the photo to WebP and resize it to about 1200px wide. https://squoosh.app does both for free.
2. Put it in `assets/img/`, e.g. `assets/img/novac.webp`.
3. In `index.html`, find the grey placeholder `<div class="frame" ...>` for that project. The comment just above it has the `<img>` line to use. Replace the div with that line and write a short `alt` description of the photo.

The headshot works the same way (`assets/img/headshot.webp`, portrait, about 600×750).

### Your CV

Save the PDF you want public as `assets/cv.pdf`. **Remove your phone number and home address first.** This repo and the site are public.

## Keeping private things out of this repo

Anyone can read this repo, so `.gitignore` blocks `source/`, `.docx` files and any PDF except `assets/cv.pdf`. Keep CV drafts and personal documents outside this folder, or in `source/`.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. You can also double-click `index.html`, but a local server is closer to the real thing.

## Deploy to GitHub Pages

The site is set up for **https://chakshu-c.github.io/Personal-Website/**.

1. Merge this branch into `main`.
2. On GitHub, go to **Settings → Pages**, set **Source: Deploy from a branch**, choose **main** and **/ (root)**, then save.
3. After a minute or two the site is live at the address above.

Free GitHub Pages needs a **public** repo. That's fine, because nothing private is stored here.

For a shorter address (`https://chakshu-c.github.io/`), rename the repo to `chakshu-c.github.io`, then update the three URLs marked `SITE URL` near the top of `index.html`.

### Netlify instead

Go to https://app.netlify.com/drop and drag this whole folder onto the page. Then update the `SITE URL` lines in `index.html` to your Netlify address.

## Custom domain later

1. Buy a domain (e.g. from Cloudflare, Namecheap or Porkbun).
2. On GitHub, open **Settings → Pages → Custom domain**, type it in (e.g. `chakshuchopra.com`) and save. This adds a `CNAME` file to the repo.
3. At your domain provider, add DNS records:
   - For `www`: a `CNAME` record pointing to `chakshu-c.github.io`.
   - For the bare domain: `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`.
4. Once GitHub shows the domain as verified, tick **Enforce HTTPS**.
5. Update the `SITE URL` lines in `index.html` to the new domain.

## Checking link previews

After deploying, paste your URL into https://www.linkedin.com/post-inspector/ to refresh LinkedIn's cached preview. WhatsApp picks up the new image after a while.
