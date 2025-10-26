import { GlassCard } from '../components/ui/GlassCard';
import { BadgeTag } from '../components/ui/BadgeTag';
import { useWallet } from '../contexts/MockWalletContext';
import { mockUser } from '../lib/mockData';
import { getTierColor, getNextTierInfo } from '../utils/tier';
import { formatCurrency, formatRelativeTime } from '../utils/format';
import { ProgressBar } from '../components/ui/ProgressBar';
import { UserCircle } from 'lucide-react';

export const Profile = () => {
  const { walletInfo } = useWallet();

  // Show placeholder when not connected
  if (!walletInfo?.isConnected) {
    return (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Profile</h1>

        <GlassCard>
          <div className="text-center py-12">
            <UserCircle className="w-24 h-24 mx-auto mb-4 text-gray-600" />
            <h2 className="text-2xl font-bold mb-2">Connect Your Wallet</h2>
            <p className="text-gray-400">
              Connect your wallet to view your profile and start trading
            </p>
          </div>
        </GlassCard>
      </div>
    );
  }

  // Show user data when connected
  const user = mockUser;
  const nextTierInfo = getNextTierInfo(user.tradingVolume);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Profile</h1>

      <GlassCard>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">{user.username}</h2>
            <p className="text-gray-400 text-sm">{user.dealixId}</p>
            <p className="text-gray-500 text-xs mt-1">
              Member since {formatRelativeTime(user.createdAt)}
            </p>
          </div>
          <BadgeTag variant="success">
            <span className={getTierColor(user.tier)}>{user.tier}</span>
          </BadgeTag>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-400 mb-1">Trading Volume</p>
            <p className="text-2xl font-bold">{formatCurrency(user.tradingVolume)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Social Points</p>
            <p className="text-2xl font-bold text-dealix-bright-lime">{user.socialPoints}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Badges Earned</p>
            <p className="text-2xl font-bold text-dealix-electric-green">{user.badgeCount}</p>
          </div>
        </div>

        {nextTierInfo.nextTier && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">
                Progress to {nextTierInfo.nextTier}
              </p>
              <p className="text-sm text-gray-400">
                {formatCurrency(nextTierInfo.volumeNeeded)} needed
              </p>
            </div>
            <ProgressBar progress={nextTierInfo.progress} />
          </div>
        )}
      </GlassCard>

      <GlassCard>
        <h3 className="text-xl font-bold mb-4">Activity History</h3>
        <p className="text-gray-400 text-sm">Coming soon...</p>
      </GlassCard>
    </div>
  );
};