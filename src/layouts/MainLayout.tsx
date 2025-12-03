import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import CartSheet from '../components/CartSheet';
import { useAuth } from '../context/AuthContext';
import { Search, MapPin, Heart, User, Menu, ChevronDown } from 'lucide-react';
import AccountDropdown from '../components/AccountDropdown';
import AddressSelector from '../components/AddressSelector';
import DepartmentMenu from '../components/DepartmentMenu';
import KolassitChat from '../components/KolassitChat';

const MainLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [isAddressSelectorOpen, setIsAddressSelectorOpen] = useState(false);
    const [isDepartmentMenuOpen, setIsDepartmentMenuOpen] = useState(false);
    const [isKolassitOpen, setIsKolassitOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState({
        city: 'Fort Lauderdale',
        zip: '33309'
    });

    // Check if we're on the cart page
    const isCartPage = location.pathname === '/cart';

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background font-sans antialiased">
            {/* Top Header - Blend of Walmart blue and custom styling */}
            <header className="bg-gradient-to-r from-[#0071ce] to-[#0047D1] text-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    {/* Top Bar - Desktop Only */}
                    <div className="hidden md:flex items-center justify-between py-2 text-xs border-b border-white/20">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsAddressSelectorOpen(true)}
                                className="hover:underline flex items-center gap-1 cursor-pointer"
                            >
                                <MapPin className="h-3 w-3" />
                                Deliver to {selectedAddress.city} {selectedAddress.zip}
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="#" className="hover:underline">Help & Contact</Link>
                            <Link to="#" className="hover:underline">Daily Deals</Link>
                            <Link to="#" className="hover:underline">Sell</Link>
                            <button
                                onClick={() => setIsKolassitOpen(true)}
                                className="flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                            >
                                <span className="text-sm">✨</span>
                                <span className="font-medium">KolAssit</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Header */}
                    <div className="md:hidden py-3 space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <button onClick={() => setIsDepartmentMenuOpen(true)}>
                                    <Menu className="h-6 w-6" />
                                </button>
                                <Link to="/" className="text-xl font-bold">
                                    <span className="text-white">Fama</span>
                                    <span className="text-[#0A9D0E]">Mobil</span>
                                </Link>
                            </div>
                            <div className="flex items-center gap-4">
                                <AccountDropdown
                                    trigger={
                                        <Link to={user ? "/client" : "/login"} className="flex items-center gap-1 cursor-pointer">
                                            <span className="text-sm font-medium text-white">
                                                {user ? user.name.split(' ')[0] : 'Sign In'}
                                            </span>
                                            <User className="h-6 w-6 text-white" />
                                        </Link>
                                    }
                                />
                                <CartSheet />
                            </div>
                        </div>
                        {/* Mobile Search Bar */}
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="flex bg-white rounded-lg overflow-hidden shadow-sm h-10">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search Fama Mobil..."
                                    className="flex-1 px-4 text-gray-900 focus:outline-none text-sm"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#0A9D0E] hover:bg-[#088a0c] px-4 transition-colors flex items-center justify-center"
                                >
                                    <Search className="h-5 w-5 text-white" />
                                </button>
                            </div>
                        </form>
                        {/* Mobile Address Bar & KolAssist */}
                        <div className="flex items-center justify-between gap-2">
                            <button
                                onClick={() => setIsAddressSelectorOpen(true)}
                                className="flex items-center gap-1 text-xs text-white/90 truncate flex-1"
                            >
                                <MapPin className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">Deliver to {selectedAddress.city} {selectedAddress.zip}</span>
                            </button>

                            <button
                                onClick={() => setIsKolassitOpen(true)}
                                className="flex items-center gap-1 px-2 py-0.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors flex-shrink-0"
                            >
                                <span className="text-xs">✨</span>
                                <span className="text-xs font-medium">KolAssit</span>
                            </button>
                        </div>
                    </div>

                    {/* Desktop Main Header */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6 py-3 px-4 md:px-6 w-full max-w-[1920px] mx-auto">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <span className="text-2xl font-bold text-white tracking-tight">
                                <span className="text-white">Fama</span>
                                <span className="text-[#0A9D0E]">Mobil</span>
                            </span>
                        </Link>

                        {/* Location - Desktop */}
                        <div className="hidden lg:flex flex-col text-white text-xs leading-tight cursor-pointer hover:outline hover:outline-1 hover:outline-white p-1 rounded-sm" onClick={() => setIsAddressSelectorOpen(true)}>
                            <div className="text-gray-300 ml-4">Deliver to</div>
                            <div className="font-bold flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {selectedAddress ? `${selectedAddress.city} ${selectedAddress.zip}` : 'Select Location'}
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-3xl relative">
                            <div className="flex h-10 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#FF9900] focus-within:ring-offset-2 focus-within:ring-offset-customBlue">
                                <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 text-xs border-r border-gray-300 flex items-center gap-1 transition-colors">
                                    All Categories <ChevronDown className="h-3 w-3" />
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search Fama Mobil..."
                                    className="flex-1 px-4 text-gray-900 placeholder-gray-500 focus:outline-none"
                                />
                                <button className="bg-[#0A9D0E] hover:bg-green-600 text-white px-5 transition-colors flex items-center justify-center">
                                    <Search className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4 lg:gap-6 text-white flex-shrink-0">
                            {/* Language */}
                            <div className="hidden lg:flex items-center gap-1 hover:outline hover:outline-1 hover:outline-white p-1 rounded-sm cursor-pointer">
                                <span className="font-bold text-sm">EN</span>
                                <ChevronDown className="h-3 w-3" />
                            </div>

                            {/* Account & Lists */}
                            <AccountDropdown />

                            {/* Orders */}
                            <Link to="/orders" className="hidden lg:block hover:outline hover:outline-1 hover:outline-white p-1 rounded-sm">
                                <div className="text-xs">Returns</div>
                                <div className="font-bold text-sm">& Orders</div>
                            </Link>

                            {/* Cart */}
                            <CartSheet />
                        </div>
                    </div>
                </div>
            </header>

            {/* Secondary Navigation - Walmart/Amazon blend */}
            <nav className="bg-white border-b shadow-sm sticky top-[105px] md:top-0 z-30">
                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-4 md:gap-8 py-3 text-sm font-medium overflow-x-auto scrollbar-hide whitespace-nowrap">
                        <button
                            onClick={() => setIsDepartmentMenuOpen(true)}
                            className="hidden md:flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                        >
                            <Menu className="h-5 w-5" />
                            <span>All Departments</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                        <Link to="/category/medicine" className="text-gray-700 hover:text-primary transition-colors">
                            Medicines
                        </Link>
                        <Link to="/category/equipment" className="text-gray-700 hover:text-primary transition-colors">
                            Medical Equipment
                        </Link>
                        <Link to="/category/vitamins" className="text-gray-700 hover:text-primary transition-colors">
                            Vitamins & Supplements
                        </Link>
                        <Link to="/category/first-aid" className="text-gray-700 hover:text-primary transition-colors">
                            First Aid
                        </Link>
                        <Link to="/category/personal-care" className="text-gray-700 hover:text-primary transition-colors">
                            Personal Care
                        </Link>
                        <Link to="#" className="text-[#0A9D0E] font-semibold hover:underline ml-auto">
                            Today's Deals
                        </Link>
                        {user && (
                            <button
                                onClick={() => {
                                    logout();
                                    navigate('/');
                                }}
                                className="text-red-600 hover:underline"
                            >
                                Sign Out
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            <main className="min-h-[60vh] bg-gray-50">
                <Outlet />
            </main>

            {/* Footer - Hidden on cart page */}
            {!isCartPage && (
                <footer className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 mt-12 border-t-4 border-primary">
                    {/* Back to top - Walmart style */}
                    <div className="bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
                        <div className="container mx-auto px-12 py-3 text-center text-sm font-medium text-primary">
                            ↑ Back to top
                        </div>
                    </div>

                    <div className="container mx-auto px-4 md:px-12 py-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            <div>
                                <h3 className="font-bold mb-3 text-foreground">Shop</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><a href="/" className="hover:text-primary hover:underline">All Products</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">New Arrivals</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Best Sellers</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Deals</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-3 text-foreground">Customer Service</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><a href="/" className="hover:text-primary hover:underline">Help Center</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Track Order</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Returns</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Contact Us</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-3 text-foreground">About</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><a href="/" className="hover:text-primary hover:underline">About Us</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Careers</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Press</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Sustainability</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-3 text-foreground">Partners</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><a href="/partner" className="hover:text-primary hover:underline">Become a Partner</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Seller Portal</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Affiliate Program</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Advertise</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-3 text-foreground">Connect</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><a href="/" className="hover:text-primary hover:underline">Facebook</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Twitter</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">Instagram</a></li>
                                    <li><a href="/" className="hover:text-primary hover:underline">YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t bg-white dark:bg-gray-950">
                        <div className="container mx-auto px-12 py-6">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <Link to="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
                                    <span className="text-primary">Fama</span>
                                    <span className="text-[#0A9D0E]">Mobil</span>
                                </Link>
                                <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                    <a href="/" className="hover:text-primary hover:underline">Privacy Policy</a>
                                    <span>|</span>
                                    <a href="/" className="hover:text-primary hover:underline">Terms of Service</a>
                                    <span>|</span>
                                    <a href="/" className="hover:text-primary hover:underline">Cookie Policy</a>
                                    <span>|</span>
                                    <a href="/" className="hover:text-primary hover:underline">Accessibility</a>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    © 2024 Fama Mobil. All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )}

            {/* Address Selector Modal */}
            <AddressSelector
                isOpen={isAddressSelectorOpen}
                onClose={() => setIsAddressSelectorOpen(false)}
                onSelectAddress={(address) => {
                    setSelectedAddress({
                        city: address.city,
                        zip: address.zip
                    });
                }}
            />

            {/* Department Menu */}
            <DepartmentMenu
                isOpen={isDepartmentMenuOpen}
                onClose={() => setIsDepartmentMenuOpen(false)}
            />

            {/* Kolassit AI Chat */}
            <KolassitChat
                isOpen={isKolassitOpen}
                onClose={() => setIsKolassitOpen(false)}
            />
        </div>
    );
};

export default MainLayout;
