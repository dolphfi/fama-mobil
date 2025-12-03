import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';
import { Truck, Shield, RotateCcw, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === id);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Link to="/" className="text-customBlue hover:underline mt-4 inline-block">
                    Return to Home
                </Link>
            </div>
        );
    }

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-white dark:bg-background">
            {/* Breadcrumb */}
            <div className="border-b">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link to="/" className="hover:text-customBlue">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link to={`/category/${product.category}`} className="hover:text-customBlue capitalize">
                            {product.category}
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Image */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-4">
                            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Middle: Details */}
                    <div className="lg:col-span-1">
                        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

                        <div className="flex items-center gap-2 mb-4">
                            <StarRating rating={product.rating} size="md" showNumber />
                            <span className="text-sm text-customBlue hover:text-customDarkBlue cursor-pointer">
                                {product.reviewCount.toLocaleString()} ratings
                            </span>
                        </div>

                        <div className="border-t border-b py-4 mb-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-foreground">
                                    ${product.price.toFixed(2)}
                                </span>
                            </div>
                            {product.fastDelivery && (
                                <div className="flex items-center gap-2 mt-2 text-sm text-customGreen">
                                    <Truck className="h-4 w-4" />
                                    <span className="font-medium">Fast Delivery Available</span>
                                </div>
                            )}
                        </div>

                        <div className="mb-6">
                            <h2 className="font-bold mb-2">About this item</h2>
                            <p className="text-sm text-muted-foreground">{product.description}</p>
                        </div>

                        {product.specifications && (
                            <div className="mb-6">
                                <h2 className="font-bold mb-3">Product Specifications</h2>
                                <div className="space-y-2">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="flex text-sm">
                                            <span className="font-medium w-1/3">{key}:</span>
                                            <span className="text-muted-foreground w-2/3">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                                <Shield className="h-5 w-5 text-customBlue" />
                                <span>Secure transaction</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <RotateCcw className="h-5 w-5 text-customBlue" />
                                <span>30-day return policy</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Buy Box */}
                    <div className="lg:col-span-1">
                        <div className="border rounded-lg p-4 sticky top-4">
                            <div className="text-2xl font-bold mb-4">
                                ${product.price.toFixed(2)}
                            </div>

                            {product.fastDelivery && (
                                <div className="mb-4">
                                    <div className="text-sm font-medium text-customGreen">Fast Delivery</div>
                                    <div className="text-sm text-muted-foreground">
                                        Order within 2 hours for delivery tomorrow
                                    </div>
                                </div>
                            )}

                            {product.inStock ? (
                                <div className="text-customGreen font-medium mb-4">In Stock</div>
                            ) : (
                                <div className="text-red-600 font-medium mb-4">Out of Stock</div>
                            )}

                            <div className="mb-4">
                                <label className="text-sm font-medium mb-2 block">Quantity:</label>
                                <select
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="w-full border rounded-md px-3 py-2 bg-white dark:bg-background"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                onClick={() => {
                                    for (let i = 0; i < quantity; i++) {
                                        addToCart(product);
                                    }
                                }}
                                disabled={!product.inStock}
                                className="w-full bg-customGreen hover:bg-green-700 text-white font-medium py-2 rounded-full mb-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Add to Cart
                            </button>

                            <button
                                disabled={!product.inStock}
                                className="w-full bg-customBlue hover:bg-customDarkBlue text-white font-medium py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Buy Now
                            </button>

                            <div className="mt-4 text-xs text-muted-foreground space-y-1">
                                <div>Ships from: Fama Mobil</div>
                                <div>Sold by: Fama Mobil</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(relatedProduct => (
                                <ProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
