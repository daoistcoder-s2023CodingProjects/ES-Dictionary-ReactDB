import React from "react";

export default function Navbar({ click }) {
    return(
        <nav className="navbar">
            <div className="left">
                <a href="#0" className="menutbtn" onClick={click}>
                    <i className="fa-solid fa-bars"></i>
                    <p>Dashboard</p>
                </a>
            </div>
            <div className="right">
                <a href="#0">
                    <i className="fa-solid fa-folder"></i>
                    <p>Upload</p>
                </a>
            </div>
        </nav>
    )
}