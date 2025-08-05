
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Order from './pages/Order'
import AboutUs from './pages/AboutUs'
import Menu from './pages/Menu'
import { CartProvider } from './context/CartContext'
import { ActivePageProvider } from './context/ActivePageContext'


function App() {
  
  return (
    <ActivePageProvider>
    <CartProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </Layout>
    </CartProvider>
    </ActivePageProvider>
  )
}

export default App
