import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import EpisodesPage from "./components/Episodes/EpisodesPage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
