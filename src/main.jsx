import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename = {import.meta.env.BASE_URL}>
    <Routes>
      <Route path = "*" element = {<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
