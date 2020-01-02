import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = ({ data }) => {
    const { title, publishedDate, body } = data.contentfulBlogPost
    const { json } = body
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title["en-US"]
                const { url } = node.data.target.fields.file["en-US"]
                return <img alt={alt} src={url} />
            },
        },
    }

    return (
        <Layout>
            <h1> {title} </h1>
            <p> {publishedDate} </p>
            {documentToReactComponents(json, options)}
        </Layout>
    )
}

export default Blog
