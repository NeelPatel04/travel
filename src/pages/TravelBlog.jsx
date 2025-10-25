import React from 'react';
import BlogPost from '../components/BlogPost';
import '../css/TravelBlog.css';

function TravelBlog() {
    const blogPosts = [
        {
            id: 1,
            img: "/images/egypt.jpg",
            title: "The Great Pyramid of Giza - Egypt",
            content: "From midnight camel treks through moonlit desert to sunrise yoga atop the Queen's Pyramid, our 24-hour Giza adventure revealed secrets most visitors never see. We explored the lesser-known Bent Pyramid, haggled for hieroglyph scarabs in Bedouin tents, and watched archaeologists uncover 4,000-year-old tools - a living museum where past and present collide.",
            author: "Cleopatra Philopator"
        },
        {
            id: 2,
            img: "/images/cambodia.jpg",
            title: "Angkor Wat - Cambodia",
            content: "As 1,000-year-old temple spires emerge from mist and monks chant ancient Pali verses, you understand why Khmers called this 'City of Gods.' We climbed hidden staircases to explore secret libraries where Sanskrit texts still whisper forgotten wisdom, revealing the Khmer Empire's cosmic architecture that rivals Egypt's precision.",
            author: "Dr. Liam Chen"
        }
    ];

    return (
        <div className="blog">
            <h2>Blog Posts</h2>
            <div className="blog-posts">
                {blogPosts.map(post => (
                    <BlogPost key={post.id} post={post} />
                ))}
            </div>
            <a href="#" className="load-more">Load More Post...</a>
        </div>
    );
}

export default TravelBlog;