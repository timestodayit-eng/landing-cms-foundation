export const CATEGORIES = [
  { key: 'pro', name: 'Pro Landing Page' },
  { key: 'call', name: 'Call Landing Page' },
  { key: 'trust', name: 'Trust Gain Landing Page' },
  { key: 'fomo', name: 'FOMO Landing Page' },
  { key: 'review', name: 'Review Landing Page' },
];
export function getCategory(key){ return CATEGORIES.find(x => x.key === key); }
