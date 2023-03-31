import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePostListItem({post}) {
  return (
    <div className="blog-box row">
        <div className="col-md-4">
            <div className="post-media">
                <Link to={'/post/'+post.slug} title={post.title}>
                    <img src={post.feature_image_url} style={{ width:'255px', height:255}} alt={post.title} className="img-fluid" />
                    <div className="hovereffect"></div>
                </Link>
            </div>
        </div>

        <div className="blog-meta big-meta col-md-8">
            <h4><Link to={'/post/' + post.slug } title="">{post.title}</Link></h4>
            <p dangerouslySetInnerHTML={{__html:post.description}}></p>
            <small><Link to={'/post/' + post.slug } title="">{post.date_blog_formated}</Link></small>
            <small><Link to={'/user/' + post.user.name } title="">by {post.user.name}</Link></small>
            <span className="bg-aqua"><Link to={'/category/' + post.category.slug}  title="">{post.category.name}</Link></span>
        </div>
    </div>
  )
}
