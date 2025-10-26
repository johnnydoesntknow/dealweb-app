/**
 * Format a wallet address to show first 6 and last 4 characters
 * @param address - Full wallet address
 * @returns Shortened address (e.g., 0x1234...5678)
 */
export const shortenAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

/**
 * Format a number with commas
 * @param num - Number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Format currency (USD)
 * @param amount - Amount to format
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

/**
 * Format large numbers with K, M, B suffixes
 * @param num - Number to format
 * @returns Formatted string (e.g., 1.5K, 2.3M)
 */
export const formatCompactNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(1)}B`;
  }
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }
  return num.toString();
};

/**
 * Format ETH balance
 * @param balance - Balance in wei or ether
 * @param decimals - Number of decimal places
 * @returns Formatted ETH string
 */
export const formatEth = (balance: number, decimals: number = 4): string => {
  return `${balance.toFixed(decimals)} ETH`;
};

/**
 * Format percentage
 * @param value - Value to format as percentage
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

/**
 * Format relative time (e.g., "2 hours ago")
 * @param date - Date string or Date object
 * @returns Relative time string
 */
export const formatRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return past.toLocaleDateString();
};