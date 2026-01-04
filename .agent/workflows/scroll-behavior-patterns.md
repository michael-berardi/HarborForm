---
description: How to implement snap vs swipe scroll behavior patterns
---

# Scroll Behavior Patterns

Two scroll behavior categories for this site:

## 1. Snap Sections (Default)
Full viewport sections that snap into place on scroll.

**When to use:** Standard homepage sections, standalone content blocks

**CSS classes:**
```
md:h-[100dvh] md:snap-start
```

**Container requires:** `md:snap-y md:snap-mandatory`

---

## 2. Swipe Sections (Internal Carousel)
Container is ONE snap point, but content scrolls/swipes smoothly inside.

**When to use:** Multi-step processes, feature tours, comparison views

**Implementation pattern:**
1. Keep section as ONE `md:snap-start` container
2. Add internal horizontal scroll with `overflow-x-auto hide-scrollbar snap-x snap-mandatory`
3. Add progress indicators (step buttons or dots)
4. Add navigation arrows for accessibility
5. Track active item with `useState` and scroll listener

**Reference component:** `ProcessCarousel` in `src/app/page.tsx`

**Key CSS:**
```css
/* Hide scrollbar */
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Internal snap */
style={{ scrollSnapType: 'x mandatory' }}
```

---

## Mobile Behavior
Both patterns convert to standard vertical scroll on mobile (hide carousel, show stacked content).
