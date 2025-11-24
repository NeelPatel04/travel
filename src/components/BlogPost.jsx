import React, { useState } from 'react';
import BlogDialog from './BlogDialog';
import '../css/BlogPost.css';

function BlogPost({ post: initialPost }) {
    const [post, setPost] = useState(initialPost);
    const [showBlog, setShowBlog] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    const showBlogDetails = () => {
        setShowDialog(true);
    };

    const closeBlogDetails = () => {
        setShowDialog(false);
    };

    const updateBlog = (updatedBlog) => {
        if (updatedBlog.img && !updatedBlog.img.startsWith('http')) {
            updatedBlog.img = `http://localhost:3001/${updatedBlog.img}`;
        }
        setPost(updatedBlog);
    };

    const hideBlog = () => {
        setShowBlog(false);
    };

    return (
        <>
            {showDialog && (
                <BlogDialog
                    closeBlogDialog={closeBlogDetails}
                    _id={post._id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    img={post.img}
                    updateBlog={updateBlog}
                    hideBlog={hideBlog}
                />
            )}
            {showBlog && (
                <div className="blog-post" onClick={showBlogDetails}>
                    <img
                        src={post.img}
                        alt={post.title}
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x300?text=Blog+Image';
                        }}
                    />
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p className="author">By: {post.author}</p>
                </div>
            )}
        </>
    );
}

export default BlogPost;