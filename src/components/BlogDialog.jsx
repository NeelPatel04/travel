import React, { useState } from "react";
import BlogDetailsDialog from "./BlogDetailsDialog";
import BlogEditDialog from "./BlogEditDialog";
import BlogDeleteDialog from "./BlogDeleteDialog";
import "../css/BlogDialog.css";

const BlogDialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    };

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    };

    return (
        <div className="blog-dialog-backdrop" onClick={props.closeBlogDialog}>
            <div className="blog-dialog-content" onClick={(e) => e.stopPropagation()}>
                <span className="dialog-close" onClick={props.closeBlogDialog}>
                    &times;
                </span>
                <div className="blog-dialog-body">
                    {showContent === "details" ? (
                        <BlogDetailsDialog
                            showEdit={showEdit}
                            showDelete={showDelete}
                            _id={props._id}
                            title={props.title}
                            content={props.content}
                            author={props.author}
                            img={props.img}
                        />
                    ) : showContent === "edit" ? (
                        <BlogEditDialog
                            _id={props._id}
                            title={props.title}
                            content={props.content}
                            author={props.author}
                            img={props.img}
                            closeEditDialog={props.closeBlogDialog}
                            updateBlog={props.updateBlog}
                        />
                    ) : (
                        <BlogDeleteDialog
                            _id={props._id}
                            title={props.title}
                            closeDeleteDialog={props.closeBlogDialog}
                            hideBlog={props.hideBlog}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogDialog;