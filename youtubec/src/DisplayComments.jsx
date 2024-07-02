import React, { useState } from 'react';
import './Comments.css';

function DisplayComments({ commentBody, userCommented }) {
    const [editMode, setEditMode] = useState(false);
    const [commentText, setCommentText] = useState(commentBody);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setCommentText(commentText); // Update comment text here as needed
        setEditMode(false);
    };

    return (
        <>
            {editMode ? (
                <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        onChange={(e) => setCommentText(e.target.value)}
                        value={commentText}
                        className="comment_ibox"
                    />
                    <input
                        type="submit"
                        value="Change"
                        className="comment_add_btn_comments"
                    />
                </form>
            ) : (
                <p className="comment_body">{commentText}</p>
            )}
            <p className="usercommented">{userCommented}</p>
            <p className="edit_del_display_comments">
                <i onClick={handleEdit}>Edit</i>
                <i>Delete</i>
            </p>
        </>
    );
}

export default DisplayComments;
