import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>
                I'm a self-taugth Full-Stack Developer with node and React, from
                Angola, currently living in Portugal.
            </p>
            <p>
                If you're hiring, <Link to="/contact">contact me</Link>!
            </p>
        </Layout>
    )
}

export default AboutPage
