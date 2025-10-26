import type { UserTier } from '../types';
import { TIER_THRESHOLDS, TIER_BENEFITS } from '../config/constants';

/**
 * Calculate user tier based on trading volume
 * @param volume - Total trading volume in USD
 * @returns User tier
 */
export const calculateTier = (volume: number): UserTier => {
  if (volume >= TIER_THRESHOLDS.LEGEND) return 'Legend';
  if (volume >= TIER_THRESHOLDS.WHALE) return 'Whale';
  if (volume >= TIER_THRESHOLDS.MASTER) return 'Master';
  if (volume >= TIER_THRESHOLDS.EXPERT) return 'Expert';
  if (volume >= TIER_THRESHOLDS.TRADER) return 'Trader';
  return 'Novice';
};

/**
 * Get discount percentage for a tier
 * @param tier - User tier
 * @returns Discount as decimal (e.g., 0.05 for 5%)
 */
export const getTierDiscount = (tier: UserTier): number => {
  return TIER_BENEFITS[tier.toUpperCase() as keyof typeof TIER_BENEFITS] || 0;
};

/**
 * Get next tier requirements
 * @param currentVolume - Current trading volume
 * @returns Object with next tier info
 */
export const getNextTierInfo = (currentVolume: number): {
  nextTier: UserTier | null;
  volumeNeeded: number;
  progress: number;
} => {
  const currentTier = calculateTier(currentVolume);
  const tiers: UserTier[] = ['Novice', 'Trader', 'Expert', 'Master', 'Whale', 'Legend'];
  const currentIndex = tiers.indexOf(currentTier);
  
  if (currentIndex === tiers.length - 1) {
    return { nextTier: null, volumeNeeded: 0, progress: 100 };
  }
  
  const nextTier = tiers[currentIndex + 1];
  const nextThreshold = TIER_THRESHOLDS[nextTier.toUpperCase() as keyof typeof TIER_THRESHOLDS];
  const currentThreshold = TIER_THRESHOLDS[currentTier.toUpperCase() as keyof typeof TIER_THRESHOLDS];
  const volumeNeeded = nextThreshold - currentVolume;
  const progress = ((currentVolume - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
  
  return { nextTier, volumeNeeded, progress };
};

/**
 * Get tier color class (Tailwind)
 * @param tier - User tier
 * @returns Tailwind color class
 */
export const getTierColor = (tier: UserTier): string => {
  const colors: Record<UserTier, string> = {
    'Novice': 'text-gray-400',
    'Trader': 'text-blue-400',
    'Expert': 'text-purple-400',
    'Master': 'text-dealix-aqua-green',
    'Whale': 'text-dealix-bright-lime',
    'Legend': 'text-dealix-electric-green',
  };
  
  return colors[tier] || 'text-gray-400';
};