import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DestinationCard.css';

const SERVER_URL = 'http://localhost:3001';


function DestinationCard({ destination }) {
    return (
        <div className="destination">
            <img 
                src={`${SERVER_URL}/${destination.img}`} 
                alt={`${destination.city}, ${destination.country}`}
                // onError={(e) => {
                //     // Fallback image if server image fails
                //     e.target.src = 'https://via.placeholder.com/400x300?text=Destination+Image';
                // }}
            />
            <h3>{destination.city}, {destination.country}</h3>
            <p>{destination.description}</p>
            <p className="cost">Cost: ${destination.cost}</p>
            <Link to="/preview">View Details</Link>
        </div>
    );
}

export default DestinationCard;