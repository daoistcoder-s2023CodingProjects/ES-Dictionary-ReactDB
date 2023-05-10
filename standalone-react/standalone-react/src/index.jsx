import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import ReactApp from './assets/react-folder/react'
import './index.css'

const Page = (
  <React.StrictMode>
    <BrowserRouter>
      <ReactApp />
    </BrowserRouter>
  </React.StrictMode>
)

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render(Page)