import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutAuthor({post}) {
  return (
    <div className="custombox authorbox clearfix">
        <h4 className="small-title">About author</h4>
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <img src={post.user.avatar_url} alt="" className="img-fluid rounded-circle" /> 
            </div>

            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                <h4><Link to={'/user/'+post.user.name}>{post.user.name}</Link></h4>
                <p>{post.user.email}</p>

                <div className="topsocial">
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Youtube"><i className="fa fa-youtube"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Pinterest"><i className="fa fa-pinterest"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Instagram"><i className="fa fa-instagram"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Website"><i className="fa fa-link"></i></a>
                </div>

            </div>
        </div>
    </div>
  )
}
