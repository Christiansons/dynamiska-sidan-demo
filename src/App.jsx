import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Projects from "./components/Projects.jsx"
import Cv from "./components/Cv.jsx"
import Contact from "./components/Contact.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="figtree-font">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cv" element={<Cv/>}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
