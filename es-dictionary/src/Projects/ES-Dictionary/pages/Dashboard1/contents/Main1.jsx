import React, { useState } from "react";
import Navbar from "../../Dashboard2/contents/Navbar";
import Sidebar from "../../Dashboard2/contents/Sidebar";
import { Menu } from "./components/Menu";
import Statistics from "./components/Statistics";


export default function Main1() {
        
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMain, setShowMain] = useState(false);


  function handleClick(){
    setShowSidebar(!showSidebar);
    setShowMain(!showMain);
  }

  return (
    <>
    <Sidebar showSidebar={showSidebar}/>
    <main className={showMain?"main-container collapse":"main-container"}>
    <div className="fixed-container">
      <Navbar click={handleClick}/>
      <Menu /> 
     </div> 
      <Statistics/>
    </main>
    </>
  );
}