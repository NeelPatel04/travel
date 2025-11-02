import React from 'react';
import HomeCard from '../components/HomeCard';
import Slideshow from '../components/Slideshow';
import '../css/Home.css';

function Home() {
    
    const destinations = [
        {
            _id: 1,
            img: `${process.env.PUBLIC_URL}/images/greece.jpg`,
            country: "Greece",
            city: "Santorini",
            cost: 2051,
            description: "Discover the sun-kissed islands of Greece, where azure waters meet white-washed cliffs. From Santorini's iconic sunsets to Athens' ancient wonders, experience Mediterranean magic."
        },
        {
            _id: 2,
            img: `${process.env.PUBLIC_URL}/images/dubai.jpg`,
            country: "United Arab Emirates",
            city: "Dubai",
            cost: 2023,
            description: "Discover the UAE's dazzling fusion of tradition and innovation - from Dubai's soaring Burj Khalifa to Abu Dhabi's serene Sheikh Zayed Mosque. Experience desert adventures, luxury shopping, and Arabian hospitality in this Middle Eastern gem."
        },
        {
            _id: 3,
            img: `${process.env.PUBLIC_URL}/images/switzerland.jpg`,
            country: "Switzerland",
            city: "Interlaken",
            cost: 3650,
            description: "Experience Switzerland's breathtaking Alpine majesty - crystal-clear lakes, snow-capped peaks, and charming villages. From Interlaken's adventure sports to Lucerne's medieval charm, discover chocolate-box perfection."
        }
    ];

    return (
        <>
            <Slideshow />
            <div className="content">
                <h2>Featured Destinations</h2>
                <div className="featured">
                    {destinations.map(dest => (
                        <HomeCard key={dest._id} destination={dest} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;