import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import Overview from "./Overview";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="container-body">
          <div className="weather-app-body">
            <GoogleFontLoader
              fonts={[
                {
                  font: "Ubuntu",
                  style: "normal",
                  weights: [400],
                  display: "swap",
                },
              ]}
              subsets={[
                "cyrillic-ext",
                "cyrillic",
                "greek-ext",
                "latin",
                "latin-ext",
                "greek",
              ]}
            />
            <Overview city="London" />
          </div>
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
