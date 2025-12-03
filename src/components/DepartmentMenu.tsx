import React from 'react';
import { X, ChevronRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface DepartmentMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const DepartmentMenu: React.FC<DepartmentMenuProps> = ({ isOpen, onClose }) => {
    const { user, logout } = useAuth();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={onClose}
            />

            {/* Slide-out Menu */}
            <div className="relative bg-white w-full max-w-sm h-full overflow-y-auto shadow-xl animate-in slide-in-from-left">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0071ce] to-[#0047D1] text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold">👤</span>
                        </div>
                        <div>
                            <div className="font-bold text-lg">
                                {user ? `Hello, ${user.name}` : 'Hello, sign in'}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Menu Content */}
                <div className="divide-y">
                    {/* Trending */}
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-3">Trending</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" onClick={onClose} className="block py-2 hover:text-primary">
                                    Best Sellers
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={onClose} className="block py-2 hover:text-primary">
                                    New Releases
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={onClose} className="block py-2 hover:text-primary">
                                    Movers & Shakers
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={onClose} className="block py-2 hover:text-primary">
                                    Prescription Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Shop by Department */}
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-3">Shop by Department</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    to="/category/medicine"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Medicines & Pharmaceuticals</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/equipment"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Medical Equipment</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/vitamins"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Vitamins & Supplements</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/first-aid"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>First Aid & Safety</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/personal-care"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Personal Care</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/wellness"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Wellness & Fitness</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <button className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary">
                                    See all
                                    <ChevronRight className="h-4 w-4 rotate-90" />
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Programs & Features */}
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-3">Programs & Features</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    to="#"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Same-Day Delivery</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Medical Care & Pharmacy</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Fama Mobil Physical Stores</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                >
                                    <span>Subscription & Save</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </Link>
                            </li>
                            <li>
                                <button className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary">
                                    See all
                                    <ChevronRight className="h-4 w-4 rotate-90" />
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Help & Settings */}
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-3">Help & Settings</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" onClick={onClose} className="block py-2 hover:text-primary">
                                    Your Account
                                </Link>
                            </li>
                            <li>
                                <button className="flex items-center gap-2 py-2 text-gray-700">
                                    <Globe className="h-5 w-5" />
                                    <span>English</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center gap-2 py-2 text-gray-700">
                                    <span className="text-xl">🇺🇸</span>
                                    <span>United States</span>
                                </button>
                            </li>
                            {user && (
                                <li>
                                    <button
                                        onClick={() => {
                                            logout();
                                            onClose();
                                        }}
                                        className="block py-2 text-gray-700 hover:text-primary"
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentMenu;
