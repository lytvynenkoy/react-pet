import React from "react";
import "../styles/Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
        <footer>
            <div className="container">
                <div className="floor-wrapper">
                    <p>&copy; {currentYear} Lytvynenko Yurii. All rights reserved.</p>
                    <a href="https://google.com"><p>Privacy Policy</p></a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer