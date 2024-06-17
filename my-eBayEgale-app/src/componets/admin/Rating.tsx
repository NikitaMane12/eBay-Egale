import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './Rating.css'; // Import your CSS file for styling

interface RatingProps {
  rating: number; // Define the type of the 'rating' prop
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const maxRating = 5; // Maximum rating value

  // Render filled stars for the rating value and empty stars for the remaining
  const renderStars = () => {
    const filledStars = Math.floor(rating);
    const remainingStars = maxRating - filledStars;
    const stars: JSX.Element[] = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={filledStars + i} />);
    }

    return stars;
  };

  return (
    <div className="rating-container">
      {renderStars().map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
