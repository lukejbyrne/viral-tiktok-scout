# Viral TikTok Scout

## Video

[VIDEO EMBED PLACEHOLDER]

---

## What You'll Build

A trending TikTok dashboard that finds viral videos across any niche. Search for topics like "AI tools", "fitness", or "cooking" and instantly see what's blowing up — with embedded previews, play counts, likes, shares, and one-click star/save functionality. Powered by Apify for live TikTok data.

**Features:**
- Search any niche and pull trending TikToks via Apify
- Preview videos inline without leaving the dashboard
- Star and save your favorites for later
- Sort by plays, likes, shares, or most recent
- Customizable quick-search niche buttons
- Copy any video URL with one click

---

## Source Code

https://github.com/lukejbyrne/viral-tiktok-scout

---

## Step 1: Get It Running

Clone the repo or download the files:

```
git clone https://github.com/lukejbyrne/viral-tiktok-scout.git
```

Open `dashboard.html` in your browser. That's it — you'll see sample data loaded with 40 trending TikToks across niches like AI Viral, Satisfying, Tech Gadgets, and AI Generated. Browse through them, click to play inline, and try the sort options to get familiar with the interface.

---

## Step 2: Make It Yours

**Connect Apify for live search:**

1. Go to [apify.com](https://apify.com) and create a free account
2. Navigate to your account settings and copy your API token
3. In the dashboard, click **Settings**
4. Paste your API token and click **Save Token**
5. Type a niche in the search bar (e.g., "real estate") and click **Search TikTok**

The dashboard will call the Apify TikTok scraper, pull trending videos for your keyword, and display them with full engagement stats. The free Apify tier gives you enough credits to run many searches.

**Customize your niches:**

Click Settings and edit the "Quick Search Niches" field. Enter your niches comma-separated (e.g., `Fitness, Business, Cooking, Real Estate`). Click Save Niches. These appear as one-click search buttons in the filter bar.

---

## Step 3: Modify With Claude Code

Open the project in Claude Code and try these prompts:

- "Add an engagement rate that shows likes divided by plays as a percentage on each card"
- "Add a button that exports all starred videos as a CSV file"
- "Add email alerts when a video in my niche crosses 1 million plays"
- "Add a hashtag analysis section that shows the most common hashtags across results"
- "Add a date range filter so I only see TikToks from the last 7 days"

The entire dashboard is one HTML file, so Claude Code can read and modify it in a single pass.

---

## Step 4: Deploy

**Option A — Local only:** Just open `dashboard.html` in your browser. Stars save to localStorage.

**Option B — Persistent favorites:** Run `node server.js` and open `http://localhost:3000`. Your starred videos save to `stars.json` on disk so they survive browser data clears.

**Option C — Share it:** Deploy to any static host (Netlify, Vercel, GitHub Pages). It's one HTML file — drag and drop.

---

## Challenge

**Find the top 5 trending videos in YOUR niche. Star them. Post your findings in the community — what patterns do you see?**

Things to look for:
- What video length performs best?
- Are the top videos original content or trends/remixes?
- What hashtags keep showing up?
- Is there a gap between high-play and high-share videos?
- What could you recreate with your own spin?

Post your niche, your top 5, and at least one pattern you noticed.
