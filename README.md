# debugmode.dev

Personal tech blog by mrthundergod. Built with Astro + Tailwind CSS.

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding a new post

Create a `.md` file in `src/content/blog/`:

### Debug post (broke → tried → fixed)

```md
---
title: "Your post title here"
date: "2025-06-01"
tag: linux
type: debug
broke: "One line describing what broke"
tried: "What you tried to fix it"
fixed: "What actually worked"
readTime: "5 min read"
---

Your post content in markdown...
```

### Build log (free-form diary)

```md
---
title: "Your build log title"
date: "2025-06-01"
tag: hardware
type: buildlog
description: "Short one-liner about the project"
readTime: "8 min read"
---

Your build log content in markdown...
```

### Available tags
`linux` · `gaming` · `retro` · `hardware` · `software` · `random`

## Updating the YouTube video

Open `src/pages/index.astro` and change the `YOUTUBE_VIDEO_ID` variable at the top:

```js
const YOUTUBE_VIDEO_ID = 'YOUR_VIDEO_ID_HERE';
```

The video ID is the part after `?v=` in a YouTube URL.

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Astro — no config needed
4. Hit Deploy

Every `git push` to main auto-deploys. Takes ~30 seconds.

## Connecting your domain

In Vercel: Project → Settings → Domains → Add `debugmode.dev`
Then update your domain's DNS to point to Vercel's nameservers.
# debug
# debug
