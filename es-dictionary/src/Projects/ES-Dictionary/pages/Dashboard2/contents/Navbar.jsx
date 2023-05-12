import React from "react";

export default function Navbar() {
    return (
        <div className="fixed-container">
          <nav className="navbar">
            <div className="left">
              <a href="#0" className="menubtn">
                <i className="fa-solid fa-bars"></i>
              </a>
              <div className="dashboard"><p>Dashboard</p></div>
            </div>
            <div className="right">
              <a href="#0">
                <i className="fa-solid fa-folder-open"></i>
                <p>Upload</p>
              </a>
            </div>
          </nav>
          <div className="search-bar">
            <div className="left-search">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search.."
              />
              <a href="#0"><i className="fa-solid fa-magnifying-glass"></i></a>
            </div>
            <div className="right-search">
              <div className="box">
                <a href="#0"><i className="fa-solid fa-floppy-disk"></i></a>
              </div>
              <div className="box">
                <a href="#0"><i className="fa-solid fa-trash"></i></a>
              </div>
              <div className="box">
                <a href="#0"><i className="fa-solid fa-broom"></i></a>
              </div>
            </div>
          </div>
        </div>
    )
}