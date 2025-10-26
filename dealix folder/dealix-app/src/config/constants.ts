// Tier thresholds (in USD)
export const TIER_THRESHOLDS = {
  NOVICE: 0,
  TRADER: 100,
  EXPERT: 1000,
  MASTER: 10000,
  WHALE: 100000,
  LEGEND: 1000000,
} as const;

// Tier benefits (discount percentages)
export const TIER_BENEFITS = {
  NOVICE: 0,
  TRADER: 0.05,
  EXPERT: 0.10,
  MASTER: 0.15,
  WHALE: 0.20,
  LEGEND: 0.25,
} as const;

// App routes
export const ROUTES = {
  HOME: '/',
  APP: '/app',
  PROFILE: '/app/profile',
  BADGES: '/app/badges',
  MARKETPLACE: '/app/marketplace',
  LEADERBOARD: '/app/leaderboard',
  SWAP: '/app/swap',
  BATTLE_PASS: '/app/battle-pass',
  TRADES: '/app/trades',
  WALLET_CONNECT: '/connect',
} as const;

// IPFS Gateway
export const IPFS_GATEWAY = import.meta.env.VITE_IPFS_GATEWAY || 'https://ipfs.io/ipfs/';

// Trading fee (0.25% standard, 0.20% with Dealix ID)
export const TRADING_FEES = {
  STANDARD: 0.0025,
  WITH_ID: 0.002,
} as const;