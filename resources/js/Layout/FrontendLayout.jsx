import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Footer from './LayoutComponent/Footer'
import HeaderLogo from './LayoutComponent/HeaderLogo'
import HeaderMenu from './LayoutComponent/HeaderMenu'
import TopBar from './LayoutComponent/TopBar'
import TopSearchBar from './LayoutComponent/TopSearchBar'

export default function FrontendLayout({children}) {
    return (
        <>
            <TopSearchBar />
            <TopBar />

            <HeaderLogo />

            <HeaderMenu />
            <div>{children}</div>

            <Footer />
        </>
  )
}
