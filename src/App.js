import './App.css';
import React from "react";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";
import { Page5 } from "./pages/Page5";
import { Page6 } from "./pages/Page6";
import { Page7 } from "./pages/Page7";
import { Page8 } from "./pages/Page8";
import { SignaturePage } from "./pages/SignaturePage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/signature">
            <SignaturePage />
          </Route>
          <Route path="/">
              <div className="full-page"><Page1 /></div>
              <div className="full-page"><Page2 /></div>
              <div className="full-page"><Page3 /></div>
              <div className="full-page"><Page4 /></div>
              <div className="full-page"><Page5 /></div>
              <div className="full-page"><Page6 /></div>
              <div className="full-page"><Page7 /></div>
              <div className="full-page"><Page8 /></div>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
