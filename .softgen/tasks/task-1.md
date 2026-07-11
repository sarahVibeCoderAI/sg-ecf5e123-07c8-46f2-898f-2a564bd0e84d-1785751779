---
title: Design System + Landing Page
status: done
priority: urgent
type: feature
tags: [design-system, landing, hero]
created_by: agent
created_at: 2026-07-11T13:09:43Z
position: 1
---

## Notes
Set up the complete design system (colors, fonts, tokens) in globals.css and tailwind.config.ts, then build the landing page from hero through community teaser. Landing is the primary showcase of the brand's premium wellness identity.

Design system uses warm sand canvas, terracotta/copper accents, forest green wellness signals, Newsreader display serif + Lora body serif.

## Checklist
- [x] Import Newsreader (600, 700) and Lora (400, 600) fonts in globals.css
- [x] Define custom color tokens in globals.css (:root) — warm sand bg, charcoal text, terracotta primary, forest green secondary
- [x] Register fonts and custom colors in tailwind.config.ts
- [x] Create Navigation component: sticky header with logo text, nav links (Our Cafes, Meal Subscription, Shop Products, Blog, Careers, Contact), "Subscribe Now" CTA button
- [x] Create Footer component: brand statement, quick links, Bangalore addresses, social handles, newsletter capture
- [x] Build landing page in index.tsx:
  - Hero: Editorial image layout + value prop ("Premium Chain of High-End, Plant-Based Cafes...") + 2 CTAs (Explore Cafes outline, Start Subscription solid)
  - Philosophy section: 3-column grid for Move & Refuel / Meet & Connect / Hyper-Local Convenience pillars
  - Bestsellers retail grid: 4-column product carousel with granola, seed mixes, dips, salads + "Pick up In-Store" badges
  - Community events teaser: Split panel with cafe gathering image + cooking workshops/meetups text + View Events CTA

## Acceptance
- Landing page renders with warm sand background, terracotta accents on CTAs, Newsreader headlines, Lora body text
- Navigation sticky at top, footer at bottom with newsletter form
- All 4 landing sections (hero, philosophy, bestsellers, community) visible and styled with generous whitespace