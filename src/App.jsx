import Home from "./pages/home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import NotFound from "./pages/NotFound.jsx";
import BackToTop from "./components/backToTop.jsx";
import Footer from "./components/footer.jsx";
import Trips from "./pages/trips.jsx";
import Hotels from "./pages/hotels.jsx";
import Activities from "./pages/activities.jsx";
import Destinations from "./pages/destinations.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/TravelAgency">
        <Header />
        <BackToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" />
          <Route path="/signup" />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
