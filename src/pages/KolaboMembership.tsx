import React from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, AlertCircle } from 'lucide-react';

const KolaboMembership = () => {
    return (
        <div className="bg-white min-h-screen pb-12">
            {/* Top Bar */}
            <div className="bg-gray-100 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                            <User className="h-8 w-8" />
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="text-customBlue font-bold italic">✓kolabo</span>
                            </div>
                            <div className="font-bold text-xl text-gray-900">Fidèle Rodolph</div>
                            <div className="text-sm text-gray-600">Kolabo for Young Adults</div>
                        </div>
                    </div>

                    <div className="flex-1 w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-t md:border-t-0 border-gray-300 pt-4 md:pt-0">
                        <div className="md:border-l border-gray-300 md:pl-8">
                            <div className="font-bold text-gray-700 mb-1">Kolabo Plan</div>
                            <div className="text-lg text-gray-900 mb-1">Monthly $7.49 <span className="text-sm text-gray-600">(plus tax)</span></div>
                            <Link to="#" className="text-customBlue text-sm hover:underline flex items-center">
                                Save $20.88 with Annual plan <ChevronDown className="h-3 w-3 ml-1" />
                            </Link>
                        </div>
                        <div className="md:border-l border-gray-300 md:pl-8">
                            <div className="font-bold text-gray-700 mb-1">Renewal Date</div>
                            <div className="text-lg text-gray-900 mb-1">December 17, 2025</div>
                            <Link to="#" className="text-customBlue text-sm hover:underline flex items-center">
                                Update your payment method <ChevronDown className="h-3 w-3 ml-1" />
                            </Link>
                        </div>
                        <div className="md:border-l border-gray-300 md:pl-8">
                            <div className="font-bold text-gray-700 mb-1">Manage Membership</div>
                            <div className="text-lg text-gray-900 mb-1">Update, cancel and more</div>
                            <Link to="#" className="text-customBlue text-sm hover:underline flex items-center">
                                Update, cancel and more <ChevronDown className="h-3 w-3 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 max-w-7xl space-y-8">
                {/* Warning Banner */}
                <div className="border border-red-600 rounded-lg p-4 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">We are unable to charge you for Kolabo due to insufficient funds</h3>
                            <p className="text-gray-700 mt-1">Add a valid payment method in 5 days to avoid losing your Kolabo benefits.</p>
                        </div>
                    </div>
                    <button className="px-6 py-1.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 shadow-sm whitespace-nowrap">
                        Please update your payment method
                    </button>
                </div>

                {/* Promotional Banner */}
                <div className="border-2 border-customBlue rounded-lg p-8 md:p-12 text-center bg-white shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your time is valuable, get it back with Kolabo</h2>
                    <p className="text-xl text-gray-800 mb-8 max-w-4xl mx-auto">
                        Enjoy FREE and fast delivery on millions of items—from essentials to electronics—right to your door
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
                        Plus, access exclusive deals, entertainment benefits and more with your membership
                    </p>
                    <button className="px-8 py-3 bg-customGreen hover:bg-green-700 text-white font-medium rounded-full shadow-sm transition-colors">
                        Explore Kolabo now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default KolaboMembership;
