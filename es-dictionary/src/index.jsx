import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import ReactApp from './assets/react-folder/react'
import Dashboard2 from './Projects/ES-Dictionary/pages/Dashboard2/Dashboard2';
import Dashboard1 from './Projects/ES-Dictionary/pages/Dashboard1/Dashboard1';
import './index.css'


const Page = (
  <React.StrictMode>
<<<<<<< HEAD:es-dictionary/src/index.jsx

      <Dashboard2/>

=======
    <BrowserRouter>
      <Dashboard1/>
    </BrowserRouter>
>>>>>>> a2b41d4c7dd2c632ba8e6baf4301f93fec0e9ffa:standalone-react/src/index.jsx
  </React.StrictMode>
  

)

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render(Page)