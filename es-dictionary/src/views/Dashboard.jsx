import React from 'react'
import '../Projects/ES-Dictionary/pages/Dashboard2/dashboard.css'
import Main0 from '../Projects/ES-Dictionary/pages/Dashboard1/contents/Main0'
import { Menu } from '../Projects/ES-Dictionary/pages/Dashboard1/contents/components/Menu'
import Statistics from '../Projects/ES-Dictionary/pages/Dashboard1/contents/components/Statistics'
import '../Projects/ES-Dictionary/pages/Dashboard1/contents/components/content_statistics.css'
import '../Projects/ES-Dictionary/pages/Dashboard1/contents/components/Menu.css'
export default function Dashboard() { 

    return (
       <>
           <Menu />
           <Statistics />
    </>
    )
}