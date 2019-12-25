import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyle from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <header className={headerStyle.header}>
            <h1>
                <Link
                    className={headerStyle.title}
                    activeClassName={headerStyle.activeNavItem}
                    to="/"
                >
                    {title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link
                            className={headerStyle.navItem}
                            activeClassName={headerStyle.activeNavItem}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyle.navItem}
                            activeClassName={headerStyle.activeNavItem}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyle.navItem}
                            activeClassName={headerStyle.activeNavItem}
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyle.navItem}
                            activeClassName={headerStyle.activeNavItem}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
