import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import './index.css'
import ImgPart from './components/ImgPart/ImgPart.jsx'
import ThirdPart from './components/ThirdPart/ThirdPart.jsx'
import FourthPart from './components/FourthPart/FourthPart.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <ImgPart />
    <ThirdPart />
    <FourthPart />
    <Footer />
  </React.StrictMode>,
)
