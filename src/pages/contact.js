import React from "react"

import Layout from "../components/Layout"

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>
                You can find me on{" "}
                <a
                    href="https://twitter.com/nubelsondev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>{" "}
                on{" "}
                <a
                    href="https://instagram.com/nubelsondev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
            </p>
        </Layout>
    )
}

export default ContactPage
