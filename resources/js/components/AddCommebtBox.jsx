import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddComment, getComments } from '../stores/CommentSlice';

export default function AddCommebtBox({post_id}) {
    const [commentForm, setCommentForm] = useState({
        'post_id': post_id,
        'user_name': '',
        'user_email': '',
        'user_comment': '',
    });

    const [commentFormError, setcommentFormError] = useState({});

    const dispatch = useDispatch();


    const handleInputChange = (e) => {
        setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
    }

    const submitComment = () => {
        dispatch(AddComment(commentForm)).then((data) => {
            console.log('data', data);
            if (data == 'Comment added successfully!') {
                setCommentForm({
                    'post_id': post_id,
                    'user_name': '',
                    'user_email': '',
                    'user_comment': ''
                }) 
                setcommentFormError({});
                dispatch(getComments(post_id));
                return;
            } else {
                if (data.response.status == 422) {
                    setcommentFormError(data.response.data.errors);
                    return;
                }   
            }
        });
    }

  return (
    <div className="custombox clearfix">
          <h4 className="small-title">Leave a Reply</h4>
        <div className="row">
            <div className="col-lg-12">
                <div className="form-wrapper">
                    <input type="text" name="user_name" onChange={(e) => handleInputChange(e)} value={commentForm.user_name} className={ (commentFormError.hasOwnProperty('user_name')) ? "form-control has-error" : "form-control"} placeholder="Your name" />
                    {commentFormError.hasOwnProperty('user_name') && <p className="error-text">{commentFormError.user_name}</p>}
                      
                    <input type="text" name="user_email" onChange={(e) => handleInputChange(e)} value={commentForm.user_email} className={ (commentFormError.hasOwnProperty('user_email')) ? "form-control has-error" : "form-control"} placeholder="Email address" />
                    {commentFormError.hasOwnProperty('user_email') && <p className="error-text">{commentFormError.user_email}</p>}
                      
                    <textarea name="user_comment" onChange={(e) => handleInputChange(e)} value={commentForm.user_comment} className={ (commentFormError.hasOwnProperty('user_comment')) ? "form-control has-error" : "form-control"} placeholder="Your comment"></textarea>
                    {commentFormError.hasOwnProperty('user_comment') && <p className="error-text">{commentFormError.user_comment}</p>}
                      
                    <button type="submit" className="btn btn-primary" onClick={submitComment}>Submit Comment</button>
                </div>
            </div>
        </div>
    </div>
  )
}
