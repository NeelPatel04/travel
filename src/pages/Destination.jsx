import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DestinationCard from '../components/DestinationCard';
import '../css/Destination.css';

// IMPORTANT: Replace with your actual Render URL after deployment
// For local testing, use: http://localhost:3001/api/dest
// const API_URL = 'https://your-server.onrender.com/api/dest';
const API_URL = 'http://localhost:3001/api/dest';


function Destination() {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // After page has loaded
    useEffect(() => {
        const loadDestinations = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_URL);
                setDestinations(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching destinations:', err);
            } finally {
                setLoading(false);
            }
        };

        loadDestinations();
    }, []);

    // Loading state
    if (loading) {
        return (
            <div className="container">
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading destinations...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="container">
                <div className="error-container">
                    <h2>Oops! Something went wrong</h2>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()} className="retry-btn">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="sidebar">
                <h3>Filters</h3>
                <select>
                    <option>Country</option>
                </select>
                <select>
                    <option>Month</option>
                </select>
                <select>
                    <option>Climate</option>
                </select>
                <select>
                    <option>Bookings</option>
                </select>
                <select>
                    <option>Types</option>
                </select>
                <button>Save</button>
            </div>

            <div className="main-content">
                <h2>Destination Grid</h2>
                <div className="destination-grid">
                    {destinations.map(dest => (
                        <DestinationCard key={dest._id} destination={dest} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Destination;