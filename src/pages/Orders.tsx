import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, Package, ChevronDown } from 'lucide-react';
import { Separator } from '../components/ui/separator';

// Mock orders data
const mockOrders = [
    {
        id: '113-9738539-2207441',
        date: 'December 2, 2025',
        total: 98.19,
        shipTo: 'Okap Fidele Rodolph RF385933',
        status: 'arriving',
        arrivalDate: 'December 8 - December 10',
        items: [
            {
                id: '1',
                name: 'Paracetamol 500mg - Pain reliever and fever reducer',
                image: 'https://placehold.co/100x100/0047D1/FFFFFF?text=Paracetamol',
                quantity: 3,
                price: 5.00
            }
        ]
    },
    {
        id: '113-2912054-7802658',
        date: 'November 24, 2025',
        total: 21.78,
        shipTo: 'Okap Fidele Rodolph RF385933',
        status: 'delivered',
        deliveredDate: 'November 28, 2025',
        items: [
            {
                id: '3',
                name: 'Digital Thermometer - Accurate body temperature measurement',
                image: 'https://placehold.co/100x100/0A9D0E/FFFFFF?text=Thermometer',
                quantity: 1,
                price: 25.00
            }
        ]
    },
    {
        id: '113-8765432-1234567',
        date: 'November 15, 2025',
        total: 45.00,
        shipTo: 'Okap Fidele Rodolph RF385933',
        status: 'delivered',
        deliveredDate: 'November 20, 2025',
        items: [
            {
                id: '4',
                name: 'Blood Pressure Monitor - Automatic upper arm monitor',
                image: 'https://placehold.co/100x100/0A9D0E/FFFFFF?text=BP+Monitor',
                quantity: 1,
                price: 45.00
            }
        ]
    }
];

const Orders = () => {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [timeFilter, setTimeFilter] = useState('past 3 months');

    if (!user) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold mb-4">Please sign in to view your orders</h1>
                <Link to="/login" className="text-customBlue hover:underline">
                    Sign In
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-background min-h-screen">
            <div className="container mx-auto px-8 md:px-12 lg:px-16 py-6 max-w-7xl">
                {/* Breadcrumb */}
                <div className="text-sm text-muted-foreground mb-4">
                    <Link to="/" className="hover:text-customBlue">Your Account</Link>
                    <span className="mx-2">›</span>
                    <span className="text-foreground">Your Orders</span>
                </div>

                {/* Header and Search */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h1 className="text-3xl font-normal">Your Orders</h1>
                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search all orders"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-customBlue focus:border-transparent outline-none shadow-sm"
                            />
                        </div>
                        <button className="px-6 py-2 bg-customBlue text-white hover:bg-customDarkBlue rounded-full font-medium shadow-sm transition-colors whitespace-nowrap">
                            Search Orders
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                    <div className="flex gap-8 overflow-x-auto pb-px">
                        <button className="pb-3 border-b-2 border-customBlue font-bold text-black whitespace-nowrap">
                            Orders
                        </button>
                        <Separator orientation="vertical" className="h-6" />
                        <button className="pb-3 text-customBlue hover:text-customDarkBlue hover:underline whitespace-nowrap">
                            Buy Again
                        </button>
                        <Separator orientation="vertical" className="h-6" />
                        <button className="pb-3 text-customBlue hover:text-customDarkBlue hover:underline whitespace-nowrap">
                            Not Yet Shipped
                        </button>
                        <Separator orientation="vertical" className="h-6" />
                        <button className="pb-3 text-customBlue hover:text-customDarkBlue hover:underline whitespace-nowrap">
                            Digital Orders
                        </button>
                        <Separator orientation="vertical" className="h-6" />
                        <button className="pb-3 text-customBlue hover:text-customDarkBlue hover:underline whitespace-nowrap">
                            Bousanm Pay
                        </button>
                    </div>
                </div>

                {/* Filter */}
                <div className="mb-6 flex items-center">
                    <span className="text-sm font-medium mr-2">{mockOrders.length} orders placed in</span>
                    <select
                        value={timeFilter}
                        onChange={(e) => setTimeFilter(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-gray-50 shadow-sm focus:ring-customBlue focus:border-customBlue outline-none"
                    >
                        <option>past 3 months</option>
                        <option>past 6 months</option>
                        <option>2025</option>
                        <option>2024</option>
                    </select>
                </div>

                {/* Orders List */}
                <div className="space-y-6">
                    {mockOrders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden">
                            {/* Order Header */}
                            <div className="bg-gray-50 px-6 py-4 grid grid-cols-4 gap-4 text-sm text-gray-600 border-b border-gray-200">
                                <div>
                                    <div className="text-xs font-bold uppercase mb-1">ORDER PLACED</div>
                                    <div className="text-gray-800">{order.date}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase mb-1">TOTAL</div>
                                    <div className="text-gray-800">${order.total.toFixed(2)}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase mb-1">SHIP TO</div>
                                    <div className="text-customBlue hover:text-customDarkBlue hover:underline cursor-pointer flex items-center gap-1 group">
                                        {order.shipTo.split(' ').slice(0, 2).join(' ')}
                                        <ChevronDown className="h-3 w-3 group-hover:text-customDarkBlue" />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold uppercase mb-1">ORDER # {order.id}</div>
                                    <div className="text-xs flex justify-end gap-4">
                                        <Link to="#" className="text-customBlue hover:text-customDarkBlue hover:underline">
                                            View order details
                                        </Link>
                                        <div className="w-px bg-gray-300 h-4"></div>
                                        <Link to="#" className="text-customBlue hover:text-customDarkBlue hover:underline">
                                            View invoice
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Order Items */}
                            <div className="p-6">
                                {order.status === 'arriving' && (
                                    <div className="mb-6">
                                        <div className="text-lg font-bold text-customGreen mb-1">
                                            Arriving {order.arrivalDate}
                                        </div>
                                        <div className="h-2 w-full max-w-md bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-customGreen w-2/3"></div>
                                        </div>
                                    </div>
                                )}

                                {order.status === 'delivered' && (
                                    <div className="mb-6">
                                        <div className="text-lg font-bold text-gray-800 mb-1">
                                            Delivered {order.deliveredDate}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Package was left near the front door or porch
                                        </div>
                                    </div>
                                )}

                                {order.items.map((item) => (
                                    <div key={item.id} className="flex flex-col md:flex-row gap-6 mb-6 last:mb-0">
                                        <Link to={`/product/${item.id}`} className="flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-24 h-24 object-contain p-2"
                                            />
                                        </Link>
                                        <div className="flex-1">
                                            <Link
                                                to={`/product/${item.id}`}
                                                className="text-customBlue hover:text-customDarkBlue hover:underline font-medium text-lg mb-1 block"
                                            >
                                                {item.name}
                                            </Link>
                                            <div className="text-sm text-gray-600 mb-4">
                                                Return window closed on Jan 31, 2026
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="px-4 py-1.5 bg-customGreen hover:bg-green-700 text-white rounded-lg text-sm shadow-sm flex items-center">
                                                    <Package className="h-4 w-4 mr-2" />
                                                    Buy it again
                                                </button>
                                                <button className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 shadow-sm">
                                                    View your item
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full md:w-64">
                                            {order.status === 'arriving' && (
                                                <button className="w-full py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 shadow-sm font-medium">
                                                    Track package
                                                </button>
                                            )}
                                            <button className="w-full py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 shadow-sm">
                                                View or edit order
                                            </button>
                                            <button className="w-full py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 shadow-sm">
                                                Ask Product Question
                                            </button>
                                            <button className="w-full py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 shadow-sm">
                                                Write a product review
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
