// Utility functions for HTML content handling

/**
 * Safely render HTML content
 * @param {string} htmlString - HTML string to render
 * @returns {object} Object for dangerouslySetInnerHTML
 */
export const renderHTML = (htmlString) => {
    return { __html: htmlString || '' };
};

/**
 * Extract plain text from HTML string
 * @param {string} htmlString - HTML string to extract text from
 * @returns {string} Plain text without HTML tags
 */
export const getPlainText = (htmlString) => {
    if (!htmlString) return '';

    // Simple regex to remove HTML tags
    return htmlString.replace(/<[^>]*>/g, '');
};

/**
 * Check if string contains HTML tags
 * @param {string} str - String to check
 * @returns {boolean} True if contains HTML tags
 */
export const containsHTML = (str) => {
    if (!str) return false;
    return /<[^>]*>/.test(str);
};

/**
 * Safely truncate HTML content
 * @param {string} htmlString - HTML string to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated HTML string
 */
export const truncateHTML = (htmlString, maxLength = 100) => {
    if (!htmlString) return '';

    const plainText = getPlainText(htmlString);
    if (plainText.length <= maxLength) return htmlString;

    // Truncate plain text and add ellipsis
    const truncatedText = plainText.substring(0, maxLength) + '...';
    return truncatedText;
}; 