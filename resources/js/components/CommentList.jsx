import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments, storeAllComments } from '../stores/CommentSlice';

export default function CommentList({ post_id }) {
    const storeComments = useSelector(storeAllComments);
    const [loadMoreCommentBtn, setloadMoreCommentBtn] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        setloadMoreCommentBtn(true);
        dispatch(getComments(post_id)).then((data) => {
            console.log('data', data);
            setloadMoreCommentBtn(false);
        })
        
    }, [post_id,])
    
    const loadMoreComments = () => {
        setloadMoreCommentBtn(true);
        const page = storeComments.current_page + 1;
        dispatch(getComments(post_id, page)).then((data) => {
            console.log('data', data);
            setloadMoreCommentBtn(false);
        })
    } 

    return (
    <div className="custombox clearfix">
        <h4 className="small-title">{storeComments ? storeComments.total : 0} Comments</h4>
        <div className="row">
            <div className="col-lg-12">
                    <div className="comments-list" style={{ overflow: 'scroll', height:300 }}>
                    {storeComments.total > 0 && storeComments.data.map((value, index) => {
                        return <div className="media" key={index}>
                            <a className="media-left" href="#">
                                <img src={value.avatar_url} alt="" className="rounded-circle" />
                            </a>
                            <div className="media-body">
                                <h4 className="media-heading user_name">{value.user_name} <small>{value.days_ago}</small></h4>
                                <p>{value.user_comment}</p>
                            </div>
                        </div>    
                    })}
                    
                        {storeComments && storeComments.total == 0 && <span>No comments here</span>}
                </div>
                    {storeComments && storeComments.current_page < storeComments.last_page && <button onClick={loadMoreComments} className='btn btn-primary'>{loadMoreCommentBtn ? 'Loading...' : 'Load More' }</button>}
            </div>
        </div>
    </div>
    )
}
