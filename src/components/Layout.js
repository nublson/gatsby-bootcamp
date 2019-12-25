import React from "react"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
