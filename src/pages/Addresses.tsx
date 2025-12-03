import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Addresses = () => {
    const addresses = [
        {
            id: 'default',
            isDefault: true,
            name: 'Okap Fidele Rodolph RF385933',
            address1: '6600 NW 12TH AVE STE 215',
            address2: 'FORT LAUDERDALE, FL 33309-1147',
            country: 'United States',
            phone: '+17865380006',
            deliveryInstructions: 'Add delivery instructions'
        },
        {
            id: '2',
            isDefault: false,
            name: 'Antoine FREDERIC',
            address1: '7903 SW 7TH PL',
            address2: 'NORTH LAUDERDALE, FL 33068-2123',
            country: 'United States',
            phone: '+1754 304-6433',
            deliveryInstructions: 'Add delivery instructions'
        },
        {
            id: '3',
            isDefault: false,
            name: 'Erica Mesidor',
            address1: '30 N GOULD ST 38433',
            address2: 'SHERIDAN, WY 82801-6317',
            country: 'United States',
            phone: '954 831-9103',
            deliveryInstructions: 'Add delivery instructions'
        },
        {
            id: '4',
            isDefault: false,
            name: 'Fidele Rodolph',
            address1: '#728, Rue Sylvestre',
            address2: 'Saint-Raphael, Nord HT1410',
            country: 'Haiti',
            phone: '49046972',
            deliveryInstructions: ''
        },
        {
            id: '5',
            isDefault: false,
            name: 'Fidele Rodolph',
            address1: '5328 CINDERLANE PKWY',
            address2: 'ORLANDO, Florida 32808',
            country: 'United States',
            phone: '3214656833',
            deliveryInstructions: 'Add delivery instructions'
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 max-w-7xl">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-600 mb-4">
                    <Link to="/client" className="hover:text-customBlue hover:underline">Your Account</Link>
                    <span className="mx-2">›</span>
                    <span className="text-customBlue">Your Addresses</span>
                </div>

                <h1 className="text-3xl font-normal text-gray-900 mb-8">Your Addresses</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Add Address Card */}
                    <Link to="/add-address" className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-gray-50 min-h-[280px]">
                        <Plus className="h-12 w-12 text-gray-300 mb-2" />
                        <span className="text-2xl font-bold text-gray-400">Add Address</span>
                    </Link>

                    {/* Address Cards */}
                    {addresses.map((addr) => (
                        <div key={addr.id} className="border border-gray-300 rounded-lg p-6 relative flex flex-col min-h-[280px]">
                            {addr.isDefault && (
                                <div className="text-sm text-gray-600 mb-2 border-b border-gray-100 pb-2">
                                    Default: <span className="font-bold text-gray-800">amazon</span>
                                </div>
                            )}

                            <div className="flex-1">
                                <div className="font-bold text-gray-900 mb-1">{addr.name}</div>
                                <div className="text-gray-900">{addr.address1}</div>
                                <div className="text-gray-900">{addr.address2}</div>
                                <div className="text-gray-900 uppercase mb-2">{addr.country}</div>
                                <div className="text-gray-900 mb-2">Phone number: {addr.phone}</div>
                                {addr.deliveryInstructions && (
                                    <Link to="#" className="text-customBlue text-sm hover:underline hover:text-customDarkBlue">
                                        {addr.deliveryInstructions}
                                    </Link>
                                )}
                            </div>

                            <div className="mt-4 pt-4 flex items-center gap-2 text-sm">
                                <Link to="#" className="text-customBlue hover:underline hover:text-customDarkBlue">Edit</Link>
                                <span className="text-gray-300">|</span>
                                <Link to="#" className="text-customBlue hover:underline hover:text-customDarkBlue">Remove</Link>
                                {!addr.isDefault && (
                                    <>
                                        <span className="text-gray-300">|</span>
                                        <Link to="#" className="text-customBlue hover:underline hover:text-customDarkBlue">Set as Default</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Addresses;
