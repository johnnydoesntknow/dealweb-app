import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Award, 
  Store, 
  Trophy, 
  Repeat, 
  Gamepad2, 
  Receipt,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Bell
} from 'lucide-react';
import { clsx } from 'clsx';
import { ROUTES } from '../../config/constants';
import { useWallet } from '../../contexts/WalletContext';

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: 'Profile', path: ROUTES.PROFILE, icon: User },
  { name: 'Badges', path: ROUTES.BADGES, icon: Award },
  { name: 'Marketplace', path: ROUTES.MARKETPLACE, icon: Store },
  { name: 'Leaderboard', path: ROUTES.LEADERBOARD, icon: Trophy },
  { name: 'Swap', path: ROUTES.SWAP, icon: Repeat },
  { name: 'Battle Pass', path: ROUTES.BATTLE_PASS, icon: Gamepad2 },
  { name: 'Trades', path: ROUTES.TRADES, icon: Receipt },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { disconnect } = useWallet();

  return (
    <motion.aside
      className={clsx(
        'fixed left-0 top-0 h-screen bg-black/40 backdrop-blur-xl border-r border-white/10 z-40 flex flex-col',
        'transition-all duration-300'
      )}
      animate={{ width: isCollapsed ? 80 : 240 }}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10">
        <Link to={ROUTES.APP} className="flex items-center gap-3">
          <div className="w-8 h-8 bg-dealix-gradient rounded-lg flex items-center justify-center font-bold text-black">
            D
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="text-xl font-bold text-gradient"
              >
                DEALIX
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200',
                'hover:bg-white/5',
                isActive && 'bg-dealix-electric-green/10 text-dealix-electric-green',
                !isActive && 'text-gray-400 hover:text-white'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      {/* Announcement Box */}
      <div className="px-3 pb-4">
        <div className="glass-card p-3 border border-dealix-electric-green/30">
          <div className="flex items-start gap-2">
            <Bell className="w-4 h-4 text-dealix-electric-green flex-shrink-0 mt-0.5" />
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400">
                  New Battle Pass season starts soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section - Disconnect & Collapse */}
      <div className="border-t border-white/10 p-3 space-y-2">
        <button
          onClick={disconnect}
          className={clsx(
            'w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200',
            'text-red-400 hover:bg-red-500/10'
          )}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="text-sm font-medium whitespace-nowrap"
              >
                Disconnect
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
    </motion.aside>
  );
};