import React from 'react';
import '../css/About.css';

function About() {
    return (
        <div className="about">
            <h2>About</h2>
            <div className="about-section">
                <h3>TrekTales Mission Statement</h3>
                <div className="mission-statement">
                    <p>At TrekTales, our mission is to ignite the spirit of exploration by crafting unforgettable journeys that connect travelers with the world's hidden wonders, vibrant cultures, and transformative experiences. We believe travel is more than a destination, it's a gateway to personal growth, meaningful connections, and lifelong memories. Whether you're chasing sunsets in Santorini or hiking the Great Wall, we handle the details so you can focus on the adventure, delivering seamless, sustainable trips that inspire wonder and respect for our planet.</p>
                    <img src="/images/logo.png" alt="Mission" />
                </div>
                <h3>Why Choose TrekTales?</h3>
                <div className="why-choose">
                    <ul>
                        <li>Personalized itineraries tailored to your passions, budget, and travel style - no cookie-cutter vacations here.</li>
                        <li>Exclusive deals through industry partnerships plus insider access to hidden gems and special upgrades you won't find on booking sites.</li>
                        <li>24/7 expert support for peace of mind - from flight delays to itinerary changes, we've got your back so you can focus on the adventure.</li>
                    </ul>
                </div>
                <h3>Contact Us:</h3>
                <div className="contact">
                    <p>Email: info@trektales.com</p>
                    <p>Phone: (123)-456-7890</p>
                </div>
            </div>
        </div>
    );
}

export default About;
