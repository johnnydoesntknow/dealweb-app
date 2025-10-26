import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { WalletInfo } from '../types';
import { mockWalletInfo } from '../lib/mockData';

interface WalletContextType {
  walletInfo: WalletInfo | null;
  isConnecting: boolean;
  connect: () => void;
  disconnect: () => void;
  switchNetwork: (chainId: number) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const MockWalletProvider = ({ children }: { children: ReactNode }) => {
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = async () => {
    setIsConnecting(true);
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setWalletInfo(mockWalletInfo);
    setIsConnecting(false);
  };

  const disconnect = async () => {
    setWalletInfo(null);
  };

  const switchNetwork = async (chainId: number) => {
    console.log('Switching to network:', chainId);
  };

  return (
    <WalletContext.Provider
      value={{
        walletInfo,
        isConnecting,
        connect,
        disconnect,
        switchNetwork,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a MockWalletProvider');
  }
  return context;
};