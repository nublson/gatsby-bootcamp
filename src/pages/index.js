import React from "react"
import { Link } from "gatsby"

import Footer from "../components/Footer"
import Header from "../components/Header"

const App = () => {
    return (
        <div>
            <Header />
            <h1>Hello!</h1>
            <h2>I', Nubelson, a Full-Stack developer living in Portugal.</h2>
            <p>
                Need a developer? <Link to="/contact">Contact me</Link>
            </p>

            <Footer />
        </div>
    )
}
export default App
