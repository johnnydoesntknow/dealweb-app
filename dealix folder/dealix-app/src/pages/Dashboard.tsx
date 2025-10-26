import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { mockUser, mockBattlePass, mockLeaderboard } from '../lib/mockData';
import { ProgressBar } from '../components/ui/ProgressBar';
import { getTierColor } from '../utils/tier';
import { formatCompactNumber } from '../utils/format';

export const Dashboard = () => {
  const user = mockUser;
  const battlePass = mockBattlePass;
  const topLeaderboard = mockLeaderboard.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, <span className="text-gradient">{user.username}</span>!
        </h1>
        <p className="text-gray-400">
          Your Dealix ID: <span className="text-dealix-electric-green">{user.dealixId}</span>
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tier Card */}
        <GlassCard hover>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm text-gray-400">Current Tier</h3>
            <span className={`text-2xl font-bold ${getTierColor(user.tier)}`}>
              {user.tier}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Keep trading to reach the next tier!
          </p>
        </GlassCard>

        {/* Trading Volume Card */}
        <GlassCard hover>
          <h3 className="text-sm text-gray-400 mb-2">Trading Volume</h3>
          <p className="text-3xl font-bold text-white">
            ${formatCompactNumber(user.tradingVolume)}
          </p>
          <p className="text-xs text-dealix-electric-green mt-2">
            +15.3% this week
          </p>
        </GlassCard>

        {/* Social Points Card */}
        <GlassCard hover>
          <h3 className="text-sm text-gray-400 mb-2">Social Points</h3>
          <p className="text-3xl font-bold text-dealix-bright-lime">
            {formatCompactNumber(user.socialPoints)}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Rank #{mockLeaderboard.find(e => e.user.id === user.id)?.rank || '-'}
          </p>
        </GlassCard>
      </div>

      {/* Battle Pass Progress */}
      <GlassCard>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Battle Pass Progress</h2>
          <span className="text-sm text-gray-400">
            Level {battlePass.level}
          </span>
        </div>
        <ProgressBar 
          progress={(battlePass.xp / battlePass.xpRequired) * 100}
          showLabel
          className="mb-2"
        />
        <p className="text-xs text-gray-500">
          {battlePass.xp} / {battlePass.xpRequired} XP
        </p>
      </GlassCard>

      {/* Top Leaderboard Preview */}
      <GlassCard>
        <h2 className="text-xl font-bold mb-4">Top Traders</h2>
        <div className="space-y-3">
          {topLeaderboard.map((entry) => (
            <div 
              key={entry.user.id}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-dealix-electric-green">
                  #{entry.rank}
                </span>
                <div>
                  <p className="font-medium">{entry.user.username}</p>
                  <p className="text-xs text-gray-400">{entry.user.dealixId}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${formatCompactNumber(entry.value)}</p>
                <p className={`text-xs ${getTierColor(entry.user.tier)}`}>
                  {entry.user.tier}
                </p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};