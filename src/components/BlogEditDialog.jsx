import React, { useState } from "react";

const API_URL = 'https://project-server-86c4.onrender.com/api/blogs';

const BlogEditDialog = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState(props.img);

    const uploadImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPrevSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const updateBlog = async (event) => {
        event.preventDefault();
        setResult("Updating...");

        const formData = new FormData(event.target);
        formData.append("_id", props._id);

        try {
            const response = await fetch(`${API_URL}/${props._id}`, {
                method: "PUT",
                body: formData,
            });

            if (response.status === 200) {
                setResult("Blog successfully updated!");
                const updatedBlog = await response.json();
                props.closeEditDialog();
                props.updateBlog(updatedBlog);
            } else {
                const errorText = await response.text();
                setResult(`Error updating blog: ${errorText}`);
            }
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div className="edit-blog-form">
            <h2>Edit Blog Post</h2>
            <form onSubmit={updateBlog}>
                <div className="form-group">
                    <label htmlFor="title">Blog Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={props.title}
                        required
                        minLength="3"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author Name:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        defaultValue={props.author}
                        required
                        minLength="2"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Blog Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        defaultValue={props.content}
                        required
                        minLength="10"
                        rows="6"
                    />
                </div>

                <div className="form-group image-section">
                    <div className="image-upload">
                        <label htmlFor="img">Change Image (optional):</label>
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
                        Update Post
                    </button>
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={props.closeEditDialog}
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
    );
};

export default BlogEditDialog;