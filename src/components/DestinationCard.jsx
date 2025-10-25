import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DestinationCard.css';

function DestinationCard({ destination }) {
    return (
        <div className="destination">
            <img src={destination.img} alt={`${destination.city}, ${destination.country}`} />
            <h3>{destination.city}, {destination.country}</h3>
            <p>{destination.description}</p>
            <p className="cost">Cost: ${destination.cost}</p>
            <Link to="/preview">View Details</Link>
        </div>
    );
}

export default DestinationCard;