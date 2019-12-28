import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
                    }
                }
            }
        }
    `)

    const { edges } = data.allMarkdownRemark
    const nodes = edges.map(edge => {
        const { id } = edge.node
        const { title, date } = edge.node.frontmatter
        return (
            <li key={id}>
                <h2>{title}</h2>
                <p>{date}</p>
            </li>
        )
    })

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on!</p>
            <ol>{nodes}</ol>
        </Layout>
    )
}

export default BlogPage
