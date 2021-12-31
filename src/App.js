import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
