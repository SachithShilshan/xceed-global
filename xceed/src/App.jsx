import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ServicesIndex from './pages/ServicesIndex'
import AI from './pages/AI'
import Data from './pages/Data'
import BI from './pages/BI'
import Automation from './pages/Automation'
import Research from './pages/Research'
import Projects from './pages/Projects'
import Products from './pages/Products'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="services" element={<ServicesIndex/>} />
        <Route path="services/ai" element={<AI/>} />
        <Route path="services/data" element={<Data/>} />
        <Route path="services/bi" element={<BI/>} />
        <Route path="services/automation" element={<Automation/>} />
        <Route path="services/research" element={<Research/>} />
        <Route path="services/projects" element={<Projects/>} />
        <Route path="products" element={<Products/>} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}
