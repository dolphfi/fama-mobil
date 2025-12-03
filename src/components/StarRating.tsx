import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '../lib/utils';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    showNumber?: boolean;
    className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
    rating,
    maxRating = 5,
    size = 'md',
    showNumber = false,
    className
}) => {
    const sizeClasses = {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5'
    };

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star
                    key={`full-${i}`}
                    className={cn(sizeClasses[size], 'fill-yellow-400 text-yellow-400')}
                />
            );
        }

        if (hasHalfStar) {
            stars.push(
                <StarHalf
                    key="half"
                    className={cn(sizeClasses[size], 'fill-yellow-400 text-yellow-400')}
                />
            );
        }

        const emptyStars = maxRating - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <Star
                    key={`empty-${i}`}
                    className={cn(sizeClasses[size], 'text-gray-300')}
                />
            );
        }

        return stars;
    };

    return (
        <div className={cn('flex items-center gap-1', className)}>
            {renderStars()}
            {showNumber && (
                <span className="text-sm text-muted-foreground ml-1">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
};

export default StarRating;
