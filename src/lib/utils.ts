import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add this function if it doesn't already exist
export const formatPrice = (price: number): string => {
  return `EGP ${price.toFixed(2)}`;
};
