import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from '../components/BlogPost';
import AddBlog from '../components/AddBlog';
import '../css/TravelBlog.css';

const API_URL = 'https://project-server-86c4.onrender.com/api/blogs';
const SERVER_URL = 'https://project-server-86c4.onrender.com';

function TravelBlog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const updateBlogs = (newBlog) => {
        if (newBlog.img && !newBlog.img.startsWith('http')) {
            newBlog.img = `${SERVER_URL}/${newBlog.img}`;
        }
        setBlogPosts((blogs) => [...blogs, newBlog]);
    };

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_URL);
                const blogsWithFullUrls = response.data.map(blog => ({
                    ...blog,
                    img: blog.img.startsWith('http') ? blog.img : `${SERVER_URL}/${blog.img}`
                }));
                setBlogPosts(blogsWithFullUrls);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching blogs:', err);
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();
    }, []);

    return (
        <div className="blog">
            <div className="blog-header-section">
                <h2>Blog Posts</h2>
                <button className="add-blog-btn" onClick={openAddDialog}>
                    + Add New Post
                </button>
            </div>

            {showAddDialog && (
                <AddBlog 
                    closeAddDialog={closeAddDialog}
                    updateBlogs={updateBlogs}
                />
            )}

            {loading ? (
                <div className="loading-message">
                    <p>Loading blog posts...</p>
                </div>
            ) : error ? (
                <div className="error-message">
                    <p>Error loading posts: {error}</p>
                </div>
            ) : (
                <>
                    <div className="blog-posts">
                        {blogPosts.length === 0 ? (
                            <p className="no-posts">No blog posts yet. Be the first to share your story!</p>
                        ) : (
                            blogPosts.map(post => (
                                <BlogPost key={post._id} post={post} />
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default TravelBlog;