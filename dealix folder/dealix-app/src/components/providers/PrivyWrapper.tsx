import type { ReactNode } from 'react';
import { PrivyProvider } from '@privy-io/react-auth';
import { privyConfig } from '../../config/privy';
import { WalletProvider } from '../../contexts/WalletContext';

interface PrivyWrapperProps {
  children: ReactNode;
}

export const PrivyWrapper = ({ children }: PrivyWrapperProps) => {
  return (
    <PrivyProvider
      appId={privyConfig.appId}
      config={privyConfig.config}
    >
      <WalletProvider>
        {children}
      </WalletProvider>
    </PrivyProvider>
  );
};