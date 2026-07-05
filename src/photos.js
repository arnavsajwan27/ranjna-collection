/**
 * ————————————————————————————————————————————————————————————
 * RANJNA COLLECTION — PHOTO DROPBOX
 * ————————————————————————————————————————————————————————————
 * This file is the single place photos are managed. 12 gallery
 * slots (2 per subcategory) plus the fixed placements below.
 *
 * TO ADD A PHOTO:
 *   1. Drop the image file into  public/images/
 *   2. Fill in `src` on an empty slot below (or add a new slot —
 *      the galleries grow automatically).
 *   3. Optionally adjust `position` (CSS object-position) to
 *      control the crop, e.g. '70% 30%' focuses upper-right.
 *
 * Slots with src: null render as elegant "awaiting photograph"
 * arch placeholders.
 */

// Fixed placements (hero, story, section intros)
export const placements = {
  hero: {
    src: import.meta.env.BASE_URL + 'images/rani-kundan-set.jpg',
    alt: 'Model in rani pink silk wearing a kundan choker set with ruby drops and chandelier earrings',
    position: '50% 27%',
  },
  story: {
    src: import.meta.env.BASE_URL + 'images/duo-golden.jpg',
    alt: 'Two models in golden saris wearing pearl choker, maang tikka and jhumka earrings against palace stone columns',
    position: '50% 30%',
  },
  traditionalIntro: {
    src: import.meta.env.BASE_URL + 'images/hero-maroon-sari.jpg',
    alt: 'Model in a deep maroon silk sari with gold butis, wearing an antique gold jhumka earring with pearls',
    position: '50% 22%',
  },
  americanDiamondIntro: {
    src: import.meta.env.BASE_URL + 'images/blush-chikankari.jpg',
    alt: 'Model in a blush chikankari kurta wearing long gold drop earrings with a red stone accent',
    position: '55% 24%',
  },
}

// Gallery slots — 12 total, at least 10 always available
export const gallery = [
  // ————— TRADITIONAL · EARRINGS —————
  {
    id: 'trad-earrings-1',
    section: 'traditional',
    category: 'Earrings',
    src: import.meta.env.BASE_URL + 'images/hero-maroon-sari.jpg',
    position: '62% 30%',
    caption: 'Antique jhumka with pearl drops',
  },
  {
    id: 'trad-earrings-2',
    section: 'traditional',
    category: 'Earrings',
    src: null,
    caption: null,
  },

  // ————— TRADITIONAL · BANGLES —————
  {
    id: 'trad-bangles-1',
    section: 'traditional',
    category: 'Bangles',
    src: import.meta.env.BASE_URL + 'images/bangles-glass.jpg',
    position: '50% 42%',
    caption: 'Glass bangles with gold ghungroo charms',
  },
  {
    id: 'trad-bangles-2',
    section: 'traditional',
    category: 'Bangles',
    src: null,
    caption: null,
  },

  // ————— TRADITIONAL · SETS —————
  {
    id: 'trad-sets-1',
    section: 'traditional',
    category: 'Sets',
    src: import.meta.env.BASE_URL + 'images/rani-kundan-set.jpg',
    position: '50% 42%',
    caption: 'Kundan choker set with ruby drops',
  },
  {
    id: 'trad-sets-2',
    section: 'traditional',
    category: 'Sets',
    src: null,
    caption: null,
  },

  // ————— AMERICAN DIAMOND · EARRINGS —————
  {
    id: 'ad-earrings-1',
    section: 'american-diamond',
    category: 'Earrings',
    src: import.meta.env.BASE_URL + 'images/blush-chikankari.jpg',
    position: '58% 34%',
    caption: 'Long drop earrings, crimson accent',
  },
  {
    id: 'ad-earrings-2',
    section: 'american-diamond',
    category: 'Earrings',
    src: null,
    caption: null,
  },

  // ————— AMERICAN DIAMOND · BRACELETS —————
  {
    id: 'ad-bracelets-1',
    section: 'american-diamond',
    category: 'Bracelets',
    src: null,
    caption: null,
  },
  {
    id: 'ad-bracelets-2',
    section: 'american-diamond',
    category: 'Bracelets',
    src: null,
    caption: null,
  },

  // ————— AMERICAN DIAMOND · SETS —————
  {
    id: 'ad-sets-1',
    section: 'american-diamond',
    category: 'Sets',
    src: null,
    caption: null,
  },
  {
    id: 'ad-sets-2',
    section: 'american-diamond',
    category: 'Sets',
    src: null,
    caption: null,
  },
]

export const categoriesFor = (section) =>
  section === 'traditional' ? ['Earrings', 'Bangles', 'Sets'] : ['Earrings', 'Bracelets', 'Sets']
