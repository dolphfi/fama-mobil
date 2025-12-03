import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Heart } from 'lucide-react';

const Wishlist = () => {
    // Mock wishlist data
    const wishlistItems = [
        {
            id: 1,
            title: 'Advanced Medical Kit - Professional Grade',
            price: 129.99,
            image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300&h=300',
            inStock: true
        },
        {
            id: 2,
            title: 'Digital Blood Pressure Monitor',
            price: 45.50,
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=300&h=300',
            inStock: true
        },
        {
            id: 3,
            title: 'Vitamin C Supplement (1000mg)',
            price: 15.99,
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300&h=300',
            inStock: false
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 max-w-7xl">
                <div className="flex items-center gap-3 mb-8">
                    <Heart className="h-8 w-8 text-customBlue fill-current" />
                    <h1 className="text-3xl font-normal text-gray-900">Your Wishlist</h1>
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-600 mb-6">Explore more items and add them to your wishlist!</p>
                        <Link to="/" className="px-6 py-2 bg-customGreen hover:bg-green-700 text-white font-medium rounded-md shadow-sm transition-colors">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white flex flex-col">
                                <div className="relative pt-[100%] bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <Link to={`/product/${item.id}`} className="text-lg font-medium text-gray-900 hover:text-customBlue hover:underline mb-2 line-clamp-2">
                                        {item.title}
                                    </Link>
                                    <div className="text-xl font-bold text-gray-900 mb-2">
                                        ${item.price.toFixed(2)}
                                    </div>
                                    <div className={`text-sm mb-4 ${item.inStock ? 'text-customGreen' : 'text-red-600'}`}>
                                        {item.inStock ? 'In Stock' : 'Currently Unavailable'}
                                    </div>

                                    <div className="mt-auto space-y-2">
                                        <button
                                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-customGreen hover:bg-green-700 text-white font-medium rounded-full shadow-sm transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={!item.inStock}
                                        >
                                            <ShoppingCart className="h-4 w-4" />
                                            Add to Cart
                                        </button>
                                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-full transition-colors text-sm">
                                            <Trash2 className="h-4 w-4" />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
