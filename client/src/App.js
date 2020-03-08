import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          <h1>home page</h1>
          <a href="/api/test">go to /api/test</a>
        </Route>
        <Route path="/test" exact>
          test copomnetn
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
