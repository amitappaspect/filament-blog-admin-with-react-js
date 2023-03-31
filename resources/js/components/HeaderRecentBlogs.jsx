import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { storeFeaturedPosts, FetchFeaturedPosts} from '../stores/PostSlice'

export default function HeaderRecentBlogs() {
    const featuredPosts = useSelector(storeFeaturedPosts);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchFeaturedPosts());
    }, [])
    
  return (
    <section className="section first-section">
        <div className="container-fluid">
              <div className="masonry-blog clearfix">
                {featuredPosts.length >= 1 &&
                <div className="left-side">
                    <div className="masonry-box post-media">
                            <img src={featuredPosts[0].feature_image_url} style={{height:'534px', width:'100%', objectFit:'fill'}} alt="" className="img-fluid" />
                            <div className="shadoweffect">
                            <div className="shadow-desc">
                                <div className="blog-meta">
                                    <span className="bg-aqua"><Link to={'/category/'+featuredPosts[0].category.slug} title="">{featuredPosts[0].category.name}</Link></span>
                                    <h4><Link to={'/post/'+featuredPosts[0].slug} title="">{featuredPosts[0].title}</Link></h4>
                                    <small><Link to={'/post/'+featuredPosts[0].slug} title="">{featuredPosts[0].date_blog_formated}</Link></small>
                                    <small><Link to={'/user/'+featuredPosts[0].user.name} title="">by {featuredPosts[0].user.name}</Link></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                
                {featuredPosts.length >= 4 &&
                    <div className="center-side">
                        <div className="masonry-box post-media">
                                <img src={featuredPosts[1].feature_image_url} style={{height:'261px', width:'100%'}} alt="" className="img-fluid" />
                                <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-green"><Link to={'/category/'+featuredPosts[1].category.slug} title="">{featuredPosts[1].category.name}</Link></span>
                                        <h4><Link to={'/post/'+featuredPosts[1].slug} title="">{featuredPosts[1].title}</Link></h4>
                                        <small><Link to={'/post/'+featuredPosts[1].slug} title="">{featuredPosts[1].date_blog_formated}</Link></small>
                                        <small><Link to={'/user/'+featuredPosts[1].user.name} title="">by {featuredPosts[1].user.name}</Link></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="masonry-box small-box post-media">
                                <img src={featuredPosts[2].feature_image_url} style={{height:'260px', width:'100%'}} alt="" className="img-fluid" />
                                <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-green"><Link to={'/category/'+featuredPosts[2].category.slug} title="">{featuredPosts[2].category.name}</Link></span>
                                        <h4><Link to={'/post/'+featuredPosts[2].slug} title="">{featuredPosts[2].title}</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="masonry-box small-box post-media">
                                <img src={featuredPosts[3].feature_image_url} style={{height:'260px', width:'100%'}} alt="" className="img-fluid" />
                                <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-green"><Link to={'/category/'+featuredPosts[3].category.slug} title="">{featuredPosts[3].category.name}</Link></span>
                                        <h4><Link to={'/post/'+featuredPosts[3].slug} title="">{featuredPosts[3].title}</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>     
                }

                {featuredPosts.length >= 5 &&
                      <div className="right-side hidden-md-down">
                          <div className="masonry-box post-media">
                              <img src={featuredPosts[4].feature_image_url} style={{ height: '534px', width: '100%' }} alt="" className="img-fluid" />
                              <div className="shadoweffect">
                                  <div className="shadow-desc">
                                      <div className="blog-meta">
                                          <span className="bg-aqua"><a href={'/category/' + featuredPosts[4].category.slug} title="">{featuredPosts[4].category.name}</a></span>
                                          <h4><Link to={'/post/' + featuredPosts[4].slug} title="">{featuredPosts[4].title}</Link></h4>
                                          <small><Link to={'/post/' + featuredPosts[4].slug} title="">{featuredPosts[4].date_blog_formated}</Link></small>
                                          <small><Link to={'/user/' + featuredPosts[4].user.name} title="">by {featuredPosts[4].user.name}</Link></small>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                }
                  
            </div>
        </div>
    </section>
  )
}
