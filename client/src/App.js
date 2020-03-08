import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          home page
          <Link to="/api/test">go to /api/test</Link>
        </Route>
        <Route path="/test" exact>
          test copomnetn
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
