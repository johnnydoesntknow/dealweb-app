export const NETWORKS = {
  BASE_MAINNET: {
    id: 8453,
    name: 'Base',
    network: 'base',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: {
      default: { http: ['https://mainnet.base.org'] },
      public: { http: ['https://mainnet.base.org'] },
    },
    blockExplorers: {
      default: { name: 'BaseScan', url: 'https://basescan.org' },
    },
  },
  BASE_SEPOLIA: {
    id: 84532,
    name: 'Base Sepolia',
    network: 'base-sepolia',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: {
      default: { http: ['https://sepolia.base.org'] },
      public: { http: ['https://sepolia.base.org'] },
    },
    blockExplorers: {
      default: { name: 'BaseScan', url: 'https://sepolia.basescan.org' },
    },
  },
} as const;

export const DEFAULT_NETWORK = NETWORKS.BASE_MAINNET;