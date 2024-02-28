import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import BirdDetails from "./BirdDetails";
import NotFound from "./NotFound";
// import BirdList from "./BirdList";
import Birds from "./Birds";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BirdList" element={<Birds />} />
            <Route path="/birds/:id" element={<BirdDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
