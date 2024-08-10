import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Careers from "./pages/careers/Careers"
import Services from "./pages/services/Services"
import Aboutus from "./pages/about us/Aboutus"
import Contactus from "./pages/contactus/Contactus"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Button from "./components/button/Button"


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Button height={38} width={214} Text={'Get free consultation'}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )

}
  
export default App

    

