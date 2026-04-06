# Viral TikTok Scout

A dashboard that finds trending TikTok videos in any niche. Search, preview inline, star your favorites, sort by engagement — all from a single HTML file.

![HTML](https://img.shields.io/badge/HTML-Single_File-E34F26?logo=html5&logoColor=white) ![Apify](https://img.shields.io/badge/Apify-Powered-00C896) ![Zero Deps](https://img.shields.io/badge/Dependencies-Zero-333)

## Features

- **Search any niche** — type "fitness", "cooking", "real estate" and pull live trending data
- **Embedded TikTok previews** — watch videos without leaving the dashboard
- **Star/save favorites** — persists to localStorage or disk via optional server
- **Sort by engagement** — plays, likes, shares, or most recent
- **Customizable niche buttons** — set your go-to niches in Settings
- **Copy URL** — one-click copy any video link
- **No TikTok account needed** — browse trends without the app

Part of the **Scout Trifecta**: [TikTok](https://github.com/lukejbyrne/viral-tiktok-scout) · [Instagram Reels](https://github.com/lukejbyrne/viral-reels-scout) · [YouTube Shorts](https://github.com/lukejbyrne/viral-shorts-scout)

## Quick Start

```bash
git clone https://github.com/lukejbyrne/viral-tiktok-scout.git
```

Open `dashboard.html` in your browser. Sample data loads with 40 trending TikToks immediately.

### Live Search

1. Sign up at [apify.com](https://apify.com) (free tier works)
2. Copy your API token from Settings → Integrations
3. In the dashboard, click **Settings** → paste token → **Save**
4. Search any niche

### Persistent Favorites (Optional)

```bash
node server.js
```

Open `http://localhost:3000`. Stars save to `stars.json` on disk.

## Modify With Claude Code

- `"Add engagement rate — likes divided by plays as a percentage"`
- `"Export starred videos as CSV"`
- `"Add email alerts when a video crosses 1M plays"`
- `"Add hashtag analysis"`
- `"Add date range filter"`

See [LESSON.md](LESSON.md) for the full guide.

## Deploy

Drag the folder to [app.netlify.com/drop](https://app.netlify.com/drop). Free, instant.

## Part of Build with Luke

This is one of 22 apps inside [Build with Luke](https://www.skool.com/luke). Clone it, customize it, ship it.
