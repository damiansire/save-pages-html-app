/**
 * Removes special characters from a URL.
 *
 * @param {string} url - The URL to be cleaned.
 * @returns {string} The cleaned URL.
 *
 * @example
 * const originalUrl: string = "https://www.example.com/page#section";
 * const cleanedUrl: string = removeSpecialCharactersFromUrl(originalUrl);
 * // This will return "httpswwweamplecompagesection"
 */
export function removeSpecialCharactersFromUrl(url: string): string {
    // Encode the URL to ensure special characters are in URI format.
    const encodedUrl: string = encodeURIComponent(url);

    // Use a regular expression to remove all characters except letters, numbers, hyphens, and underscores.
    const cleanedUrl: string = encodedUrl.replace(/[^\w-]/g, '');

    // Decode the URL again to get the final URL without special characters.
    const finalUrl: string = decodeURIComponent(cleanedUrl);

    return finalUrl;
}


