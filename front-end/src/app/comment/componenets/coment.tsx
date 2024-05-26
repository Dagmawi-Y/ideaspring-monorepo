import React, { useState, useEffect } from 'react';
import CommentForm from "./CommentForm";

const Comment = ({
    comment,
    replies,
    setActiveComment,
    activeComment,
    updateComment, // Function to update comment on server (optional)
    deleteComment, // Function to delete comment on server (optional)
    addComment, // Function to add comment on server (optional)
    parentId = null,
    currentUserId,
  }) => {
    const [comments, setComments] = useState([]); // State to store comments
  
    useEffect(() => {
      const commentsFromStorage = localStorage.getItem('comments');
      if (commentsFromStorage) {
        setComments(JSON.parse(commentsFromStorage));
      }
    }, []); // Fetch comments from local storage on mount
  
    useEffect(() => {
      localStorage.setItem('activeCommentId', activeComment ? activeComment.id : '');
    }, [activeComment]); // Store the active comment ID in localStorage whenever it changes
  
    const storeComments = (updatedComments) => {
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }

  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();

  const handleUpdateComment = (text, commentId) => {
    const updatedComments = comments.map((c) =>
      c.id === commentId ? { ...c, body: text } : c
    );
    setComments(updatedComments);
    updateComment(text, commentId); // Call original update function (if applicable)
    storeComments(updatedComments);
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((c) => c.id !== commentId);
    setComments(updatedComments);
    deleteComment(commentId); // Call original delete function (if applicable)
    storeComments(updatedComments);
  };

  const handleAddComment = (text, replyToId) => {
    const newComment = {
      id: Math.random().toString(36).substring(2, 15), // Generate unique ID
      body: text,
      userId: currentUserId,
      createdAt: new Date().toISOString(),
    };
    const updatedComments = [...comments];
    const parentIndex = comments.findIndex((c) => c.id === replyToId);
    if (parentIndex !== -1) {
      updatedComments[parentIndex].replies.push(newComment);
    } else {
      updatedComments.push(newComment);
    }
    setComments(updatedComments);
    addComment(text, replyToId); // Call original add function (if applicable)
    storeComments(updatedComments);
  };

  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img src="/user-icon.png" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => handleUpdateComment(text, comment.id)}
            onCancel={() => setActiveComment(null)}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
                      <div
                      className="comment-action"
                      onClick={() => setActiveComment({ id: comment.id, type: "editing" })}
                    >
                      Edit
                    </div>
                    )}
                    {canDelete && (
                      <div className="comment-action" onClick={() => handleDeleteComment(comment.id)}>
                        Delete
                      </div>
                    )}
                  </div>
                  {isReplying && (
                    <CommentForm
                      submitLabel="Reply"
                      handleSubmit={(text) => handleAddComment(text, replyId)}
                    />
                  )}
                  {replies.length > 0 && (
                    <div className="replies">
                      {replies.map((reply) => (
                        <Comment
                          key={reply.id}
                          comment={reply}
                          replies={reply.replies || []} // Handle potential missing replies array
                          setActiveComment={setActiveComment}
                          activeComment={activeComment}
                          updateComment={handleUpdateComment} // Pass down update function
                          deleteComment={handleDeleteComment} // Pass down delete function
                          addComment={handleAddComment} // Pass down add function
                          parentId={comment.id}
                          currentUserId={currentUserId}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          };
          
          export default Comment;
          
