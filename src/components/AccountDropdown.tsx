import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ChevronDown } from 'lucide-react';

interface AccountDropdownProps {
    trigger?: React.ReactNode;
}

const AccountDropdown = ({ trigger }: AccountDropdownProps) => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const [isHoverEnabled, setIsHoverEnabled] = useState(false);

    // Check for hover capability to prevent double-firing on touch devices
    React.useEffect(() => {
        const checkHover = () => {
            setIsHoverEnabled(window.matchMedia('(hover: hover)').matches);
        };
        checkHover();
        window.addEventListener('resize', checkHover);
        return () => window.removeEventListener('resize', checkHover);
    }, []);

    // Close on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => isHoverEnabled && setIsOpen(true)}
            onMouseLeave={() => isHoverEnabled && setIsOpen(false)}
            onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
            }}
        >
            {trigger ? (
                trigger
            ) : (
                user ? (
                    <div className="px-2 py-1 hover:outline hover:outline-1 hover:outline-white rounded cursor-pointer">
                        <div className="text-xs">Hello, {user.name}</div>
                        <div className="font-bold text-sm flex items-center gap-1">
                            Account & Lists <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="px-2 py-1 hover:outline hover:outline-1 hover:outline-white rounded block"
                    >
                        <div className="text-xs">Hello, sign in</div>
                        <div className="font-bold text-sm flex items-center gap-1">
                            Account & Lists <ChevronDown className="h-4 w-4" />
                        </div>
                    </Link>
                )
            )}

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white text-gray-900 rounded-md shadow-lg border w-[300px] md:w-[500px] z-50">
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column - Your Lists */}
                            <div className="border-b pb-4 md:border-b-0 md:pb-0 md:border-r md:pr-4">
                                <h3 className="font-bold text-lg mb-3">Your Lists</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Create a List</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Find a List or Registry</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Your Saved Books</Link></li>
                                    <li>
                                        <Link to="#" className="hover:text-customBlue hover:underline">Wishlist</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Column - Your Account */}
                            <div>
                                <h3 className="font-bold text-lg mb-3">Your Account</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><Link to="/client" className="hover:text-customBlue hover:underline">Account</Link></li>
                                    <li><Link to="/orders" className="hover:text-customBlue hover:underline">Orders</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Recommendations</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Browsing History</Link></li>
                                    <li><Link to="/wishlist" className="hover:text-customBlue hover:underline">Wishlist</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Video Purchases & Rentals</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Kindle Unlimited</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Content & Devices</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Subscribe & Save Items</Link></li>
                                    <li><Link to="/subscriptions" className="block hover:text-customBlue hover:underline">Memberships & Subscriptions</Link></li>
                                    <li><Link to="/kolabo-membership" className="block hover:text-customBlue hover:underline">Kolabo Membership</Link></li>
                                    <li><Link to="#" className="hover:text-customBlue hover:underline">Music Library</Link></li>
                                    <li><Link to="/sell" className="hover:text-customBlue hover:underline">Start a Selling Account</Link></li>
                                    <li>
                                        {user ? (
                                            <button
                                                onClick={logout}
                                                className="hover:text-customBlue hover:underline text-left"
                                            >
                                                Sign Out
                                            </button>
                                        ) : (
                                            <Link to="/login" className="hover:text-customBlue hover:underline">Sign In</Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountDropdown;
