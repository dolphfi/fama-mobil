import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, CreditCard } from 'lucide-react';
import { Separator } from '../components/ui/separator';


const Subscriptions = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="bg-white min-h-screen pb-12">
            {/* Top Navigation Bar (Mocking the screenshot's top bar context if needed, but we have MainLayout) */}

            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 max-w-7xl">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-600 mb-2">
                    <Link to="/client" className="hover:text-customBlue hover:underline">Your Account</Link>
                    <span className="mx-2">›</span>
                    <span className="text-customBlue">Your Memberships & Subscriptions</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <h1 className="text-3xl font-normal text-gray-900">Your Memberships & Subscriptions</h1>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search Your Subscriptions"
                                        className="pl-9 pr-4 py-1.5 border border-gray-400 rounded-md text-sm w-64 focus:ring-2 focus:ring-customBlue focus:border-transparent outline-none shadow-sm"
                                    />
                                </div>
                                <button className="px-4 py-1.5 bg-customBlue text-white text-sm font-medium rounded-md hover:bg-customDarkBlue shadow-sm">
                                    Go
                                </button>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-gray-700">View:</span>
                                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-gray-50 shadow-sm flex items-center gap-2 hover:bg-gray-100">
                                    All Subscriptions <ChevronDown className="h-3 w-3" />
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-gray-700">Sort by:</span>
                                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-gray-50 shadow-sm flex items-center gap-2 hover:bg-gray-100">
                                    Featured <ChevronDown className="h-3 w-3" />
                                </button>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600 mb-6">
                            Showing 1 to 2 of 2 subscriptions
                        </div>

                        {/* Subscription Items */}
                        <div className="space-y-8">
                            {/* Fama Prime */}
                            <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200">
                                <div className="w-48 flex-shrink-0">
                                    <div className="text-customBlue font-bold text-2xl italic mb-1">prime</div>
                                    <div className="font-bold text-lg text-gray-900">Fama Prime</div>
                                    <div className="text-sm text-gray-600">Includes Prime Delivery, Prime Video, Prime Music and more.</div>
                                </div>
                                <Separator orientation="vertical" className="hidden md:block h-auto" />

                                <div className="flex-1 flex flex-col md:flex-row gap-6">
                                    <div>
                                        <div className="font-bold text-lg text-gray-900">$7.49 <span className="text-sm font-normal text-gray-600">/ Month</span></div>
                                        <div className="text-sm text-gray-600 mb-2">Renews on December 17, 2025</div>
                                        <Link to="#" className="text-customBlue text-sm hover:text-customDarkBlue hover:underline">Payment history</Link>
                                    </div>
                                    <Separator orientation="vertical" className="hidden md:block h-auto" />
                                    <div>
                                        <div className="font-bold text-lg text-gray-900 mb-1">Payment method</div>
                                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                                            <CreditCard className="h-4 w-4 text-gray-500" />
                                            MasterCard ending in 6005
                                        </div>
                                        <Link to="#" className="text-customBlue text-sm hover:text-customDarkBlue hover:underline block mb-2">Change</Link>
                                        <div className="text-sm text-gray-600">
                                            Changes to this payment method also updates your payment method for recurring <span className="font-bold">ad free</span> and <span className="font-bold">all Prime Video Channel</span> subscriptions.
                                        </div>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="hidden md:block h-auto" />
                                <div className="w-full md:w-64 flex flex-col gap-3">
                                    <button className="w-full py-1.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 shadow-sm">
                                        Cancel Subscription
                                    </button>
                                    <button className="w-full py-1.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 shadow-sm">
                                        Prime Membership Settings
                                    </button>
                                </div>
                            </div>

                            {/* Fama Kids+ */}
                            <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200">
                                <div className="w-48 flex-shrink-0">
                                    <div className="text-customBlue font-bold text-xl italic leading-tight">fama</div>
                                    <div className="text-pink-600 font-bold text-2xl italic leading-tight mb-1">kids+</div>
                                    <div className="font-bold text-lg text-gray-900">Fama Kids+</div>
                                    <div className="text-sm text-gray-600">Thousands of kid-friendly apps, videos, books, and more.</div>
                                </div>
                                <Separator orientation="vertical" className="hidden md:block h-auto" />
                                <div className="flex-1 flex flex-col md:flex-row gap-6">
                                    <div>
                                        <div className="font-bold text-lg text-red-600 mb-1">Expired</div>
                                        <div className="text-sm text-gray-600 mb-2">Ended on June 14, 2024</div>
                                        <Link to="#" className="text-customBlue text-sm hover:text-customDarkBlue hover:underline">Payment history</Link>
                                    </div>
                                    <Separator orientation="vertical" className="hidden md:block h-auto" />
                                    <div>
                                        <div className="font-bold text-lg text-gray-900 mb-1">Payment method</div>
                                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                                            <CreditCard className="h-4 w-4 text-gray-500" />
                                            Visa ending in 4242
                                        </div>
                                        <Link to="#" className="text-customBlue text-sm hover:text-customDarkBlue hover:underline block mb-2">Change</Link>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="hidden md:block h-auto" />
                                <div className="w-full md:w-64 flex flex-col gap-3">
                                    <button className="w-full py-1.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 shadow-sm">
                                        Fama Kids+ Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Ad */}
                    {/* <div className="hidden lg:block w-72 flex-shrink-0">
                        <div className="border border-gray-200 rounded-lg p-4 bg-white">
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-right w-full">
                                    <div className="text-xl font-bold">$12.99</div>
                                    <div className="text-customBlue font-bold italic flex justify-end items-center">
                                        <span className="text-black not-italic mr-1">✓</span> prime
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 mb-4">
                                Eligible for FREE Same-Day, Overnight or Tomorrow delivery
                            </div>
                            <button className="w-full py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 shadow-sm mb-4">
                                Go to Cart
                            </button>

                            <Separator className="my-4" />

                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">USB</div>
                                    <span className="font-bold">$9.99</span>
                                </div>
                                <div className="text-customBlue font-bold italic text-sm">✓prime</div>
                            </div>
                            <button className="w-full py-1 bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] rounded-full text-sm shadow-sm flex items-center justify-center gap-2">
                                Add to Cart
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;
