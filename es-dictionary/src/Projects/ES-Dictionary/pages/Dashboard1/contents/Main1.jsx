import React, { useState } from "react";
import Navbar from "../../Dashboard2/contents/Navbar";
import Sidebar from "../../Dashboard2/contents/Sidebar";
import { Menu } from "./components/Menu";
import Statistics from "./components/Statistics";
import './statTemplate.webp'


export default function Main1() {
        
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMain, setShowMain] = useState(false);


  function handleClick(){
    setShowSidebar(!showSidebar);
    setShowMain(!showMain);
  }

  return (
    <>
    <main>
    <div className="fixed-container">
      <div className="content_statistics">
      <img className="img-stat" alt="statTest" />
      </div>
    </div> 
     
    </main>
    </>
  );
}