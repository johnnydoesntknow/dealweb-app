// User Types
export interface DealixUser {
  id: string;
  walletAddress: string;
  dealixId?: string;
  username?: string;
  tier: UserTier;
  tradingVolume: number;
  socialPoints: number;
  badgeCount: number;
  createdAt: string;
}

export type UserTier = 'Novice' | 'Trader' | 'Expert' | 'Master' | 'Whale' | 'Legend';

// Badge Types
export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: BadgeCategory;
  rarity: BadgeRarity;
  socialPoints: number;
  requirements: string;
  metadataUri: string; // IPFS URI
  chain?: string;
}

export type BadgeCategory = 'Trading Volume' | 'Activity' | 'Liquidity' | 'Community' | 'Special' | 'Locker';

export type BadgeRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';

// Battle Pass Types
export interface BattlePass {
  id: string;
  userId: string;
  level: number;
  xp: number;
  xpRequired: number;
  isPremium: boolean;
  season: string;
  rewards: BattlePassReward[];
}

export interface BattlePassReward {
  level: number;
  rewardType: 'badge' | 'token' | 'discount' | 'nft';
  rewardValue: string;
  claimed: boolean;
  isPremium: boolean;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  progress: number;
  required: number;
  completed: boolean;
  questType: 'trade' | 'volume' | 'referral' | 'streak';
}

// Marketplace Types
export interface MarketplaceListing {
  id: string;
  badgeId: string;
  badge: Badge;
  sellerId: string;
  price: number; // in DLX tokens
  chain: string;
  listedAt: string;
}

// Leaderboard Types
export interface LeaderboardEntry {
  rank: number;
  user: DealixUser;
  value: number; // volume, points, or level depending on leaderboard type
}

export type LeaderboardType = 'Trading Volume' | 'Social Points' | 'Battle Pass Level';

// Trade Types
export interface Trade {
  id: string;
  userId: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: number;
  amountOut: number;
  discountApplied: number;
  timestamp: string;
  txHash: string;
}

// Wallet Types
export interface WalletInfo {
  address: string;
  ethBalance: number;
  dlxBalance?: number;
  isConnected: boolean;
}