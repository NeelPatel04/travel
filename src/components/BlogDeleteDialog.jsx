import React, { useState } from "react";

const API_URL = 'https://project-server-86c4.onrender.com/api/blogs';

const BlogDeleteDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteBlog = async () => {
        try {
            const response = await fetch(`${API_URL}/${props._id}`, {
                method: "DELETE",
            });

            if (response.status === 200) {
                setResult("Blog successfully deleted");
                props.closeDeleteDialog();
                props.hideBlog();
            } else {
                setResult("Sorry, we couldn't delete the blog post");
            }
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div className="delete-content">
            <h3>Are you sure you want to delete "{props.title}"?</h3>
            <p className="warning-text">This action cannot be undone.</p>
            <div className="delete-actions">
                <button className="cancel-btn" onClick={props.closeDeleteDialog}>
                    No, Keep It
                </button>
                <button className="delete-confirm-btn" onClick={deleteBlog}>
                    Yes, Delete It
                </button>
            </div>
            {result && <p className="result-message">{result}</p>}
        </div>
    );
};

export default BlogDeleteDialog;