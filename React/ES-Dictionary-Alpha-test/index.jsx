import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard2 from "./ES-Dictionary/Dashboard2";

export default function ESDictionary() {
    return (
        <Dashboard2 />
        // <BrowserRouter>
        //     <Routes>
        //      <Route path="/ES-Dictionary/Dashboard2/" element={<Dashboard2 />}></Route>
        //     </Routes>
        // </BrowserRouter>
    )
}

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render(<ESDictionary />)
