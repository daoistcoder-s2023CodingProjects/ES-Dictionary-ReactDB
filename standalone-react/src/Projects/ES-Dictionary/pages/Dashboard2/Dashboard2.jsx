import React from "react";
import Sidebar from "./contents/Sidebar";
import Main from "./contents/Main";
import './dashboard.css';

export default function Dashboard2(){
    return (
        <div className="content">
            <Sidebar />
            <Main />
        </div>
    )
}

