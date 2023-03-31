import React from 'react'

export default function TopBar() {
  return (
    <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div className="topsocial">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i className="fa fa-flickr"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google+"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                        <div className="topmenu text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="blog-category-01.html"><i className="fa fa-star"></i> Trends</a></li>
                                <li className="list-inline-item"><a href="blog-category-02.html"><i className="fa fa-bolt"></i> Hot Topics</a></li>
                                <li className="list-inline-item"><a href="page-contact.html"><i className="fa fa-user-circle-o"></i> Write for us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="topsearch text-right">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
