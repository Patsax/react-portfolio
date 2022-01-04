import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route exact path="/" element={<About/>}></Route>

          <Route exact path="/portfolio" element={<Portfolio/>}></Route>

          <Route exact path="/resume" element={<Resume/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
