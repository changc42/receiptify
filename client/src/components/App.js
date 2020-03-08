import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import WhatWeDo from "./WhatWeDo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          <Landing />
          <WhatWeDo />
          <AboutUs />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
