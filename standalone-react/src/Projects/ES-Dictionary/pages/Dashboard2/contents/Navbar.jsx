import React from "react";

export default function Navbar({click}) {
  

  return (
    <>
          <nav className="navbar">
            <div className="left">
              <a href="#0" className="menubtn" onClick={click}>
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
 </>
    )
}
