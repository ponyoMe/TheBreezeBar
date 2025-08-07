
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Order from './pages/Services'
import AboutUs from './pages/AboutUs'
import Menu from './pages/Menu'
import { ActivePageProvider } from './context/ActivePageContext'
import Services from './pages/Services'
import { AudioContextProvider } from './context/AudioContext'
import Player from './components/Player'
import './index.css'


function App() {
  
  return (
    <AudioContextProvider>
    <ActivePageProvider>
    <Player />
    <Layout>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Layout>
    
    </ActivePageProvider>
    </AudioContextProvider>
  )
}

export default App
