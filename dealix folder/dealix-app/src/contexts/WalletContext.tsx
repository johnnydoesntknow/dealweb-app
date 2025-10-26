import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import type { WalletInfo } from '../types';
import { NETWORKS } from '../config/networks';

interface WalletContextType {
  walletInfo: WalletInfo | null;
  isConnecting: boolean;
  connect: () => void;
  disconnect: () => void;
  switchNetwork: (chainId: number) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const { login, logout, authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const updateWalletInfo = async () => {
      if (authenticated && wallets.length > 0) {
        const wallet = wallets[0];
        const address = wallet.address;
        
        // Get ETH balance (placeholder - will be replaced with actual call)
        const ethBalance = 0; // TODO: Fetch actual balance
        
        setWalletInfo({
          address,
          ethBalance,
          dlxBalance: 0, // TODO: Fetch DLX balance
          isConnected: true,
        });
      } else {
        setWalletInfo(null);
      }
    };

    if (ready) {
      updateWalletInfo();
    }
  }, [authenticated, wallets, ready]);

  const connect = async () => {
    setIsConnecting(true);
    try {
      await login();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = async () => {
    try {
      await logout();
      setWalletInfo(null);
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const switchNetwork = async (chainId: number) => {
    if (wallets.length === 0) return;
    
    try {
      const wallet = wallets[0];
      await wallet.switchChain(chainId);
    } catch (error) {
      console.error('Failed to switch network:', error);
      throw error;
    }
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
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};