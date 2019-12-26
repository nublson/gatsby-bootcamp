require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Full-Stack Bootcamp`,
        author: `nubelsondev`,
        description: `A 22 years old self-taught Full-Stack Developer with Node and React from Angola, currently living in beautiful Portugal.`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`,
            },
        },
    ],
}
