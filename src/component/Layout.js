import Header from "./Header/Header.js"
import Footer from "./Footer/Footer.js"
import React from "react"
import './Layout.css';
const Layout = ({ children }) => {
    return (
        <div>
            <div className="layout">
                <Header />

                <main>
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    )
}

export default Layout