import Footer from "./components/Footer";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Agriculture from "./pages/Agriculture";
import RealEstate from "./pages/RealEstate";
import Publication from "./pages/Publication";
import DrinkingWater from "./pages/DrinkingWater";
import SubFooter from "./components/SubFooter.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Products from "./pages/Products.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  const location = useLocation();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/real_estate" element={<RealEstate />} />
          <Route path="/drinking_water" element={<DrinkingWater />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {location.pathname !== "/contact" && <SubFooter />}
      <Footer />
    </div>
  );
};

export default App;
