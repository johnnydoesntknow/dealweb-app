import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { useWallet } from '../contexts/WalletContext';
import { ROUTES } from '../config/constants';

export const WalletConnect = () => {
  const { walletInfo, isConnecting, connect } = useWallet();
  const navigate = useNavigate();

  // Redirect if already connected
  useEffect(() => {
    if (walletInfo?.isConnected) {
      navigate(ROUTES.APP);
    }
  }, [walletInfo, navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="glass-card p-8 text-center">
          {/* Logo */}
          <div className="w-20 h-20 bg-dealix-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-black">D</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">
            Welcome to <span className="text-gradient">Dealix</span>
          </h1>
          <p className="text-gray-400 mb-8">
            Connect your wallet to access the app
          </p>

          {/* Connect Button */}
          {isConnecting ? (
            <div className="flex flex-col items-center gap-4">
              <LoadingSpinner size="lg" />
              <p className="text-sm text-gray-400">Connecting wallet...</p>
            </div>
          ) : (
            <Button
              onClick={connect}
              className="w-full"
              size="lg"
            >
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </Button>
          )}

          {/* Info Text */}
          <p className="text-xs text-gray-500 mt-6">
            By connecting, you agree to our Terms of Service
          </p>
        </div>
      </motion.div>
    </div>
  );
};