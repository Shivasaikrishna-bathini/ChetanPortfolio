# Design Guidelines for Chetan Chhetri's Developer Portfolio

## Design Approach & Philosophy

**Selected Approach:** Reference-Based with Modern Tech Aesthetic  
**Primary Influences:** Linear's clean typography + Vercel's minimalist layouts + GitHub's developer-centric UI + Stripe's professional polish

**Core Principles:**
- **Technical Sophistication:** Design reflects AI/ML expertise through precise, data-driven visual language
- **Progressive Disclosure:** Complex project details revealed through intentional interaction patterns
- **Code-First Aesthetics:** Monospace accents, syntax-inspired color choices, terminal-like elements
- **Professional Credibility:** Clean, authoritative design that appeals to recruiters and technical audiences

---

## Color System

### Dark Mode (Primary)
**Background Layers:**
- Base: 220 15% 8%
- Surface: 220 15% 12%
- Elevated: 220 15% 16%

**Brand & Accent:**
- Primary (Tech Blue): 210 100% 60%
- Primary Hover: 210 100% 65%
- Accent (AI Purple): 270 70% 65%
- Success (Code Green): 142 70% 50%

**Text Hierarchy:**
- Primary: 220 10% 98%
- Secondary: 220 10% 75%
- Tertiary: 220 10% 55%

### Light Mode (Secondary)
**Background Layers:**
- Base: 220 20% 98%
- Surface: 0 0% 100%
- Elevated: 220 15% 96%

**Adapted Colors:**
- Primary: 210 100% 45%
- Text Primary: 220 20% 10%
- Text Secondary: 220 15% 35%

---

## Typography System

**Font Stack:**
- **Headings:** 'Inter', system-ui, sans-serif (weights: 600, 700, 800)
- **Body:** 'Inter', system-ui, sans-serif (weights: 400, 500)
- **Code/Technical:** 'JetBrains Mono', 'Fira Code', monospace (weight: 400, 500)

**Scale (Desktop):**
- Hero Title: text-6xl (60px) font-bold tracking-tight
- Section Headers: text-4xl (36px) font-bold
- Project Titles: text-2xl (24px) font-semibold
- Body Large: text-lg (18px) font-normal
- Body: text-base (16px) font-normal
- Caption/Meta: text-sm (14px) font-medium
- Code Snippets: text-sm (14px) font-mono

**Mobile Adjustments:** Scale down by 1-2 sizes (Hero: text-4xl, Sections: text-3xl)

---

## Layout Architecture

**Spacing Primitives:** Consistent use of Tailwind units **2, 4, 6, 8, 12, 16, 20, 24, 32**

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-6 lg:px-8
- Content grids: max-w-6xl for balanced reading
- Code blocks: max-w-full with horizontal scroll if needed

**Section Rhythm:**
- Hero: min-h-screen with flex centering
- Content sections: py-20 lg:py-32 (generous vertical breathing room)
- Component spacing: gap-8 to gap-16 within sections

**Grid Systems:**
- Project Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Case Studies: Two-column split (60/40) for text/media on desktop
- Tech Stack: grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 for badges
- GitHub Stats: grid-cols-1 lg:grid-cols-2 for repos and contribution graph

---

## Component Library

### Navigation
**Desktop:** Fixed top nav with backdrop-blur-xl bg-background/80, height h-16, contains logo, main links, CTA button, theme toggle  
**Mobile:** Slide-out drawer with smooth transform transition

### Hero Section
**Layout:** Full viewport height (min-h-screen) split design:
- Left 50%: Large heading with gradient text effect (bg-gradient-to-r from-primary to-accent), subheading, dual CTAs (primary filled + secondary outline with backdrop-blur)
- Right 50%: Animated code window mockup showing AI/ML code snippet with syntax highlighting
**Background:** Subtle grid pattern overlay with radial gradient spotlight effect

### Project Cards
**Visual Treatment:** 
- Glass morphism effect: backdrop-blur-md bg-surface/50 border border-white/10
- Hover state: transform scale-105 with smooth shadow expansion
- Card content: Project thumbnail (aspect-video), category badge (pill shape with accent color), title, tech stack icons (max 5), brief description
- Footer: "View Case Study" link with arrow icon

### Filter System
**Design:** Horizontal pill buttons with active state (bg-primary text-white) vs inactive (border border-primary/30 text-secondary)  
**Categories:** All, AI/ML, Computer Vision, Web Dev, VLSI

