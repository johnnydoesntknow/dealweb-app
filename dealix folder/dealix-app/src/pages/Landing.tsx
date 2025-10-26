import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../config/constants';
import { ArrowRight } from 'lucide-react';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-dealix-gradient opacity-10 blur-3xl" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl"
        >
          <div className="w-24 h-24 bg-dealix-gradient rounded-3xl flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl font-bold text-black">D</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Welcome to{' '}
            <span className="text-gradient">Dealix</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The Social Trading Layer for DeFi. Build reputation, earn rewards, and unlock the full potential of decentralized finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate(ROUTES.PROFILE)}
              size="lg"
              className="text-lg"
            >
              Launch App
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="glass-card p-6">
              <p className="text-3xl font-bold text-dealix-electric-green mb-2">$10M+</p>
              <p className="text-sm text-gray-400">Trading Volume</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-3xl font-bold text-dealix-bright-lime mb-2">5K+</p>
              <p className="text-sm text-gray-400">Active Traders</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-3xl font-bold text-dealix-aqua-green mb-2">100+</p>
              <p className="text-sm text-gray-400">Badges Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};