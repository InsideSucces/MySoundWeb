export function truncateString(maxLength: number, string?: string): string {
    // Check if the string is actually a string and not undefined
    if (typeof string === 'string' && string.length > maxLength) {
        return string.slice(0, maxLength) + "...";
    }
    // If it's undefined or shorter than maxLength, return the original string or an empty string
    return string || '';
}


export const formatTime = (time: number | undefined): string => {
    if (typeof time === 'number' && !isNaN(time)) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        // Convert to string and pad with leading zeros if necessary
        const formatMinutes = minutes.toString().padStart(2, '0');
        const formatSeconds = seconds.toString().padStart(2, '0');

        return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
};