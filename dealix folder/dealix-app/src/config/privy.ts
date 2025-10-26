import type { PrivyClientConfig } from '@privy-io/react-auth';
import { NETWORKS } from './networks';

const config: PrivyClientConfig = {
  loginMethods: ['wallet'],
  appearance: {
    theme: 'dark',
    accentColor: '#24E055',
    logo: 'https://your-logo-url.com/dealix-logo.png',
  },
  defaultChain: NETWORKS.BASE_MAINNET,
  supportedChains: [NETWORKS.BASE_MAINNET, NETWORKS.BASE_SEPOLIA],
};

export const privyConfig = {
  appId: import.meta.env.VITE_PRIVY_APP_ID || '',
  config,
};