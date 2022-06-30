import React from "react"
import profilePic from "../assets/matt-profile-pic.png";

export default function Info() {
    return (
       <div className="content">
            <img src={profilePic} alt="matt-profile-img" className="profile_pic" />
            <h2 className="info_name">Matt Wilder</h2>
            <p className="info_title">Full Stack Web3 Dev</p>
            <p className="info_website">**Insert github link here</p>
            <div className="buttons">
                <button className="email-button">
                    Email
                </button>
                <button className="linkedin-button">
                    LinkedIn
                </button>
            </div>
       </div>
    )
}