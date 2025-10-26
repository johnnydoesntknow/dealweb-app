import type { 
  DealixUser, 
  Badge, 
  BattlePass, 
  Quest, 
  MarketplaceListing, 
  LeaderboardEntry,
  Trade 
} from '../types';

// Mock Current User
export const mockUser: DealixUser = {
  id: '1',
  walletAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  dealixId: 'DEALIX#0001',
  username: 'CryptoTrader',
  tier: 'Expert',
  tradingVolume: 5420.50,
  socialPoints: 1250,
  badgeCount: 8,
  createdAt: '2024-01-15T10:30:00Z',
};

// Mock Badges
export const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'Early Adopter',
    description: 'One of the first 1000 users on Dealix',
    imageUrl: 'https://via.placeholder.com/150/24E055/FFFFFF?text=Early',
    category: 'Special',
    rarity: 'Legendary',
    socialPoints: 500,
    requirements: 'Be among the first 1000 users',
    metadataUri: 'ipfs://QmExample1',
  },
  {
    id: '2',
    name: 'Whale Trader',
    description: 'Completed trades worth over $100,000',
    imageUrl: 'https://via.placeholder.com/150/66FF75/FFFFFF?text=Whale',
    category: 'Trading Volume',
    rarity: 'Epic',
    socialPoints: 300,
    requirements: 'Trade volume > $100,000',
    metadataUri: 'ipfs://QmExample2',
  },
  {
    id: '3',
    name: 'Daily Streak',
    description: 'Traded for 7 consecutive days',
    imageUrl: 'https://via.placeholder.com/150/222CFAF/FFFFFF?text=Streak',
    category: 'Activity',
    rarity: 'Rare',
    socialPoints: 150,
    requirements: 'Trade 7 days in a row',
    metadataUri: 'ipfs://QmExample3',
  },
  {
    id: '4',
    name: 'Liquidity Provider',
    description: 'Provided liquidity to 3+ pools',
    imageUrl: 'https://via.placeholder.com/150/38FF11/FFFFFF?text=LP',
    category: 'Liquidity',
    rarity: 'Rare',
    socialPoints: 200,
    requirements: 'Provide liquidity to 3 pools',
    metadataUri: 'ipfs://QmExample4',
  },
  {
    id: '5',
    name: 'Referral Master',
    description: 'Referred 10+ friends to Dealix',
    imageUrl: 'https://via.placeholder.com/150/00688A/FFFFFF?text=Refer',
    category: 'Community',
    rarity: 'Epic',
    socialPoints: 250,
    requirements: 'Refer 10 friends',
    metadataUri: 'ipfs://QmExample5',
  },
  {
    id: '6',
    name: 'Locker Pioneer',
    description: 'First to use the Liquidity Locker',
    imageUrl: 'https://via.placeholder.com/150/24E055/FFFFFF?text=Lock',
    category: 'Locker',
    rarity: 'Legendary',
    socialPoints: 400,
    requirements: 'Use Liquidity Locker feature',
    metadataUri: 'ipfs://QmExample6',
  },
];

// Mock Battle Pass
export const mockBattlePass: BattlePass = {
  id: '1',
  userId: '1',
  level: 12,
  xp: 2400,
  xpRequired: 3000,
  isPremium: true,
  season: 'Season 1',
  rewards: [
    {
      level: 1,
      rewardType: 'badge',
      rewardValue: 'Novice Badge',
      claimed: true,
      isPremium: false,
    },
    {
      level: 5,
      rewardType: 'token',
      rewardValue: '100 DLX',
      claimed: true,
      isPremium: false,
    },
    {
      level: 10,
      rewardType: 'discount',
      rewardValue: '5% Discount Coupon',
      claimed: true,
      isPremium: true,
    },
    {
      level: 15,
      rewardType: 'nft',
      rewardValue: 'Exclusive NFT',
      claimed: false,
      isPremium: true,
    },
  ],
};

// Mock Quests
export const mockQuests: Quest[] = [
  {
    id: '1',
    title: 'Make Your First Trade',
    description: 'Execute your first swap on Dealix',
    xpReward: 100,
    progress: 1,
    required: 1,
    completed: true,
    questType: 'trade',
  },
  {
    id: '2',
    title: 'Volume Champion',
    description: 'Trade $10,000 worth of tokens',
    xpReward: 500,
    progress: 5420,
    required: 10000,
    completed: false,
    questType: 'volume',
  },
  {
    id: '3',
    title: 'Refer a Friend',
    description: 'Invite a friend to join Dealix',
    xpReward: 200,
    progress: 0,
    required: 1,
    completed: false,
    questType: 'referral',
  },
  {
    id: '4',
    title: 'Week Warrior',
    description: 'Trade for 7 consecutive days',
    xpReward: 300,
    progress: 4,
    required: 7,
    completed: false,
    questType: 'streak',
  },
];

// Mock Marketplace Listings
export const mockMarketplace: MarketplaceListing[] = [
  {
    id: '1',
    badgeId: '2',
    badge: mockBadges[1],
    sellerId: '2',
    price: 500,
    chain: 'Base',
    listedAt: '2024-10-20T14:30:00Z',
  },
  {
    id: '2',
    badgeId: '5',
    badge: mockBadges[4],
    sellerId: '3',
    price: 750,
    chain: 'Base',
    listedAt: '2024-10-21T09:15:00Z',
  },
];

// Mock Leaderboard
export const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    user: {
      id: '10',
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      dealixId: 'DEALIX#0010',
      username: 'WhaleKing',
      tier: 'Legend',
      tradingVolume: 2500000,
      socialPoints: 5000,
      badgeCount: 25,
      createdAt: '2024-01-01T00:00:00Z',
    },
    value: 2500000,
  },
  {
    rank: 2,
    user: {
      id: '11',
      walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
      dealixId: 'DEALIX#0011',
      username: 'DeFiMaster',
      tier: 'Whale',
      tradingVolume: 850000,
      socialPoints: 3200,
      badgeCount: 18,
      createdAt: '2024-01-05T00:00:00Z',
    },
    value: 850000,
  },
  {
    rank: 3,
    user: mockUser,
    value: 5420.50,
  },
];

// Mock Trades
export const mockTrades: Trade[] = [
  {
    id: '1',
    userId: '1',
    tokenIn: 'ETH',
    tokenOut: 'USDC',
    amountIn: 1.5,
    amountOut: 3750,
    discountApplied: 0.10,
    timestamp: '2024-10-24T10:30:00Z',
    txHash: '0xabc123...',
  },
  {
    id: '2',
    userId: '1',
    tokenIn: 'USDC',
    tokenOut: 'PEPE',
    amountIn: 1000,
    amountOut: 50000000,
    discountApplied: 0.10,
    timestamp: '2024-10-23T15:45:00Z',
    txHash: '0xdef456...',
  },
  {
    id: '3',
    userId: '1',
    tokenIn: 'PEPE',
    tokenOut: 'ETH',
    amountIn: 25000000,
    amountOut: 0.5,
    discountApplied: 0.10,
    timestamp: '2024-10-22T08:20:00Z',
    txHash: '0xghi789...',
  },
];

// Mock Wallet Info
export const mockWalletInfo = {
  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  ethBalance: 2.5,
  dlxBalance: 1500,
  isConnected: true,
};