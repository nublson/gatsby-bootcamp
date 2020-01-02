import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Head from "../components/Head"
import Layout from "../components/Layout"

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                }
            }
        }
    `)

    const { description } = data.site.siteMetadata

    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>{description}</p>
            <p>
                If you're hiring, <Link to="/contact">contact me</Link>!
            </p>
        </Layout>
    )
}

export default AboutPage
