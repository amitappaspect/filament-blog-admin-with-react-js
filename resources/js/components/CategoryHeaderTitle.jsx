import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryHeaderTitle({category}) {
  return (
    <div className="page-title wb">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                      <h2><i className="fa fa-shopping-bag bg-red"></i> { (category && category.category) ? category.category.name : '' }</h2>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">{ (category && category.category) ? category.category.name : '' }</li>
                    </ol>
                </div>         
            </div>
        </div>
    </div>
  )
}
