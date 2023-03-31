import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLogo() {
  return (
    <div className="header-section">
        <div className="container">
            <div className="row">
                  <div className="col-md-12">
                    <div className="logo">
                        <Link to="/"><img src="/site/images/logo.png" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
