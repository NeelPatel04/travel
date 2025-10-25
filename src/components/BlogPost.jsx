import React from 'react';
import '../css/BlogPost.css';

function BlogPost({ post }) {
    return (
        <div className="blog-post">
            <img src={post.img} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="author">By: {post.author}</p>
        </div>
    );
}

export default BlogPost;