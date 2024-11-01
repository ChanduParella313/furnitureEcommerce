// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
    <Router>
        <Routes>
            <Route exact path='/' component={HomePage} />
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.category} component={CategoriesPage} />
            <Route path={routes.productDetails} component={ProductDetails} />
            <Route path={routes.cart} component={CartPage} />
            <Route path={routes.userProfile} component={ProfilePage} />
            <Route path={routes.notFound} component={NotFoundPage} />
            {/* Add more routes as needed */}
        </Routes>
    </Router>
);

export default App;
