
/**
 * Format a number as EGP currency
 */
export const formatCurrency = (amount: number): string => {
  return `EGP ${amount.toFixed(2)}`;
};
