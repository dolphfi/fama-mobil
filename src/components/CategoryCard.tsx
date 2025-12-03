import React from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
    title: string;
    image: string;
    linkText?: string;
    linkUrl?: string;
    className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    image,
    linkText = "See more",
    linkUrl = "#",
    className
}) => {
    return (
        <div className={cn("bg-white dark:bg-card flex flex-col h-full p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow", className)}>
            <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
            <div className="flex-1 mb-4 overflow-hidden rounded-md">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
            </div>
            <Link to={linkUrl} className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium">
                {linkText}
            </Link>
        </div>
    );
};

export default CategoryCard;
