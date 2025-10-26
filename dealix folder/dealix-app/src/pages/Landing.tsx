import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles,
  Users, 
  Target,
  Shield,
  Zap,
  Gamepad2,
  Search,
  Lock,
  CheckCircle,
  Repeat,
  Award,
  Rocket,
  Link as LinkIcon,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../config/constants';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f15] via-black to-[#0a1f15] text-white">
      {/* Navigation - Clean Floating Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-dealix-gradient rounded-xl flex items-center justify-center font-bold text-black shadow-lg shadow-dealix-electric-green/20">
              D
            </div>
            <span className="text-2xl font-bold text-gradient">DEALIX</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-dealix-electric-green transition-colors text-lg">About Us</a>
            <a href="#features" className="text-gray-300 hover:text-dealix-electric-green transition-colors text-lg">FAQ</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-dealix-electric-green transition-colors text-lg">Case Studies</a>
            <a href="#contact" className="text-gray-300 hover:text-dealix-electric-green transition-colors text-lg">Contact</a>
          </div>

          <Button
            onClick={() => navigate(ROUTES.PROFILE)}
            size="lg"
            className="shadow-lg shadow-dealix-electric-green/30"
          >
            Join Today
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Enhanced Vibrant Green Background - Like Reference */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Multiple layered green glows for depth */}
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-dealix-electric-green/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-dealix-bright-lime/25 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-dealix-aqua-green/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-dealix-electric-green/20 rounded-full blur-[160px]" />
          {/* Additional glow for more saturation */}
          <div className="absolute inset-0 bg-gradient-to-b from-dealix-electric-green/10 via-transparent to-dealix-deep-teal/10" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h1 
            className="text-7xl md:text-8xl font-bold mb-8 text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Experience <span className="text-gradient">Dealix</span>
          </motion.h1>

          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto text-center font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your Gateway to Simple, Unbeatable Crypto Deals
          </motion.p>

          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              onClick={() => navigate(ROUTES.PROFILE)}
              size="lg"
              className="text-xl px-12 py-6 shadow-2xl shadow-dealix-electric-green/30"
            >
              Join Community
            </Button>
          </motion.div>

          {/* Hero Card */}
          <motion.div
            className="glass-card p-8 border-2 border-dealix-electric-green/30 shadow-2xl shadow-dealix-electric-green/10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  Experience <span className="text-gradient">Dealix</span>
                </h3>
                <p className="text-gray-400 text-lg">Your Gateway to Simple, Unbeatable Crypto Deals</p>
              </div>
              <Sparkles className="w-16 h-16 text-dealix-electric-green" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Button
                onClick={() => navigate(ROUTES.MARKETPLACE)}
                className="py-4 text-lg"
              >
                Explore Discounts →
              </Button>
              <Button
                onClick={() => navigate(ROUTES.PROFILE)}
                variant="outline"
                className="py-4 text-lg"
              >
                Create Discount
              </Button>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-4 font-medium">Current Active Chains</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/40">
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                  </div>
                  <span className="text-sm font-semibold">Base</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>More chains coming soon...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="relative py-24 px-6" id="about">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dealix-deep-teal/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="space-y-12 text-center">
            {[
              "Getting real value in DeFi was complicated, until now",
              "Now, you can get chart-based token deals in 1 click",
              "Earn passive income through our affiliate program",
              "Track volume, discounts, and rewards in real time",
              "Built for traders, affiliates, and project owners alike"
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-dealix-electric-green rounded-full shadow-lg shadow-dealix-electric-green/50" />
                <p className="text-2xl md:text-4xl text-gray-200 font-light">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card p-8 text-center border-2 border-dealix-electric-green/20 hover:border-dealix-electric-green/40 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-dealix-electric-green mb-2 group-hover:scale-110 transition-transform">
                $10M+
              </div>
              <p className="text-gray-400 text-lg">Trading Volume</p>
            </motion.div>

            <motion.div 
              className="glass-card p-8 text-center border-2 border-dealix-bright-lime/20 hover:border-dealix-bright-lime/40 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl font-bold text-dealix-bright-lime mb-2 group-hover:scale-110 transition-transform">
                5K+
              </div>
              <p className="text-gray-400 text-lg">Active Traders</p>
            </motion.div>

            <motion.div 
              className="glass-card p-8 text-center border-2 border-dealix-aqua-green/20 hover:border-dealix-aqua-green/40 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-dealix-aqua-green mb-2 group-hover:scale-110 transition-transform">
                100+
              </div>
              <p className="text-gray-400 text-lg">Badges Available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6" id="features">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full text-gray-300 text-sm mb-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Features
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What makes <span className="text-gradient">Dealix</span> different
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The first comprehensive social trading layer built directly into a DEX protocol
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'On-Chain Deals',
                description: 'Tokenized discounts minted as NFTs, automated, trackable, and tradable.',
                color: 'dealix-electric-green'
              },
              {
                icon: Users,
                title: 'Affiliate-Powered Growth',
                description: 'Earn from every deal you drive. Track clicks, volume, and payouts in real time.',
                color: 'dealix-bright-lime'
              },
              {
                icon: Gamepad2,
                title: 'Gamified Engagement',
                description: 'Earn badges by trading, referring, and achieving milestones. Level up and showcase achievements.',
                color: 'dealix-aqua-green'
              },
              {
                icon: Search,
                title: 'Real-Time Insights',
                description: 'Track volume, discounts, and rewards in real time with comprehensive analytics.',
                color: 'purple-400'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 border-2 border-white/10 hover:border-dealix-electric-green/40 transition-all group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dealix-electric-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <feature.icon className={`w-14 h-14 text-${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-6" id="how-it-works">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full text-gray-300 text-sm mb-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get started in <span className="text-gradient">3 simple steps</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: Target,
                title: 'Connect & Create ID',
                description: 'Connect your wallet and mint your Dealix ID to start building your on-chain reputation.'
              },
              {
                step: '02',
                icon: Repeat,
                title: 'Trade & Earn',
                description: 'Execute swaps with automatic discounts, earn badges, and climb through 6 reward tiers.'
              },
              {
                step: '03',
                icon: Award,
                title: 'Level Up',
                description: 'Build your reputation, unlock exclusive benefits, and become a DeFi Legend.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="glass-card p-8 border-2 border-white/10 hover:border-dealix-electric-green/40 transition-all h-full">
                  <div className="text-6xl font-bold text-dealix-electric-green/20 mb-4">{item.step}</div>
                  <item.icon className="w-12 h-12 text-dealix-electric-green mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-dealix-electric-green/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liquidity Locker Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dealix-electric-green/5 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="glass-card p-12 border-2 border-dealix-electric-green/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Lock className="w-16 h-16 text-dealix-electric-green mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The <span className="text-gradient">Liquidity Locker</span> Revolution
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  First protocol where locked LP tokens generate rewards without unlocking. 90% stays locked forever, 10% drives sustainable growth.
                </p>
                <ul className="space-y-4">
                  {[
                    'Lock liquidity permanently while earning',
                    '10x more capital efficient than airdrops',
                    'Self-balancing reward distribution',
                    'Zero additional token allocation needed'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-dealix-electric-green flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="glass-card p-6 border border-dealix-electric-green/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Locked Forever</span>
                    <span className="text-2xl font-bold text-dealix-electric-green">90%</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-dealix-gradient" />
                  </div>
                </div>

                <div className="glass-card p-6 border border-dealix-bright-lime/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Active Rewards</span>
                    <span className="text-2xl font-bold text-dealix-bright-lime">10%</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[10%] bg-gradient-to-r from-dealix-bright-lime to-dealix-aqua-green" />
                  </div>
                </div>

                <div className="glass-card p-6 border border-purple-500/20 bg-purple-500/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold text-purple-400">Capital Efficiency</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Unlock $10B+ in idle DeFi capital while maintaining security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier System Section */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Reputation-Based <span className="text-gradient">Rewards</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Progress through 6 tiers and unlock bigger discounts as you trade
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { tier: 'Novice', color: 'gray-400', bonus: '0%' },
              { tier: 'Trader', color: 'blue-400', bonus: '0.05%' },
              { tier: 'Expert', color: 'purple-400', bonus: '0.10%' },
              { tier: 'Master', color: 'dealix-aqua-green', bonus: '0.15%' },
              { tier: 'Whale', color: 'dealix-bright-lime', bonus: '0.20%' },
              { tier: 'Legend', color: 'dealix-electric-green', bonus: '0.25%' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 border-2 border-white/10 hover:border-dealix-electric-green/40 transition-all text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`text-3xl font-bold text-${item.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {item.bonus}
                </div>
                <div className={`text-lg font-semibold text-${item.color}`}>
                  {item.tier}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6" id="contact">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dealix-electric-green/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dealix-electric-green/20 rounded-full blur-[150px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full text-gray-300 text-sm mb-10 border border-white/10">
              Start today
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ready to start your journey with <span className="text-gradient">Dealix</span>?
          </motion.h2>

          <motion.p 
            className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Unlock real-time crypto deals, earn from your influence, and track your impact—all in one ecosystem.
          </motion.p>

          <motion.div
            className="glass-card p-4 max-w-2xl mx-auto border-2 border-dealix-electric-green/30 shadow-2xl shadow-dealix-electric-green/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate(ROUTES.PROFILE)}
                className="flex-1 py-5 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button
                variant="outline"
                className="flex-1 py-5 text-lg"
              >
                <LinkIcon className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-6 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-dealix-electric-green" />
              <span>Audited Smart Contracts</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-dealix-electric-green" />
              <span>100% Decentralized</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-dealix-electric-green/20 py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-dealix-gradient rounded-xl flex items-center justify-center font-bold text-black shadow-lg shadow-dealix-electric-green/20">
                  D
                </div>
                <span className="text-2xl font-bold text-gradient">DEALIX</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg">The Social Trading Layer for DeFi</p>
              <p className="text-gray-500 mb-6">© 2025 Dealix. All rights reserved.</p>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://x.com/Dealix_Io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 glass-card border-2 border-white/10 hover:border-dealix-electric-green/40 flex items-center justify-center transition-all hover:scale-110"
                >
                  <span className="text-xl">𝕏</span>
                </a>
                <a 
                  href="https://t.me/dealix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card border-2 border-white/10 hover:border-dealix-electric-green/40 flex items-center justify-center transition-all hover:scale-110"
                >
                  <span className="text-xl">✈</span>
                </a>
              </div>
              
              <p className="text-sm text-gray-600 mt-6">Dealix V1.0.0</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-dealix-electric-green font-bold mb-6 text-lg">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-gray-400 hover:text-dealix-electric-green transition-colors">About Us</a></li>
                  <li><a href="#features" className="text-gray-400 hover:text-dealix-electric-green transition-colors">Features</a></li>
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-dealix-electric-green transition-colors">How It Works</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-dealix-electric-green transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-dealix-electric-green font-bold mb-6 text-lg">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-dealix-electric-green transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-dealix-electric-green transition-colors">Whitepaper</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-dealix-electric-green transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-dealix-electric-green transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5">
            <div className="text-center text-[120px] font-bold text-dealix-electric-green/5 select-none leading-none">
              Dealix
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};