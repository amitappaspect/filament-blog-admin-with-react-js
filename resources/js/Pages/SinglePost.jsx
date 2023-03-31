import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import AboutAuthor from '../components/AboutAuthor'
import AddCommebtBox from '../components/AddCommebtBox'
import BannerAd from '../components/BannerAd'
import CategoryHeaderTitle from '../components/CategoryHeaderTitle'
import CommentList from '../components/CommentList'
import SinglePostComponent from '../components/SinglePostComponent'
import FrontendLayout from '../Layout/FrontendLayout'
import { storeSinglePost, FetchSinglePost } from '../stores/PostSlice'

export default function SinglePost() {
  const params = useParams()
  const dispatch = useDispatch()
  const [post, setPost] = useState()

  useEffect(() => {
    dispatch(FetchSinglePost(params.slug)).then((data) => {
      setPost(data);
      window.scrollTo(0, 0)
    });
  }, [params.slug,])
  

  return (
    <div>
        <FrontendLayout>
            <BannerAd />
            <div className="section">
              <div className="container">
              {post && <SinglePostComponent post={post} />}
              
              {post && <AboutAuthor post={post} />}
              <hr className="invis1" />
              {post && <CommentList post_id={post.id}/>}
              <hr className="invis1" />
              {post && <AddCommebtBox post_id={post.id} />}
              </div>
            </div>
        </FrontendLayout>
    </div>
  )
}
