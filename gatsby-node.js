const path = require("path")

module.exports = {
    async createPages({ graphql, actions }) {
        const { createPage } = actions

        // Get path to template
        const blogTemplate = path.resolve(`./src/templates/blog.js`)

        // get markdown data
        const res = await graphql(`
            query {
                allContentfulBlogPost {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `)
        const { edges } = res.data.allContentfulBlogPost
        // Create new pages
        edges.forEach(edge => {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.slug}`,
                context: {
                    slug: edge.node.slug,
                },
            })
        })
    },
}
