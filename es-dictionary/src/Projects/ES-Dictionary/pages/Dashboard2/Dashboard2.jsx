import React from "react";
// import Sidebar from "./contents/Sidebar";
import Main from "./contents/Main";
import './dashboard.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function Dashboard2(){
    
    return (
        <Router>
        <div className="container">
            <Main />
        </div>
        </Router>
    )
}

