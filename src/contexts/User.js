"use client"

import { createContext, useState, use, useEffect } from 'react';

const UserContext = createContext();

// Add function to fetch user data
async function fetchUserData(token) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/userdata`, {
            headers: {
                'Authorization': token
            }
        });
        console.log('Response:', response);
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log('User data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
        // Check if we're in the browser environment
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            // If we have a token, return loading state to trigger fetch
            if (token) {
                return { loading: true };
            }
        }
        return null;
    });

    useEffect(() => {
        // Fetch user data if in loading state
        if (user?.loading) {
            const token = localStorage.getItem('token');
            fetchUserData(token).then(userData => {
                if (userData) {
                    setUser(userData);
                } else {
                    // If fetch fails, clear the loading state and token
                    setUser(null);
                }
            });
        }
    }, [user?.loading]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = use(UserContext);
    return context;
}
