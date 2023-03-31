import React from 'react'
import BannerAd from './components/BannerAd'
import HeaderRecentBlogs from './components/HeaderRecentBlogs'
import HomePostItem from './components/HomePostItem'
import FrontendLayout from './Layout/FrontendLayout'

export default function Main() {
  	return (
		<FrontendLayout>
            <HeaderRecentBlogs />
			<BannerAd />
			<div className="section">
				<div className="container">
					<HomePostItem />
				</div>
			</div>
        </FrontendLayout>
  	)
}
