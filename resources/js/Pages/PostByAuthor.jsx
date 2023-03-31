import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import AuthorHeaderTitle from '../components/AuthorHeaderTitle';
import BannerAd from '../components/BannerAd';
import HomePostListItem from '../components/HomePostListItem';
import FrontendLayout from '../Layout/FrontendLayout';
import { FetchAllPostsByAuthor } from '../stores/PostSlice';

export default function PostByAuthor() {
  const params = useParams()
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);
  const [lastPage, setlastPage] = useState(0);
  const [showLoadMoreBtn, setshowLoadMoreBtn] = useState(true);
  const [showLoadMoreBtnLoading, setshowLoadMoreBtnLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(FetchAllPostsByAuthor(params.slug)).then((data) => {
          console.log('allPosts', data);
          setAllPosts(data.data);
          setcurrentPage(data.current_page);
          setlastPage(data.last_page);
          window.scrollTo(0, 0)
      });
  }, [params.slug, ])

  const getMoreData = (page) => {
      if (lastPage > page) {
          setshowLoadMoreBtnLoading(true);
          dispatch(FetchAllPostsByAuthor(params.slug, page)).then((data) => {
              setAllPosts([...allPosts, ...data.data]);
              setcurrentPage(data.current_page);
              setlastPage(data.last_page);
              setshowLoadMoreBtnLoading(false);
          });   
      } else {
          setshowLoadMoreBtn(false);
      }
  }
  return (
    <FrontendLayout>
        <AuthorHeaderTitle user={ allPosts.length ? allPosts[0] : null } />
        <BannerAd />
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="blog-list clearfix">
                            <div className="section-title">
                                <h3 className="color-green"><a href="/home" title="">New Posts</a></h3>
                            </div>
                            
                                {allPosts.length > 0 && allPosts.map((value, index) => {
                                    return <div key={index}><HomePostListItem post={value} /><hr className="invis" /></div> 
                                })}
                        </div>
                    </div>
                    {showLoadMoreBtn && <div className="col-12">
                    <button className='btn mx-auto btn-info bg-gray-300 ' onClick={()=>getMoreData(currentPage+1)}>{showLoadMoreBtnLoading ? 'Loading...' : 'Load More'}</button>
                    </div>}
                </div>
            </div>
        </div>
    </FrontendLayout>
  )
}
