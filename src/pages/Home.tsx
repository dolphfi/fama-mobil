import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
    return (
        <div className="bg-gray-100 dark:bg-background min-h-screen pb-12">
            {/* Hero Section */}
            <div className="relative bg-gray-800 h-[300px] md:h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-background z-10 h-full w-full pointer-events-none bottom-0 top-auto h-1/4" />
                <img
                    src="https://placehold.co/1500x600/0047D1/FFFFFF?text=Fama+Mobil+Healthcare"
                    alt="Hero Banner"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    {/* Content could go here if not using just an image */}
                </div>
            </div>

            {/* Category Grid (Overlapping Hero) */}
            <div className="container mx-auto px-4 -mt-32 md:-mt-64 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CategoryCard
                        title="Medicines"
                        image="https://placehold.co/300x300?text=Medicines"
                        linkUrl="/category/medicines"
                    />
                    <CategoryCard
                        title="Medical Equipment"
                        image="https://placehold.co/300x300?text=Equipment"
                        linkUrl="/category/equipment"
                    />
                    <CategoryCard
                        title="Health & Wellness"
                        image="https://placehold.co/300x300?text=Wellness"
                        linkUrl="/category/wellness"
                    />
                    <div className="bg-white dark:bg-card p-6 shadow-sm flex flex-col justify-center items-center text-center space-y-4">
                        <h3 className="text-xl font-bold">Sign in for the best experience</h3>
                        <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md font-medium shadow-sm">
                            Sign In Securely
                        </button>
                        <p className="text-xs text-muted-foreground">New customer? <a href="/register" className="text-blue-600 hover:underline">Start here.</a></p>
                    </div>
                </div>

                {/* Featured Products Section */}
                <div className="mt-8 bg-white dark:bg-card p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Best Sellers in Medical Supplies</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Second Grid Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <CategoryCard
                        title="First Aid"
                        image="https://placehold.co/300x300?text=First+Aid"
                    />
                    <CategoryCard
                        title="Vitamins"
                        image="https://placehold.co/300x300?text=Vitamins"
                    />
                    <CategoryCard
                        title="Personal Care"
                        image="https://placehold.co/300x300?text=Personal+Care"
                    />
                    <CategoryCard
                        title="Deals & Discounts"
                        image="https://placehold.co/300x300?text=Deals"
                    />
                </div>

                {/* More Products */}
                <div className="mt-8 bg-white dark:bg-card p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.slice(2, 6).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
