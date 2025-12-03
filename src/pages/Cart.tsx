import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Truck, Tag } from 'lucide-react';

const Cart = () => {
    const { items, removeFromCart, updateQuantity, total } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [savedItems, setSavedItems] = useState<string[]>([]);

    const handleSaveForLater = (itemId: string) => {
        setSavedItems([...savedItems, itemId]);
        removeFromCart(itemId);
    };

    const getDeliveryEstimate = () => {
        const today = new Date();
        const minDays = 2;
        const maxDays = 4;
        const minDate = new Date(today);
        minDate.setDate(today.getDate() + minDays);
        const maxDate = new Date(today);
        maxDate.setDate(today.getDate() + maxDays);

        return `${minDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${maxDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    };

    const shippingCost = total > 50 ? 0 : 4.99;
    const discount = total > 100 ? total * 0.05 : 0;
    const finalTotal = total + shippingCost - discount;

    if (!user) {
        return (
            <div className="container mx-auto px-8 md:px-12 lg:px-16 py-12 text-center">
                <h1 className="text-2xl font-bold mb-4">Please sign in to view your cart</h1>
                <Link to="/login" className="text-primary hover:underline">
                    Sign In
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 py-6 max-w-7xl min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Shopping cart</h1>

                {items.length === 0 ? (
                    <div className="bg-white rounded-lg p-12 text-center">
                        <p className="text-xl text-muted-foreground mb-4">Your cart is empty</p>
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Column - Product List (Scrollable) */}
                        <div className="flex-1 lg:w-2/3 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm">
                                    {/* Seller Info */}
                                    <div className="flex items-center justify-between mb-4 pb-4 border-b">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0071ce] to-[#0047D1] flex items-center justify-center text-white text-xs font-bold">
                                                FM
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium">Fama Mobil</div>
                                                <div className="text-xs text-muted-foreground">99.6% positive feedback</div>
                                            </div>
                                        </div>
                                        <button className="text-sm text-blue-600 hover:underline">
                                            Pay only this seller
                                        </button>
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex gap-4">
                                        <Link to={`/product/${item.id}`} className="flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-32 h-32 object-cover rounded border"
                                            />
                                        </Link>

                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div className="flex-1">
                                                    {item.quantity > 1 && (
                                                        <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200 mb-2">
                                                            IN {item.quantity} OTHER CARTS
                                                        </span>
                                                    )}
                                                    <Link
                                                        to={`/product/${item.id}`}
                                                        className="text-lg font-medium hover:text-primary block mb-2"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>

                                                    {item.inStock ? (
                                                        <p className="text-sm text-green-600 mb-2">In Stock</p>
                                                    ) : (
                                                        <p className="text-sm text-red-600 mb-2">Out of Stock</p>
                                                    )}
                                                </div>

                                                <div className="text-right">
                                                    <div className="text-2xl font-bold mb-2">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </div>
                                                    {item.quantity > 1 && (
                                                        <div className="text-sm text-muted-foreground">
                                                            ${item.price.toFixed(2)} each
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Quantity and Shipping */}
                                            <div className="flex items-center gap-4 mt-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-medium">Qty</span>
                                                    <select
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                                        className="border rounded px-3 py-1 text-sm"
                                                    >
                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                            <option key={num} value={num}>{num}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm">
                                                    <Truck className="h-4 w-4 text-green-600" />
                                                    <span className="font-medium text-green-600">
                                                        {item.fastDelivery ? 'Free shipping' : `$${shippingCost.toFixed(2)} delivery`}
                                                    </span>
                                                </div>

                                                <div className="text-sm text-muted-foreground">
                                                    Delivery in {getDeliveryEstimate()}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                                                <button className="text-sm text-blue-600 hover:underline font-medium">
                                                    Buy it now
                                                </button>
                                                <button
                                                    onClick={() => handleSaveForLater(item.id)}
                                                    className="text-sm text-blue-600 hover:underline"
                                                >
                                                    Save for later
                                                </button>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-sm text-blue-600 hover:underline"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Fixed Sidebar */}
                        <aside className="w-full lg:w-1/3 lg:max-w-sm">
                            <div className="lg:sticky lg:top-24 space-y-4">
                                {/* Subtotal Card - FIXED */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h2 className="text-xl font-bold mb-4">
                                        Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} items)
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span>Items ({items.reduce((acc, item) => acc + item.quantity, 0)}):</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Shipping:</span>
                                            <span className={shippingCost === 0 ? 'text-green-600 font-medium' : ''}>
                                                {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                                            </span>
                                        </div>
                                        {discount > 0 && (
                                            <div className="flex justify-between text-sm text-green-600">
                                                <span>Discount (5%):</span>
                                                <span>-${discount.toFixed(2)}</span>
                                            </div>
                                        )}
                                        <div className="border-t pt-3">
                                            <div className="flex justify-between items-baseline">
                                                <span className="text-lg font-bold">Total:</span>
                                                <span className="text-3xl font-bold">${finalTotal.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => navigate('/checkout')}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition-colors mb-3"
                                    >
                                        Go to checkout
                                    </button>

                                    {/* Purchase Protection */}
                                    <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg text-sm">
                                        <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-medium text-blue-900">Purchase protected by</div>
                                            <div className="text-blue-700">Fama Mobil Money Back Guarantee</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Promotional Card - FIXED */}
                                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border border-blue-200">
                                    <div className="flex items-start gap-2">
                                        <Tag className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-bold text-green-900 mb-1">
                                                Earn up to 5X points with your Fama Mobil Mastercard®
                                            </div>
                                            <a href="/" className="text-sm text-blue-600 hover:underline">
                                                See details
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Free Shipping Reminder - FIXED */}
                                {total < 50 && (
                                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                                        <div className="text-sm">
                                            <div className="font-medium text-yellow-900 mb-1">
                                                Add ${(50 - total).toFixed(2)} more for FREE shipping!
                                            </div>
                                            <div className="text-yellow-700">
                                                Orders over $50 qualify for free delivery
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>
                )}

                {/* Saved for Later Section */}
                {savedItems.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Saved for later ({savedItems.length})</h2>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-muted-foreground">Items you've saved for later will appear here</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
