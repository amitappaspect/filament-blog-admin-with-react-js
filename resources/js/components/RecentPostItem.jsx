import React from 'react'
import { Link } from 'react-router-dom'

export default function RecentPostItem({recentPost}) {
  return (
    <Link to={'/post/'+recentPost.slug} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="w-100 justify-content-between">
            <img src={recentPost.feature_image_url} alt="" className="img-fluid float-left" />
            <h5 className="mb-1">{recentPost.title}</h5>
            <small>{recentPost.date_blog_formated}</small>
        </div>
    </Link>
  )
}
