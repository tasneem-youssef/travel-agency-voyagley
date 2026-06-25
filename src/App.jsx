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
import TripsLayout from "./components/TripsLayout.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/travel-agency-voyagley">
        <Header />
        <BackToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* trips page and its subroutes */}
          <Route path="/trips" element={<Trips />} />
          <Route path="trips/:tripId" element={<TripsLayout />} />
          {/*hotels page and its subroutes*/}
          <Route path="/hotels" element={<Hotels />} >
            <Route path="hotel1" />
            <Route path="hotel2" />
            <Route path="hotel3" />
            <Route path="hotel4" />
            <Route path="hotel5" />
            <Route path="hotel6" />
          </Route>
          {/*activities page and its subroutes*/}
          <Route path="/activities" element={<Activities />} >
            <Route path="activity1" />
            <Route path="activity2" />
            <Route path="activity3" />
            <Route path="activity4" />
            <Route path="activity5" />
            <Route path="activity6" />
          </Route>
          {/* login page*/}
          <Route path="/login" />
          {/* signup page*/}
          <Route path="/signup" />
          {/*destinations page and its subroutes*/}
          <Route path="/destinations" element={<Destinations />} >
            <Route path="destination1" />
            <Route path="destination2" />
            <Route path="destination3" />
            <Route path="destination4" />
            <Route path="destination5" />
            <Route path="destination6" />
          </Route>
          {/*contact page*/}
          <Route path="/contact" />
          {/*not found page*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
