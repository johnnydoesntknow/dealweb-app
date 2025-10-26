/**
 * Validate Ethereum address
 * @param address - Address to validate
 * @returns True if valid
 */
export const isValidAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

/**
 * Validate network chain ID
 * @param chainId - Chain ID to validate
 * @param expectedChainId - Expected chain ID
 * @returns True if matches
 */
export const isCorrectNetwork = (chainId: number, expectedChainId: number): boolean => {
  return chainId === expectedChainId;
};

/**
 * Check if string is valid IPFS hash
 * @param hash - Hash to validate
 * @returns True if valid IPFS hash
 */
export const isValidIpfsHash = (hash: string): boolean => {
  return /^(Qm[1-9A-HJ-NP-Za-km-z]{44}|bafy[a-z0-9]{55})$/.test(hash);
};