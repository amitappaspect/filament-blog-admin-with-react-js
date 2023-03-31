import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FetchAllPosts} from '../stores/PostSlice'
import HomePostListItem from './HomePostListItem'

export default function HomePostItem() {
    const [allPosts, setAllPosts] = useState([]);
    const [currentPage, setcurrentPage] = useState(0);
    const [lastPage, setlastPage] = useState(0);
    const [showLoadMoreBtn, setshowLoadMoreBtn] = useState(true);
    const [showLoadMoreBtnLoading, setshowLoadMoreBtnLoading] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchAllPosts()).then((data) => {
            console.log('allPosts', data);
            setAllPosts(data.data);
            setcurrentPage(data.current_page);
            setlastPage(data.last_page);
            console.log('allPosts last', allPosts);
        });
    }, [])
    
    const getMoreData = (page) => {
        if (lastPage > page) {
            setshowLoadMoreBtnLoading(true);
            dispatch(FetchAllPosts(page)).then((data) => {
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
    <div className="row">
        <div className="col-lg-9">
            <div className="blog-list clearfix">
                <div className="section-title">
                    <h3 className="color-green"><Link to="/" title="">New Posts</Link></h3>
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
  )
}
