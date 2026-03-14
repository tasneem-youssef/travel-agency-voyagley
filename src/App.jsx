import Home from "./pages/home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/trips"  />
          <Route path="/login" />
          <Route path="/signup"  />
          <Route path="/destinations" />
          <Route path="/hotels" />
          <Route path="/contact" />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
