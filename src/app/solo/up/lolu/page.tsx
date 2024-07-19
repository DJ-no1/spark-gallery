'use client'

import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const handleNotificationsToggle = () => {
        setNotifications(!notifications);
    };

    return (
        <div className='justify-center px-60 '>
            <h1>Settings</h1>
            <div>
                <label htmlFor="darkModeToggle">Dark Mode</label>
                <input
                    type="checkbox"
                    id="darkModeToggle"
                    checked={darkMode}
                    onChange={handleDarkModeToggle}
                />
            </div>
            <div>
                <label htmlFor="notificationsToggle">Notifications</label>
                <input
                    type="checkbox"
                    id="notificationsToggle"
                    checked={notifications}
                    onChange={handleNotificationsToggle}
                />
            </div>
        </div>
    );
};

export default SettingsPage;