import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomeCard.css';

function HomeCard({ destination }) {
    return (
        <div className="destination">
            <img src={destination.img} alt={`${destination.city}, ${destination.country}`} />
            <p>
                <b>{destination.country}: </b>
                {destination.description}
            </p>
            <Link to="/preview">View Details</Link>
        </div>
    );
}

export default HomeCard;