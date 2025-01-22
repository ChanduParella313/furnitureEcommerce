// src/routes.js

/**
 * Routes for the e-commerce application
 * This file centralizes route paths for easier management and maintenance.
 */

const routes = {
    // Home route
    home: '/',

    // Category page route with dynamic parameter for category ID
    category: '/category/:categoryId',

    // Product details page route with dynamic parameter for product ID
    productDetails: '/product/:productId',

    // Cart page route
    cart: '/cart',

    // User profile and account pages
    userProfile: '/profile',
    userOrders: '/profile/orders',

    // Admin panel routes (only accessible to admins)
    adminDashboard: '/admin',
    adminProducts: '/admin/products',
    adminCategories: '/admin/categories',
    adminOrders: '/admin/orders',

    // Authentication routes
    login: '/login',
    register: '/register',

    // Thank you / order confirmation page
    orderConfirmation: '/thank-you',

    // Error page for unrecognized routes
    notFound: '*', // Can be used with a <Route path="*" /> in App.js
};

export default routes;
