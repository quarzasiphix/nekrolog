import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Normalizes a string for use in URLs by converting Polish diacritics to their Latin equivalents
 * and formatting the string to be URL-friendly.
 * @param str The string to normalize
 * @returns A URL-friendly string with Polish characters converted to their Latin equivalents
 */
export function normalizeForUrl(str: string): string {
  if (!str) return '';
  
  // Convert Polish characters to their Latin equivalents
  const charMap: { [key: string]: string } = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
    'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
    'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N',
    'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
  };
  
  // Replace Polish characters with their Latin equivalents
  const normalized = str
    .split('')
    .map(char => charMap[char] || char)
    .join('')
    // Convert to lowercase
    .toLowerCase()
    // Replace spaces with hyphens
    .replace(/\s+/g, '-')
    // Remove all non-word characters except hyphens
    .replace(/[^\w\-]+/g, '')
    // Replace multiple hyphens with a single hyphen
    .replace(/\-\-+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^\-|\-$/g, '');
    
  return normalized;
}
