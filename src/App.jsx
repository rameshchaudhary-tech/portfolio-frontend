import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"
import HireMe from "./pages/hire-me"
import GetInTouch from "./pages/GetInTouch"
import Footer from "./components/Footer"
//Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import Dashboard from "./pages/admin/Dashboard";
import ProjectsAdmin from "./pages/admin/ProjectsAdmin";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/contact" element={<GetInTouch />} />
        {/* The new route for your Hire Me page */}
        <Route path="/hire-me" element={<HireMe />} />

        {/* Admin routes */}
 <Route path="/admin" element={<AdminLogin />} />
  <Route path="/admin/register" element={<AdminRegister />} />
    <Route path="/admin/dashboard" element={<Dashboard />} />
  <Route path="/admin/projects" element={<ProjectsAdmin />} />
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App