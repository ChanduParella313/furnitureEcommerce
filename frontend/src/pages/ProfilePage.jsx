// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ProfilePage.css';
import { Avatar, Button, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user details from backend API
        axios.get('http://localhost:8080/api/user/1') // Replace with actual endpoint and user ID
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching user data:", error));
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div className={styles.profilePage}>
            {/* Profile Section */}
            <Paper elevation={3} className={styles.profileSection}>
                <div className={styles.profileHeader}>
                    <Avatar className={styles.avatar} alt="User Avatar">
                        {user.name[0]}
                    </Avatar>
                    <div className={styles.userInfo}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditIcon />}
                            className={styles.editButton}
                        >
                            Edit Profile
                        </Button>
                    </div>
                </div>
                <div className={styles.contactInfo}>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                </div>
            </Paper>

            {/* Address Section */}
            <Paper elevation={3} className={styles.addressSection}>
                <h3><LocationOnIcon /> Address</h3>
                <p>{user.address}</p>
                <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<EditIcon />}
                    className={styles.editAddressButton}
                >
                    Edit Address
                </Button>
            </Paper>

            {/* Order History Section */}
            <Paper elevation={3} className={styles.orderHistorySection}>
                <h3><ShoppingBasketIcon /> Order History</h3>
                {user.orders && user.orders.length > 0 ? (
                    user.orders.map(order => (
                        <div key={order.id} className={styles.orderItem}>
                            <p><strong>Order Date:</strong> {order.date}</p>
                            <p><strong>Items:</strong> {order.items}</p>
                            <p><strong>Total:</strong> {order.total}</p>
                        </div>
                    ))
                ) : (
                    <p>No order history available.</p>
                )}
            </Paper>
        </div>
    );
};

export default ProfilePage;
