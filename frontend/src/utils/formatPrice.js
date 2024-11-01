// src/utils/formatPrice.js

/**
 * Formats a given price to two decimal places with a currency symbol.
 * @param {number} price - The price to format.
 * @param {string} currency - Currency symbol (e.g., '$').
 * @returns {string} Formatted price string.
 */
export default function formatPrice(price, currency = '$') {
    return `${currency}${price.toFixed(2)}`;
}
