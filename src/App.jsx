import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";
import Home from "../src/Pages/home";
import Plots from "../src/Pages/plots";
import Event from "../src/Pages/event";
import Testimonial from "../src/Pages/testimonial";
import Contact from "../src/Pages/contact";
import Services from "../src/Pages/services";
import Farmplots from  "../src/Pages/farmplots";

function App() {
  return (
    <>
      <BrowserRouter>

        {/* NAVBAR ALWAYS VISIBLE */}
        <Navbar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Our_Projects/plots" element={<Plots />} />
          <Route path="/event" element={<Event />} />
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/Our_Projects/farmplots" element={<Farmplots/>}/>

        </Routes>

        {/* FOOTER ALWAYS VISIBLE */}
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
