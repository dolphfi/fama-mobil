import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface Address {
    id: string;
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    isDefault?: boolean;
}

interface AddressSelectorProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectAddress: (address: Address) => void;
}

const mockAddresses: Address[] = [
    {
        id: '1',
        name: 'Okap Fidele Rodolph RF385933',
        street: '660D NW 12TH AVE STE 215',
        city: 'FORT LAUDERDALE',
        state: 'FL',
        zip: '33309',
        isDefault: true
    },
    {
        id: '2',
        name: 'Antoine FREDERIC',
        street: '7903 SW 7TH PL, NORTH LAUDERDALE',
        city: 'LAUDERDALE',
        state: 'FL',
        zip: '33068',
        isDefault: false
    },
    {
        id: '3',
        name: 'Erica Mesidor',
        street: '30 N GOULD ST 38433',
        city: 'SHERIDAN',
        state: 'WY',
        zip: '82801',
        isDefault: false
    }
];

const AddressSelector: React.FC<AddressSelectorProps> = ({ isOpen, onClose, onSelectAddress }) => {
    const [zipCode, setZipCode] = useState('');
    const [selectedAddressId, setSelectedAddressId] = useState(mockAddresses.find(a => a.isDefault)?.id || '');

    if (!isOpen) return null;

    const handleApply = () => {
        const selectedAddress = mockAddresses.find(a => a.id === selectedAddressId);
        if (selectedAddress) {
            onSelectAddress(selectedAddress);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white w-full sm:max-w-lg max-h-[85vh] flex flex-col rounded-t-xl sm:rounded-xl shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
                    <h2 className="text-lg font-bold">Choose your location</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-4">
                    <p className="text-sm text-muted-foreground mb-4">
                        Delivery options and delivery speeds may vary for different locations
                    </p>

                    {/* Address List */}
                    <div className="space-y-3 mb-6">
                        {mockAddresses.map((address) => (
                            <div
                                key={address.id}
                                onClick={() => setSelectedAddressId(address.id)}
                                className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${selectedAddressId === address.id
                                    ? 'border-primary bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <input
                                        type="radio"
                                        checked={selectedAddressId === address.id}
                                        onChange={() => setSelectedAddressId(address.id)}
                                        className="mt-1"
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium text-sm">{address.name} {address.zip}</div>
                                        <div className="text-xs text-muted-foreground">
                                            {address.street}, {address.city} {address.state} {address.zip}
                                        </div>
                                        {address.isDefault && (
                                            <div className="text-xs text-primary font-medium mt-1">Default address</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mb-6 text-sm">
                        <button className="text-blue-600 hover:text-blue-800 hover:underline">
                            See all
                        </button>
                        <Link to="/addresses" className="text-blue-600 hover:text-blue-800 hover:underline" onClick={onClose}>
                            Manage address book
                        </Link>
                    </div>

                    {/* Zip Code Input */}
                    <div className="mb-4">
                        <div className="text-sm text-center text-muted-foreground mb-3">
                            or enter a US zip code
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                placeholder="Enter zip code"
                                maxLength={5}
                                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button
                                onClick={() => {
                                    if (zipCode.length === 5) {
                                        // Handle zip code submission
                                        console.log('Zip code:', zipCode);
                                    }
                                }}
                                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-medium transition-colors"
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    {/* Ship Outside US */}
                    <div className="text-sm text-center text-muted-foreground mb-4">
                        or ship outside the US
                    </div>

                    <select className="w-full px-4 py-2 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Choose</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>United Kingdom</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Other</option>
                    </select>

                    {/* Done Button */}
                    <button
                        onClick={handleApply}
                        className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-3 rounded-full transition-colors"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddressSelector;
