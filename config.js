// ============================================================
// SROS — Smart Restaurant Operating System
// config.js — Edit this file per client before deployment
// ============================================================

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

const SROS_CONFIG = {
  restaurantName: "The Lagos Kitchen",
  tagline:        "Authentic Nigerian Cuisine",
  currency:       "NGN",
  symbol:         "₦",
  tables:         15,
  adminPassword:  "admin123",   // ⚠️ Change before going live

  // ── Fallback menu (used when Firebase is not yet connected) ──
  sampleMenu: [
    {
      id: "m1", name: "Jollof Rice", category: "Meals", price: 3500,
      description: "Classic smoky jollof with assorted protein",
      emoji: "🍛", available: true
    },
    {
      id: "m2", name: "Egusi Soup + Swallow", category: "Meals", price: 4000,
      description: "Rich melon seed soup with stockfish and assorted meat",
      emoji: "🥘", available: true
    },
    {
      id: "m3", name: "Fried Rice", category: "Meals", price: 3500,
      description: "Nigerian-style fried rice with vegetables and proteins",
      emoji: "🍚", available: true
    },
    {
      id: "m4", name: "Pounded Yam", category: "Meals", price: 1500,
      description: "Smooth pounded yam, served with any soup",
      emoji: "⚪", available: true
    },
    {
      id: "m5", name: "Catfish Pepper Soup", category: "Specials", price: 2800,
      description: "Spicy catfish pepper soup — house special",
      emoji: "🐟", available: true
    },
    {
      id: "m6", name: "Suya Platter", category: "Specials", price: 3200,
      description: "Grilled spiced beef with onions and fresh tomatoes",
      emoji: "🍢", available: true
    },
    {
      id: "m7", name: "Grilled Chicken", category: "Specials", price: 4500,
      description: "Half chicken, marinated and grilled to perfection",
      emoji: "🍗", available: true
    },
    {
      id: "m8", name: "Chapman", category: "Drinks", price: 1200,
      description: "Classic Nigerian cocktail — non-alcoholic",
      emoji: "🥤", available: true
    },
    {
      id: "m9", name: "Fresh Zobo", category: "Drinks", price: 800,
      description: "House-made hibiscus drink, lightly sweetened",
      emoji: "🍹", available: true
    },
    {
      id: "m10", name: "Malt / Soft Drink", category: "Drinks", price: 600,
      description: "Maltina, Amstel Malt, or choice of soft drink",
      emoji: "🥛", available: true
    },
    {
      id: "m11", name: "Bottled Water", category: "Drinks", price: 300,
      description: "Eva or Ragolis — 75cl",
      emoji: "💧", available: true
    }
  ]
};
