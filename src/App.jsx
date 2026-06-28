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
import TripsLayout from "./components/trips/TripsLayout.jsx";
import HotelsLayout from "./components/hotels/HotelsLayout.jsx";
import ActivitiesLayout from "./components/activities/ActivitiesLayout.jsx";
import DestinationsLayout from "./components/destinations/DestinationsLayout.jsx";

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
          <Route path="/hotels" element={<Hotels />} />
          <Route path="hotels/:hotelId" element={<HotelsLayout />} />
          {/*activities page and its subroutes*/}
          <Route path="/activities" element={<Activities />} />
          <Route path="activities/:activityId" element={<ActivitiesLayout />} />
          {/* login page*/}
          <Route path="/login" />
          {/* signup page*/}
          <Route path="/signup" />
          {/*destinations page and its subroutes*/}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="destinations/:destinationId" element={<DestinationsLayout />} />
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
