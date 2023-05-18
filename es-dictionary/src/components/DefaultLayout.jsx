import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../Axios-Client.js";
import { useEffect, useState } from "react";
import '../Projects/Dashboard 2 components/Dictionary.css'
import Navbar from "../Projects/Dashboard 2 components/Navbar";
import Sidebar from "../Projects/Dashboard 2 components/Sidebar";


export default function DefaultLayout() {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showMain, setShowMain] = useState(false);

    function handleClick(){
        setShowSidebar(!showSidebar);
        setShowMain(!showMain);
      }

    const { user, token, setUser, setToken } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    return (
        <>
            <Sidebar click={onLogout} showSidebar={showSidebar}/>
            <main className={showMain?"main-container collapse":"main-container"}>
            <div className="fixed-container">
            <Navbar click={handleClick}/>
             <Outlet />
             </div>
            </main>


        </>
    )
}