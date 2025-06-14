import { useMemo } from 'react'
import './App.css'

import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import Layout from './pages/Layout.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default function App() {
  return(
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
       
         <Route path="pages/Home" element={<Home />} />
        <Route path="pages/About" element={<About />} />
        
        </Route>
      </Routes>
    </BrowserRouter>

  )

}
