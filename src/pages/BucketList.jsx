import React from 'react';
import BucketCard from '../components/BucketCard';
import '../css/BucketList.css';

function BucketList() {
    const bucketItems = [
        {
            id: 1,
            img: "images/greece.jpg",
            name: "Santorini, Greece",
            cost: 2051
        },
        {
            id: 2,
            img: "images/dubai.jpg",
            name: "Dubai, United Arab Emirates",
            cost: 2023
        },
        {
            id: 3,
            img: "images/paris.jpg",
            name: "Paris, France",
            cost: 2450
        }
    ];

    return (
        <div className="bucket">
            <h2>My Bucket List</h2>
            <div className="bucket-grid">
                {bucketItems.map(item => (
                    <BucketCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default BucketList;