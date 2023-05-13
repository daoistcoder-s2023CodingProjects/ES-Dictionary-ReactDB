import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../Axios-Client.js";
import { useEffect } from "react";

import Navbar from "../Projects/ES-Dictionary/pages/Dashboard2/contents/Navbar";
import { Search } from "../Projects/ES-Dictionary/pages/Dashboard2/contents/Search";
import Sidebar from "../Projects/ES-Dictionary/pages/Dashboard2/contents/Sidebar";



export default function DefaultLayout() {
    const {user, token, setUser, setToken} = useStateContext();

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

    // useEffect(() => {
    //     axiosClient.get('/user')
    //         .then(({data}) => {
    //             setUser(data)
    //         })
    //   }, [])
    

    return (
       <div id="defaultLayout">
            <aside>
                <Sidebar />
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>

            <div className="content">
                <header>   
                                  
                    <div className="fixed-container">
                        <Navbar />
                        <Search />
                        <div>
                           
                            <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                        </div>
                    </div> 

                </header>

                <main>
                    <Outlet />
                </main>
            </div>
       </div>
    )
}