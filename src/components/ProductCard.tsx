import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from './StarRating';
import { ShoppingCart, Truck } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart(product);
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

    // Random number of other carts for demo
    const otherCarts = Math.floor(Math.random() * 10) + 1;

    return (
        <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
            {/* Seller Info Header */}
            <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0071ce] to-[#0047D1] flex items-center justify-center text-white text-xs font-bold">
                        FM
                    </div>
                    <div>
                        <div className="text-sm font-medium">Fama Mobil</div>
                        <div className="text-xs text-muted-foreground">99.6% positive feedback</div>
                    </div>
                </div>
            </div>

            <Link to={`/product/${product.id}`} className="block">
                <div className="p-4">
                    {/* Badge for popular items */}
                    {otherCarts > 5 && (
                        <div className="mb-2">
                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200">
                                IN {otherCarts} OTHER CARTS
                            </span>
                        </div>
                    )}

                    {/* Product Image */}
                    <div className="relative mb-4 bg-gray-50 rounded-lg overflow-hidden group">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {!product.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white font-bold">Out of Stock</span>
                            </div>
                        )}
                    </div>

                    {/* Product Title */}
                    <h3 className="text-base font-medium mb-2 line-clamp-2 hover:text-primary">
                        {product.name}
                    </h3>

                    {/* Condition */}
                    <p className="text-sm text-muted-foreground mb-3">New with tags</p>

                    {/* Rating */}
                    {product.rating && (
                        <div className="flex items-center gap-2 mb-3">
                            <StarRating rating={product.rating} size="sm" />
                            {product.reviewCount && (
                                <span className="text-sm text-muted-foreground">
                                    ({product.reviewCount})
                                </span>
                            )}
                        </div>
                    )}

                    {/* Price */}
                    <div className="mb-3">
                        <div className="text-2xl font-bold text-foreground">
                            ${product.price.toFixed(2)}
                        </div>
                    </div>

                    {/* Shipping Info */}
                    <div className="space-y-1 mb-4">
                        {product.fastDelivery ? (
                            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                                <Truck className="h-4 w-4" />
                                <span>Free shipping</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Truck className="h-4 w-4" />
                                <span>$4.99 shipping</span>
                            </div>
                        )}
                        <div className="text-xs text-muted-foreground">
                            Delivery: {getDeliveryEstimate()}
                        </div>
                        {product.fastDelivery && (
                            <div className="text-xs text-muted-foreground">Free returns</div>
                        )}
                    </div>
                </div>
            </Link>

            {/* Action Buttons */}
            <div className="px-4 pb-4 space-y-2">
                <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <ShoppingCart className="h-4 w-4" />
                    Add to cart
                </button>
                <div className="flex items-center justify-center gap-4 text-sm">
                    <button className="text-blue-600 hover:underline">Buy it now</button>
                    <button className="text-blue-600 hover:underline">Add to watchlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
