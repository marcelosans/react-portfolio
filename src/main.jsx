import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar/Navbar.jsx'
import Header from './header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Header />
  </StrictMode>,
)
