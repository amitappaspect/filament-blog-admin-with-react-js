"use client";

import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ErrorPage from '../../Pages/ErrorPage';
import { FetchSearchPost } from '../../stores/PostSlice';

export default function TopSearchBar() {
  const [searchKeyword, setSearchKeyword] = useState();
  const [searchResult, setSearchResult] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const search = (e) => {
    console.log(e.target.value);
    setSearchKeyword(e.target.value);
    if (e.target.value.length>2) {
      dispatch(FetchSearchPost(e.target.value)).then((data) => {
        setSearchResult(data);
        console.log('searchResult', searchResult);
      });
    }

    if (e.target.value == '') {
      setSearchResult();
    }
  }

  const redirectToPost = (slug) => {
    setSearchKeyword('');
    setSearchResult();
    navigate(`/post/${slug}`);
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <div className="collapse top-search" id="collapseExample">
        <div className="card card-block">
            <div className="newsletter-widget text-center">
                <div className="form-inline">
                    <input type="text" value={searchKeyword} onChange={search} className="form-control" placeholder="What you are looking for?" />
                    <button type="submit" className="btn btn-primary" onClick={() => { throw new Error('💥 Dhishooom 💥') }}><i className="fa fa-search"></i></button>
                </div>
                <div className="list-group col-md-6">
                    {searchResult && searchResult.data.map((value, index) => {
                      return <a key={ index } onClick={()=> redirectToPost(value.slug)} className="list-group-item list-group-item-action flex-column align-items-start">
                          <div className="w-100 justify-content-between">
                              <img src={value.feature_image_url} style={{height:'80px'}} alt="" className="img-fluid float-left" />
                              <h5 className="mb-1">{ value.title }</h5>
                              <small>12 Jan, 2016</small>
                          </div>
                      </a>
                  })}
              </div>
            </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
