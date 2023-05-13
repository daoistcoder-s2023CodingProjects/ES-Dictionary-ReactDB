import {Navigate, createBrowserRouter} from "react-router-dom";
import Dashboard2 from "./Projects/ES-Dictionary/pages/Dashboard2/Dashboard2.jsx";



const router = createBrowserRouter( [
    {
        path: '/',
        element: <Dashboard2 />,
        children:[
            {
                path: '/',
                element: <Navigate to="/dashboard2" />
            },
            {
                path: '/dashboard2',
                element: <Dashboard2 />
            },
        ]
    },
    // {
    //     path: '/',
    //     element: <Dashboard2 />,
    //     children: [
    //         {
    //             path: '/login',
    //             element: <Dashboard2 />
    //         },
    //         {
    //             path: '/signup',
    //             element: <Dashboard2 />
    //         },
    //     ]
    // },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;