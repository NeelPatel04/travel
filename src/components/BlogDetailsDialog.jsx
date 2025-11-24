import React from "react";

const BlogDetailsDialog = (props) => {
    return (
        <div className="blog-details">
            <img src={props.img} alt={props.title} className="blog-details-img" />
            <h2>{props.title}</h2>
            <p className="blog-author">By: {props.author}</p>
            <div className="blog-content-section">
                <p>{props.content}</p>
            </div>
            <div className="dialog-actions">
                <button className="edit-btn" onClick={props.showEdit}>
                    Edit Post
                </button>
                <button className="delete-btn" onClick={props.showDelete}>
                    Delete Post
                </button>
            </div>
        </div>
    );
};

export default BlogDetailsDialog;