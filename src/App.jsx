import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../Component/Nav'
import Hero from '../Component/hero'
import Specials from '../Component/Special'
import Footer from '../Component/Footer'

function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Specials />
        <Footer />

      </div>

  );
}


export default App
