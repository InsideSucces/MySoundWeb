export function truncateString(maxLength: number, string?: string): string {
    // Check if the string is actually a string and not undefined
    if (typeof string === 'string' && string.length > maxLength) {
      return string.slice(0, maxLength) + "...";
    } 
    // If it's undefined or shorter than maxLength, return the original string or an empty string
    return string || ''; 
  }
  