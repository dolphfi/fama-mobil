import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, User, Building, Shield } from 'lucide-react';

// Mock users data with different roles
interface MockUser {
    email: string;
    password: string;
    role: UserRole;
    name: string;
    redirectTo: string;
}

const MOCK_USERS: MockUser[] = [
    {
        email: 'client@famamobil.com',
        password: 'client123',
        role: 'client' as UserRole,
        name: 'John Doe',
        redirectTo: '/'
    },
    {
        email: 'partner@famamobil.com',
        password: 'partner123',
        role: 'partner' as UserRole,
        name: 'Medical Supplies Co.',
        redirectTo: '/partner'
    },
    {
        email: 'admin@famamobil.com',
        password: 'admin123',
        role: 'admin' as UserRole,
        name: 'Admin User',
        redirectTo: '/admin'
    }
];

const Login = () => {
    const navigate = useNavigate();
    const { login, user, isAuthenticated } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    React.useEffect(() => {
        if (isAuthenticated && user) {
            const roleRedirects: Record<string, string> = {
                admin: '/admin',
                partner: '/partner',
                client: '/'
            };
            navigate(roleRedirects[user.role] || '/');
        }
    }, [isAuthenticated, user, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Find user in mock data
        const user = MOCK_USERS.find(
            u => u.email === email && u.password === password
        );

        if (user) {
            // Login successful
            login(user.name, user.role, user.email);
            navigate(user.redirectTo);
        } else {
            setError('Invalid email or password');
        }

        setIsLoading(false);
    };

    const handleQuickLogin = (userType: 'client' | 'partner' | 'admin') => {
        const user = MOCK_USERS.find(u => u.role === userType);
        if (user) {
            setEmail(user.email);
            setPassword(user.password);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-primary">Fama</span>
                        <span className="text-[#0A9D0E]">Mobil</span>
                    </h1>
                    <p className="text-muted-foreground">Sign in to your account</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="/" className="text-sm text-primary hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-medium py-3 rounded-lg hover:from-primary/90 hover:to-blue-600/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Quick Login (Demo)</span>
                        </div>
                    </div>

                    {/* Quick Login Buttons */}
                    <div className="space-y-3">
                        <button
                            type="button"
                            onClick={() => handleQuickLogin('client')}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            <User className="h-5 w-5" />
                            <span className="font-medium">Login as Client</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleQuickLogin('partner')}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-green-200 text-green-700 rounded-lg hover:bg-green-50 transition-colors"
                        >
                            <Building className="h-5 w-5" />
                            <span className="font-medium">Login as Partner</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleQuickLogin('admin')}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
                        >
                            <Shield className="h-5 w-5" />
                            <span className="font-medium">Login as Admin</span>
                        </button>
                    </div>

                    {/* Demo Credentials Info */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Demo Credentials:</p>
                        <div className="space-y-1 text-xs text-gray-600">
                            <p><strong>Client:</strong> client@famamobil.com / client123</p>
                            <p><strong>Partner:</strong> partner@famamobil.com / partner123</p>
                            <p><strong>Admin:</strong> admin@famamobil.com / admin123</p>
                        </div>
                    </div>
                </div>

                {/* Sign Up Link */}
                <p className="text-center mt-6 text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/" className="text-primary font-medium hover:underline">
                        Sign up for free
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
