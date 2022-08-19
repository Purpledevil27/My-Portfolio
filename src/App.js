import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Preloader from "../src/components/Preload"
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/style.css'
import Navbar1 from "./components/Navbar1"
import Footer from "./components/Footer"
import Scroll from "./components/Scroll"
import Home from './components/home/Home'
import About from "./components/about/About"
import Project from "./components/projects/Project"

const App = () => {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar1 />
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  )
}

export default App