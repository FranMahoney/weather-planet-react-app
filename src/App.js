import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./Search";
import Overview from "./Overview";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="container-body">
          <div className="weather-app-body">
            <Search />
            <Overview />
          </div>
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
