import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import blogStyles from "./blog.module.scss"
import Layout from "../components/Layout"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const { edges } = data.allMarkdownRemark
    const nodes = edges.map(edge => {
        const { id, fields } = edge.node
        const { title, date } = edge.node.frontmatter
        const { slug } = fields
        return (
            <li className={blogStyles.post} key={id}>
                <Link to={`/blog/${slug}`}>
                    <h2>{title}</h2>
                    <p>{date}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on!</p>
            <ol className={blogStyles.posts}>{nodes}</ol>
        </Layout>
    )
}

export default BlogPage
