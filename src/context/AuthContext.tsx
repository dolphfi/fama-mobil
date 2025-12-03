import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'client' | 'partner' | 'admin';

interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

interface AuthContextType {
    user: User | null;
    login: (name: string, role: UserRole, email?: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (name: string, role: UserRole, email?: string) => {
        const mockUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email: email || `${name.toLowerCase().replace(/\s+/g, '')}@${role}.com`,
            role,
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
