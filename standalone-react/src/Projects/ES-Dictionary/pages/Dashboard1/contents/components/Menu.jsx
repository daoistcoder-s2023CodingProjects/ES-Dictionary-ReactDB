import React from "react";

export function Menu() {
    return (
            <div className="Menu">
                  <div className="flexbox1">
                    <div className="progressbar"></div>
                    {/*  {'\n'} is a linebreak in react */}
                    <a href="#"><p>Search Words</p></a> {'\n'} 
                    <h2>45%</h2>
                  </div>
                  <div className="flexbox1">
                  <div className="progressbar"></div>
                  <a href="#"><p>Delete Words</p></a> {'\n'} 
                    <h2>10%</h2>
                  </div>
                  <div className="flexbox1">
                  <div className="progressbar"></div>
                  <a href="#"><p>Save Words</p></a> {'\n'} 
                    <h2>50%</h2>
                  </div>
            </div>
    )
}