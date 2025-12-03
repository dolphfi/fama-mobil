import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartSheet = () => {
    const { items } = useCart();
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link
            to="/cart"
            className="relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {totalItems}
                </span>
            )}
        </Link>
    );
};

export default CartSheet;
