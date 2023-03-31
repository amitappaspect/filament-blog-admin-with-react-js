import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { storeAllMenu, setMenu, FetchMenu } from '../../stores/MenuSlice'

export default function HeaderMenu() {
    const menus = useSelector(storeAllMenu)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(FetchMenu());
    }, [])
    

  return (
    <header className="header">
          <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#cloapediamenu" aria-controls="cloapediamenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  <div className="collapse navbar-collapse justify-content-md-center" id="cloapediamenu">
                        <ul className="navbar-nav">
                          {menus.map(function (value, index) {
                              if (value.type=='author') {
                                return <li className="nav-item" key={index}>
                                    <Link className="nav-link color-grey-hover" to={'/user/'+value.slug_name}>{value.menu_name}</Link>
                                </li>
                              } else if (value.type=='category') {
                                return <li className="nav-item" key={index}>
                                    <Link className="nav-link color-grey-hover" to={'/category/'+value.slug}>{value.menu_name}</Link>
                                </li>
                              } else {
                                return <li className="nav-item" key={index}>
                                    <Link className="nav-link color-grey-hover" to={'/post/'+value.slug}>{value.menu_name}</Link>
                                </li>
                              }
                          }) }
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
  )
}
