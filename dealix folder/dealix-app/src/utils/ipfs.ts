import { IPFS_GATEWAY } from '../config/constants';

/**
 * Convert IPFS URI to HTTP URL
 * @param uri - IPFS URI (ipfs://...)
 * @returns HTTP URL
 */
export const ipfsToHttp = (uri: string): string => {
  if (!uri) return '';
  
  if (uri.startsWith('ipfs://')) {
    return uri.replace('ipfs://', IPFS_GATEWAY);
  }
  
  if (uri.startsWith('Qm') || uri.startsWith('bafy')) {
    return `${IPFS_GATEWAY}${uri}`;
  }
  
  return uri;
};

/**
 * Fetch JSON metadata from IPFS
 * @param uri - IPFS URI
 * @returns Parsed JSON object
 */
export const fetchIpfsMetadata = async <T>(uri: string): Promise<T | null> => {
  try {
    const url = ipfsToHttp(uri);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching IPFS metadata:', error);
    return null;
  }
};