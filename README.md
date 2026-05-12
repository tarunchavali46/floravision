# FloraVision — Plant Store

Frontend internship test submission for SoftDef.

**Live:** [add vercel url after deploying]

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Lucide React
- DM Sans + Playfair Display (Google Fonts)

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

```bash
npx vercel
# follow prompts, get live url
```

## Pages / Sections

1. **Navbar** — sticky on scroll, mobile hamburger
2. **Hero** — "Earth's Exhale", Buy Now + Explore buttons, floating plant card
3. **Our Trendy Plants** — 6-plant grid
4. **For Your Desks Decorations** — featured dark card, price + explore button
5. **Our Top Selling Plants** — 3-plant grid
6. **Customer Review** — 3 dark review cards
7. **Our Best O2** — plant left, description right, two CTA buttons
8. **Footer** — Quick Links, newsletter form, social icons

## Notes
- Cart count is hardcoded for now (static site, no backend)
- Newsletter console.logs the email — needs real endpoint before prod
- Filter tabs would need an API in a real implementation
