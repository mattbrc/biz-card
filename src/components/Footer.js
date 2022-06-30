import React from "react"
import facebookIcon from "../assets/Facebook-Icon.png"
import instagramIcon from "../assets/Instagram-Icon.png"
import twitterIcon from "../assets/Twitter-Icon.png"
import githubIcon from "../assets/GitHub-Icon.png"

export default function Footer() {
    return (
       <footer>
            <a href="https://twitter.com/matt_brc">
                <img src={twitterIcon} alt="matt-twitter" className="footer-icon"/>
            </a>
            <a href="https://www.facebook.com/matt.bryce.22">
                <img src={facebookIcon} alt="matt-facebook" className="footer-icon"/>
            </a>
            <a href="https://www.instagram.com/matthbrc/">
                <img src={instagramIcon} alt="matt-instagram" className="footer-icon"/>
            </a>
            <a href="https://github.com/mattbrc">
                <img src={githubIcon} alt="matt-github" className="footer-icon"/>
            </a>
       </footer>
    )
} 