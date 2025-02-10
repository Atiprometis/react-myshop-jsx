import { useState } from 'react'
import { Routes, Route,Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import About from './pages/About'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <button onClick={() => setCount((count) => count + 1)}></button>
          count is {count}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>


      
    </>
  )
}

export default App
