# Viral TikTok Scout — YouTube Video Script

**Target length:** 5-8 minutes
**Tone:** Casual, direct, builder-friendly

---

## Hook (0:00 - 0:30)

[SCREEN: Dashboard loading with 40 viral TikToks populating the grid — plays, likes, shares all visible]

"I built a dashboard that finds every viral TikTok in any niche. No scrolling through TikTok for hours. No guessing what's trending. You type your niche, hit search, and see exactly what's blowing up — with play counts, likes, shares, everything."

[SCREEN: Scroll slowly through the grid showing 84M plays, 36M plays, 11M plays on the cards]

"One HTML file. Free to run. Let me show you how it works."

---

## Presentation — What It Does (0:30 - 1:00)

[SLIDE 1: "Find Every Viral TikTok in Any Niche"]

"This is the Viral TikTok Scout. You give it a niche, it gives you every trending video in that space — sorted by plays, likes, or shares."

[SLIDE 2: What you get — search, preview, star, sort]

"You get real-time search powered by Apify, inline video previews so you never leave the dashboard, a star system for saving the ones you want to study, and sorting so you can find the outliers fast."

---

## Presentation — How Apify Works (1:00 - 1:30)

[SLIDE 3: How it works — Apify, Dashboard, You decide]

"Here's the flow. Apify scrapes TikTok for your keyword. The dashboard displays everything with engagement stats. You decide what to study, recreate, or save."

[SLIDE 4: One HTML file. Zero dependencies.]

"And the whole thing is one HTML file. No framework. No build step. No backend required. Open it in your browser and you're live."

---

## Presentation — The Trifecta (1:30 - 2:00)

[SLIDE 5: The Trifecta — TikTok + Reels + Shorts]

"This is actually one of three scouts I've built. TikTok, Instagram Reels, and YouTube Shorts. Same concept for each — one HTML file, same simplicity, every platform covered."

---

## Screen Share — Demo (2:00 - 4:00)

[SCREEN: Dashboard home view with sample data loaded]

"When you first open it, you get sample data so you can see how everything works before connecting your API key."

[SCREEN: Click on a video card — TikTok player loads inline]

"Every video plays right here in the dashboard. No switching tabs. No leaving the page."

[SCREEN: Type "fitness" in the search bar and hit Search TikTok]

"Let's search a niche. I'll type 'fitness' and hit search."

[SCREEN: Loading state, then results populating]

"Apify goes and scrapes TikTok for that keyword. Comes back with the top trending videos, sorted by plays by default."

[SCREEN: Click the sort dropdown — switch to Most Shared, then Most Liked]

"You can sort by plays, likes, shares, or most recent. Shares is interesting because that tells you what people actually want to send to their friends. That's real virality."

[SCREEN: Click the star button on 3-4 videos]

"See something you want to recreate? Star it. These save to your favorites."

[SCREEN: Click the Starred filter button]

"Click Starred and you've got your own curated list of videos to study or recreate."

[SCREEN: Click a niche button from the filter row]

"These niche buttons are quick shortcuts. Click one and it searches TikTok for that niche instantly. You can customize these in settings."

---

## Screen Share — Setup (4:00 - 5:00)

[SCREEN: Browser with apify.com open]

"Step one. Go to apify.com and create a free account. The free tier gives you enough credits to run plenty of searches."

[SCREEN: Apify dashboard — navigate to API tokens]

"Grab your API token from the settings page."

[SCREEN: Back to the TikTok Scout dashboard — click Settings]

"Step two. Open the dashboard. Click Settings. Paste your API token. Hit Save."

[SCREEN: Type a niche and search]

"Step three. Search your niche. That's it. You're live."

---

## Screen Share — Claude Code Modify (5:00 - 6:00)

[SCREEN: Terminal with Claude Code open, dashboard.html loaded]

"Because this is one file, it's perfect for modifying with Claude Code."

[SCREEN: Type a prompt like "Add an engagement rate column that calculates likes divided by plays as a percentage"]

"I'll ask Claude Code to add engagement rate calculation — likes divided by plays. That tells you which videos are converting viewers into engagement, not just getting pushed by the algorithm."

[SCREEN: Show the change being made, then refresh the dashboard to see engagement rates on each card]

"Done. Now every card shows the engagement rate. You can see that a video with 2 million plays and a 5% engagement rate is outperforming one with 10 million plays and 0.5%."

"Some other things you could add: email alerts, CSV export, hashtag analysis. Whatever your workflow needs."

---

## CTA (6:00 - 6:30)

[SLIDE 6: CTA — Build with Luke]

"This is the Viral TikTok Scout. I've also built the same thing for Instagram Reels and YouTube Shorts. Same concept, same simplicity — one HTML file each. All three are inside Build with Luke."

[SCREEN: Community page or link]

"If you build this, post what you find in the community. I want to see what niches you're tracking and what patterns show up. Link's in the description."

"See you in the next one."

---

## Production Notes

- Keep screen recordings smooth — use a clean browser with no bookmarks bar
- When showing the dashboard, let it breathe. Don't rush past the grid loading.
- For the Claude Code section, speed up the actual code generation (2x) but show the result at normal speed
- Presentation slides run between hook and demo — keeps pacing tight
- Background music: low-key lo-fi, drop it during the demo sections
- Thumbnail idea: Screenshot of the dashboard grid with a big play count (84.5M) circled, text overlay "Find Viral TikToks"
