import React, { useState } from 'react';
import './Comments.css';
import DisplayComments from './DisplayComments';

function Comments() {
    const [commentText, setCommentText] = useState('');
    const [commentsList, setCommentsList] = useState([
        {
            commentBody: "Hello",
            userCommented: "ac",
        }
    ]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // Add new comment to commentsList
        if (commentText.trim() !== '') {
            const newComment = {
                commentBody: commentText,
                userCommented: "newUser", // Example: Replace with actual user ID or name
            };
            setCommentsList([...commentsList, newComment]);
            setCommentText(''); // Clear input field after submitting
        }
    };

    return (
        <>
            <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder='add comment...'
                    value={commentText}
                    className='comment_ibox'
                />
                <input type="submit" value="add" className='comments_add_btn' />
            </form>
            <div className="display_comment_container">
                {commentsList.map((m, index) => (
                    <DisplayComments
                        key={index} // Add a unique key for each comment
                        commentBody={m.commentBody}
                        userCommented={m.userCommented}
                    />
                ))}
            </div>
        </>
    );
}

export default Comments;
