import React from 'react'
import { Link } from 'react-router-dom'

export default function SinglePostComponent({post}) {
  return (
        <>
        <div className="blog-title-area">
            <ol className="breadcrumb hidden-xs-down">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={'/category/'+post.category.slug}>{ post.category ? post.category.name : '-'}</Link></li>
                <li className="breadcrumb-item active">{ post.title }</li>
            </ol>

            <span className="color-aqua"><Link to={'/category/'+post.category.slug} title="">{ post.category ? post.category.name : '-'}</Link></span>

            <h3>{ post.title }</h3>

            <div className="blog-meta big-meta">
                <small><a href="#" title="">{post.date_blog_formated}</a></small>
                <small><Link to={'/user/'+post.user.name} title="">by {post.user.name}</Link></small>
                <small><a href="#" title=""><i className="fa fa-eye"></i> 2344</a></small>
            </div>

            <div className="post-sharing">
                <ul className="list-inline">
                    <li><a href="#" className="fb-button btn btn-primary"><i className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></a></li>
                    <li><a href="#" className="tw-button btn btn-primary"><i className="fa fa-twitter"></i> <span className="down-mobile">Tweet on Twitter</span></a></li>
                    <li><a href="#" className="gp-button btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
                </ul>
            </div>
        </div>

        <div className="single-post-media">
            <img src={post.feature_image_url} alt="" style={{width:'40%'}} className="img-fluid" />
        </div>

        <div className="blog-content">  
            <div className="pp">
                <p dangerouslySetInnerHTML={{__html:post.description}}></p>
            </div>
        </div>
        </>
  )
}
