// src/utils/auth.js

// Key for local storage
const TOKEN_KEY = 'authToken';

/**
 * Saves the authentication token to local storage.
 * @param {string} token - The token to save.
 */
export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Retrieves the authentication token from local storage.
 * @returns {string|null} The saved token, or null if not found.
 */
export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

/**
 * Removes the authentication token from local storage.
 */
export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};