### Case Study Layout
**Structure:**
1. Hero banner with project title + large feature image
2. Overview cards (3-column grid): Problem, Approach, Results
3. Process timeline with connected nodes (Discovery → Sketches → Implementation → Results)
4. Architecture diagram section with full-width technical diagram
5. Tech stack detailed breakdown with icon grid
6. Embedded prototypes (Figma iframe in 16:9 aspect ratio container)
7. Live demo section with code editor mockup and "Open Demo" CTA

### Code Demo Blocks
**Visual:** Dark terminal aesthetic with title bar (colored dots), syntax highlighted code, copy button (top-right), language badge (top-left)  
**Variants:** Inline snippets and full-width showcase blocks

### GitHub Integration Section
**Layout:** Two-part dashboard
- **Left:** Pinned repos as cards (repo name, description, star count, language badge, "View on GitHub" link)
- **Right:** Contribution graph heatmap with color scale from surface to primary
- **Bottom:** Recent commits feed with commit message, timestamp, files changed badge

### Tech Stack Badges
**Design:** Rounded-full px-4 py-2 bg-surface border border-primary/20 with technology icon + label  
**Arrangement:** Flex wrap with gap-3, grouped by category (Languages, Frameworks, Cloud, AI/ML)

### Style Guide Page Components
**Layout:** Sidebar navigation (fixed left 1/4) + content area (right 3/4)  
**Sections:**
1. Color swatches with HSL values and copy functionality
2. Typography scale with live examples
3. Component showcase (buttons, cards, inputs in all states)
4. Spacing tokens visualizer with colored blocks
5. Code syntax theme preview

### Footer
**Design:** Multi-column layout (4 columns desktop, stack mobile)
- Column 1: Brief bio + social links (GitHub, LinkedIn, Email)
- Column 2: Quick navigation links
- Column 3: Recent blog posts or project updates
- Column 4: Newsletter signup form (if applicable) or contact CTA
**Styling:** bg-surface border-t border-white/10 py-16

---

## Interactive Elements & Animations

**Micro-interactions:**
- Button hovers: subtle scale and shadow changes (no custom hover states for outline buttons on images - they auto-adjust)
- Card hovers: lift effect with glow border
- Link underlines: animated width expansion from center
- Page transitions: subtle fade-in for sections on scroll (intersection observer)

**Loading States:**
- Skeleton screens for GitHub data fetching (pulsing bg-surface/50)
- Shimmer effect for image loading

**Scroll Behaviors:**
- Parallax effect on hero background (subtle depth)
- Fade-in + slide-up for section reveals (stagger children by 100ms)
- Sticky section headers during scroll

**Animation Budget:** MINIMAL - focus on purposeful transitions, avoid gratuitous motion

---

## Images Strategy

### Hero Section
**Primary Hero Image:** YES - Use a high-quality abstract visualization representing AI/neural networks OR a professional photo of Chetan with tech-themed background  
**Placement:** Right side of split hero (50% width)  
**Treatment:** Subtle blur edges, overlay with grid pattern

### Project Thumbnails
**Gallery Cards:** Each project needs a representative image (screenshots of UI, architecture diagrams, or visual outputs from AI models)  
**Dimensions:** 16:9 aspect ratio, optimized for web

### Case Study Images
**Architecture Diagrams:** Custom-designed system architecture flowcharts showing data flow for each project  
**Process Screenshots:** Figma wireframes, code snippets, model training graphs  
**Results Visualization:** Output examples from Motion Detector, Legal RAG responses, Pill Detection results

### Background Imagery
**Subtle Patterns:** Dot grid or circuit board texture overlays at 5% opacity on dark sections  
**NO stock photos** except for hero - focus on authentic project visuals and diagrams

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (stack everything, full-width cards, bottom nav)
- Tablet: 768px - 1024px (2-column grids, compressed spacing)
- Desktop: > 1024px (full multi-column layouts, expanded spacing)

**Mobile-Specific:**
- Hero: Stack vertically, image above text, reduce hero height to 85vh
- Project gallery: Single column cards
- Case study: Single column with full-width images
- GitHub section: Stack repos and contribution graph
- Footer: Single column stack

---

## Accessibility & Dark Mode

**Contrast:** All text maintains WCAG AA standards (4.5:1 minimum)  
**Focus States:** Visible 2px outline with primary color offset by 2px  
**Dark Mode Implementation:** Consistent across ALL components including form inputs, text fields, modals  
**Keyboard Navigation:** Tab order follows visual hierarchy, skip links for main content

---

**Final Note:** This design balances technical sophistication with visual appeal, creating a portfolio that showcases Chetan's AI/ML expertise while maintaining professional credibility for recruitment purposes. Every visual decision reinforces the narrative of a skilled, detail-oriented developer ready for senior engineering roles.