import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const App = () => {
    return (
        <Layout>
            <h1>Hello!</h1>
            <h2>I', Nubelson, a Full-Stack developer living in Portugal.</h2>
            <p>
                Need a developer? <Link to="/contact">Contact me</Link>
            </p>
        </Layout>
    )
}
export default App
