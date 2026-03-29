# Viral TikTok Scout

A dashboard that finds trending TikTok videos and lets you recreate them with AI video generation in one click.

**How it works:** Pulls trending TikToks across categories (AI, satisfying content, tech, etc.) using [Apify](https://apify.com) scrapers, displays them in a browsable dashboard with embedded previews, and sends you straight to [Pollo AI](https://pollo.ai) to recreate any video with a single click.

## Screenshot

![Dashboard Preview](screenshot.png)

## Features

- **Search any niche** — type "fitness", "cooking", "real estate" or click a preset niche button
- **Customizable niche buttons** — configure your own in Settings
- **Star/save videos** — persists to disk via `server.js` or localStorage as fallback
- **Filter and sort** by niche, play count, likes, shares, or recency
- **Embedded TikTok previews** — first 6 auto-load, rest lazy-load on scroll
- **"Remake in Pollo" button** — copies the TikTok URL to clipboard and opens [Pollo AI Agent](https://pollo.ai/app/ai-agent) so you can recreate the video with AI
- **No TikTok account needed** — browse trends without the app

## Quick Start

### Option A: Just open it (simplest)
1. Clone the repo
2. Open `dashboard.html` in your browser
3. Browse trending videos

### Option B: With persistent starred videos (recommended)
1. Clone the repo
2. Run `node server.js`
3. Open `http://localhost:3000`

Option B saves your starred videos to `stars.json` on disk, so they survive browser data clears. Zero dependencies — just Node.

Both options work with the full feature set: search, star, filter, sort, and "Remake in Pollo".

## Refreshing the Data

The dashboard ships with pre-scraped trending data. To pull fresh trends, you need an [Apify](https://apify.com) account and API token.

### Option A: Using Claude Code + Apify MCP (recommended)

1. Connect Apify to Claude Code:
   ```bash
   claude mcp add --transport http apify https://mcp.apify.com
   ```
2. Ask Claude Code:
   ```
   Search TikTok for trending videos across AI, satisfying content, and tech.
   Get URLs, view counts, likes, and descriptions. Save as videos_data.json.
   ```
3. Rebuild the dashboard with the new data

### Option B: Using Apify API directly

```bash
# Run the TikTok scraper
curl -X POST "https://api.apify.com/v2/acts/clockworks~tiktok-scraper/runs?token=YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchQueries": ["AI viral trending"], "resultsPerPage": 10}'

# Fetch results (replace DATASET_ID from response)
curl "https://api.apify.com/v2/datasets/DATASET_ID/items?token=YOUR_TOKEN&format=json"
```

## The Full Pipeline

This dashboard is one piece of a larger AI content pipeline:

1. **Find trends** — This dashboard (Claude Code + Apify)
2. **Recreate with AI** — [Pollo AI Agent](https://pollo.ai/app/ai-agent) analyzes the original video and generates a recreation using 50+ AI video models (Kling, Veo, Runway, etc.)

Want the full implementation guide for building this pipeline from scratch, including the Claude Code setup, Apify MCP integration, and Pollo workflow? Check out my [Skool community](https://www.skool.com/ai-luke).

## Tech Stack

- **Frontend:** Single HTML file, vanilla JS, no build step
- **Server:** `server.js` — zero-dependency Node.js server for persistent stars
- **Data:** [Apify](https://apify.com) TikTok scraper (free tier: ~30-50 searches/month)
- **Video Generation:** [Pollo AI](https://pollo.ai)
- **Video Embeds:** TikTok Player API

## License

MIT
