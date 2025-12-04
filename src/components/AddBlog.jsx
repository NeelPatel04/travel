import React, { useState } from "react";
import "../css/AddBlog.css";

const API_URL = 'https://project-server-86c4.onrender.com/api/blogs';
const SERVER_URL = 'https://project-server-86c4.onrender.com';

const AddBlog = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPrevSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const addToServer = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        
        const formData = new FormData(event.target);
        console.log(...formData);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: formData
            });

            if (response.status === 200) {
                setResult("Blog post added successfully!");
                const newBlog = await response.json();
                
                if (newBlog.img && !newBlog.img.startsWith('http')) {
                    newBlog.img = `${SERVER_URL}/${newBlog.img}`;
                }
                
                event.target.reset();
                setPrevSrc("");
                props.closeAddDialog();
                props.updateBlogs(newBlog);
            } else {
                const errorText = await response.text();
                setResult(`Error adding blog: ${errorText}`);
            }
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div className="modal-backdrop" onClick={props.closeAddDialog}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Create New Blog Post</h2>
                    <span className="close-btn" onClick={props.closeAddDialog}>
                        &times;
                    </span>
                </div>

                <form className="add-blog-form" onSubmit={addToServer}>
                    <div className="form-group">
                        <label htmlFor="title">Blog Title:</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            required 
                            minLength="3"
                            placeholder="Enter a catchy title..."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author Name:</label>
                        <input 
                            type="text" 
                            id="author" 
                            name="author" 
                            required 
                            minLength="2"
                            placeholder="Your name..."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Blog Content:</label>
                        <textarea 
                            id="content" 
                            name="content" 
                            required 
                            minLength="10"
                            rows="6"
                            placeholder="Share your travel story..."
                        />
                    </div>

                    <div className="form-group image-section">
                        <div className="image-upload">
                            <label htmlFor="img">Upload Image:</label>
                            <input 
                                type="file" 
                                id="img" 
                                name="img" 
                                accept="image/*" 
                                onChange={uploadImage} 
                            />
                        </div>

                        {prevSrc && (
                            <div className="image-preview">
                                <img src={prevSrc} alt="Preview" />
                            </div>
                        )}
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            Publish Blog Post
                        </button>
                        <button 
                            type="button" 
                            className="cancel-btn" 
                            onClick={props.closeAddDialog}
                        >
                            Cancel
                        </button>
                    </div>

                    {result && (
                        <div className={`result-message ${result.includes("success") ? "success" : "error"}`}>
                            {result}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AddBlog;