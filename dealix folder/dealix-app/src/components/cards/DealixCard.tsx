import { motion } from 'framer-motion';
import { Wallet, TrendingUp } from 'lucide-react';
import { useWallet } from '../../contexts/MockWalletContext';
import { mockUser } from '../../lib/mockData';
import { shortenAddress, formatEth, formatCompactNumber } from '../../utils/format';
import { getTierColor } from '../../utils/tier';
import { Button } from '../ui/Button';

export const DealixCard = () => {
  const { walletInfo, connect, isConnecting } = useWallet();

  // If not connected, show connect button
  if (!walletInfo?.isConnected) {
    return (
      <motion.div
        className="glass-card p-4 w-80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <Wallet className="w-12 h-12 mx-auto mb-3 text-dealix-electric-green" />
          <p className="text-sm text-gray-400 mb-4">Connect your wallet to get started</p>
          <Button
            onClick={connect}
            disabled={isConnecting}
            className="w-full"
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </Button>
        </div>
      </motion.div>
    );
  }

  // Mock data for connected state
  const user = mockUser;

  return (
    <motion.div
      className="glass-card p-4 w-80 relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-dealix-gradient opacity-10 blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">{user.username}</h3>
            <p className="text-xs text-gray-400">
              {shortenAddress(walletInfo.address)}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className={`text-xs font-medium ${getTierColor(user.tier)}`}>
              {user.tier}
            </span>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-dealix-electric-green" />
              <span className="text-xs text-dealix-electric-green">
                +12.5%
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 my-3" />

        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-[10px] text-gray-500 uppercase mb-1">ETH</p>
            <p className="text-sm font-semibold text-white">
              {formatEth(walletInfo.ethBalance, 2)}
            </p>
          </div>

          <div>
            <p className="text-[10px] text-gray-500 uppercase mb-1">Volume</p>
            <p className="text-sm font-semibold text-white">
              ${formatCompactNumber(user.tradingVolume)}
            </p>
          </div>

          <div>
            <p className="text-[10px] text-gray-500 uppercase mb-1">Badges</p>
            <p className="text-sm font-semibold text-dealix-electric-green">
              {user.badgeCount}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-4">
          <div className="w-2 h-2 rounded-full bg-dealix-electric-green" />
          <div className="w-2 h-2 rounded-full bg-dealix-bright-lime" />
          <div className="w-2 h-2 rounded-full bg-dealix-aqua-green" />
        </div>
      </div>
    </motion.div>
  );
};