import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const AddAddress = () => {
    const navigate = useNavigate();
    const [country, setCountry] = useState('United States');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [isDefault, setIsDefault] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically save the address
        console.log({ country, fullName, phone, address1, address2, city, state, zip, isDefault });
        navigate('/addresses');
    };

    return (
        <div className="bg-white min-h-screen pb-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 max-w-3xl">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-600 mb-4">
                    <Link to="/client" className="hover:text-customBlue hover:underline">Your Account</Link>
                    <span className="mx-2">›</span>
                    <Link to="/addresses" className="hover:text-customBlue hover:underline">Your Addresses</Link>
                    <span className="mx-2">›</span>
                    <span className="text-customBlue">New Address</span>
                </div>

                <h1 className="text-3xl font-normal text-gray-900 mb-6">Add a new address</h1>

                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-customBlue text-white rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="font-bold text-gray-900">Save time. Autofill your current location.</span>
                    </div>
                    <button className="px-4 py-1 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 shadow-sm">
                        Autofill
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-1">Country/Region</label>
                        <div className="relative">
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-customBlue focus:border-transparent appearance-none bg-gray-50 hover:bg-gray-100 cursor-pointer"
                            >
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="Haiti">Haiti</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-1">Full name (First and Last name)</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-customBlue focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-1">Phone number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="May be used to assist delivery"
                            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-customBlue focus:border-transparent"
                        />
                        <p className="text-xs text-gray-600 mt-1">May be used to assist delivery</p>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-1">Address</label>
                        <input
                            type="text"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            placeholder="Street address or P.O. Box"
                            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-customBlue focus:border-transparent mb-2"
                        />
                        <input
                            type="text"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            placeholder="Apt, suite, unit, building, floor, etc."
                            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-customBlue focus:border-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-1">City</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-customBlue focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-1">State</label>
                            <div className="relative">
                                <select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-customBlue focus:border-transparent appearance-none bg-gray-50 hover:bg-gray-100 cursor-pointer"
                                >
                                    <option value="">Select</option>
                                    <option value="FL">Florida</option>
                                    <option value="NY">New York</option>
                                    <option value="CA">California</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-1">ZIP Code</label>
                            <input
                                type="text"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-customBlue focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 py-2">
                        <input
                            type="checkbox"
                            id="default-address"
                            checked={isDefault}
                            onChange={(e) => setIsDefault(e.target.checked)}
                            className="h-4 w-4 text-customBlue border-gray-300 rounded focus:ring-customBlue"
                        />
                        <label htmlFor="default-address" className="text-sm text-gray-900">Make this my default address</label>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <button
                            type="button"
                            onClick={() => setShowInstructions(!showInstructions)}
                            className="flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-customBlue"
                        >
                            {showInstructions ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                            Delivery instructions (optional)
                        </button>
                        {showInstructions && (
                            <div className="mt-2 pl-5">
                                <Link to="#" className="text-sm text-customBlue hover:underline hover:text-customDarkBlue">
                                    Add preferences, notes, access codes and more
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-customGreen hover:bg-green-700 text-white font-medium rounded-md shadow-sm transition-colors text-sm"
                        >
                            Add address
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAddress;
