import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = ({ data }) => {
    const { title, date } = data.markdownRemark.frontmatter
    const { html } = data.markdownRemark

    return (
        <Layout>
            <h1>{title}</h1>
            <p> {date} </p>

            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </Layout>
    )
}

export default Blog
