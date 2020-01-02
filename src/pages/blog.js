import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import blogStyles from "./blog.module.scss"
import Layout from "../components/Layout"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        id
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    const { edges } = data.allContentfulBlogPost
    const nodes = edges.map(edge => {
        const { id, title, slug, publishedDate } = edge.node
        return (
            <li className={blogStyles.post} key={id}>
                <Link to={`/blog/${slug}`}>
                    <h2>{title}</h2>
                    <p>{publishedDate}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>{nodes}</ol>
        </Layout>
    )
}

export default BlogPage
