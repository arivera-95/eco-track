import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your auth logic, e.g., fetching user data from an API
        const fetchUser = async () => {
            const userData = await getUser(); // Example function
            setUser(userData);
            setLoading(false);
        };

        fetchUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

async function getUser() {
    // Example fetch function to retrieve user data
    return { id: '1', name: 'John Doe' }; // Mock user
}