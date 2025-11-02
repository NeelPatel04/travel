import React, { useState } from 'react';
import '../css/About.css';

function About() {
    const [result, setResult] = useState({ display: false, message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        setResult({ display: true, message: 'Please wait...', type: 'loading' });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const responseJson = await response.json();

            if (response.status === 200) {
                setResult({ display: true, message: 'Form submitted successfully', type: 'success' });
                e.target.reset();
            } else {
                console.log(response);
                setResult({ display: true, message: `Error: ${responseJson.message}`, type: 'error' });
            }
        } catch (error) {
            console.log(error);
            setResult({ display: true, message: 'Something went wrong!', type: 'error' });
        }

        setTimeout(() => {
            setResult({ display: false, message: '', type: '' });
        }, 3000);
    };

    return (
        <div className="about">
            <h2>About</h2>
            <div className="about-section">
                <h3>TrekTales Mission Statement</h3>
                <div className="mission-statement">
                    <p>At TrekTales, our mission is to ignite the spirit of exploration by crafting unforgettable journeys that connect travelers with the world's hidden wonders, vibrant cultures, and transformative experiences. We believe travel is more than a destination, it's a gateway to personal growth, meaningful connections, and lifelong memories. Whether you're chasing sunsets in Santorini or hiking the Great Wall, we handle the details so you can focus on the adventure, delivering seamless, sustainable trips that inspire wonder and respect for our planet.</p>
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Mission" />
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

                <section className="contact-section">
                    <div className="contact-form-wrapper">
                        <div className="contact-intro">
                            <h2 className="contact-title">Get in Touch</h2>
                            <p className="contact-description">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            {result.display && (
                                <div className={`contact-result ${result.type}`}>
                                    {result.message}
                                </div>
                            )}

                            <input type="hidden" name="access_key" value="43f6b40c-c6ae-4358-9b35-50ea1ecfa302" />
                            <input type="hidden" name="subject" value="New Contact Form Submission from TrekTales" />
                            <input type="hidden" name="from_name" value="TrekTales Website" />

                            <div className="form-group-container">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input id="name" name="name" className="form-input" placeholder="Your name" type="text" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input id="email" name="email" className="form-input" placeholder="Your email" type="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-textarea" id="message" name="message" placeholder="Your message" required></textarea>
                                </div>
                            </div>
                            <button className="form-submit" type="submit">Send Message</button>
                        </form>
                    </div>

                    <div className="contact-map-wrapper">
                        <h3>Our Location</h3>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.666489560375!2d103.96623370405534!3d1.35155716267923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17d693d0cde3%3A0xd6d6dd5e414e4503!2sSingapore%20Changi%20Airport!5e0!3m2!1sen!2sus!4v1760668659880!5m2!1sen!2sus" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Singapore Changi Airport Location"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;