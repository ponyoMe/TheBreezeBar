import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './layout/NavBar'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Order from './pages/Order'
import AboutUs from './pages/AboutUs'
import Menu from './pages/Menu'


function App() {
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </Layout>
  )
}

export default App
