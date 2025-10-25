import React from 'react';
import '../css/BucketCard.css'

function BucketCard({ item }) {
    return (
        <div className="bucket-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="cost">Cost: ${item.cost}</p>
            <div className="actions">
                <button className="remove">Remove</button>
                <button className="book">Book</button>
            </div>
        </div>
    );
}

export default BucketCard;