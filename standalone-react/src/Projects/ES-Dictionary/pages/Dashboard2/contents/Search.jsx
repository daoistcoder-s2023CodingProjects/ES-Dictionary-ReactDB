import React from "react"

export function Search(){
   return(
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
   )
}