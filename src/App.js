import './App.css';
import React from "react";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

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
          <Fullpage>
            <FullPageSections>
              <FullpageSection style={{padding: '.5rem',}}><Page1 /></FullpageSection>
              <FullpageSection style={{padding: '.5rem',}}><Page2 /></FullpageSection>
              <FullpageSection style={{padding: '.5rem',}}><Page3 /></FullpageSection>
              <FullpageSection style={{padding: '.5rem',}}><Page4 /></FullpageSection>
              <FullpageSection style={{backgroundColor: '#fff', padding: '.5rem',}}><Page5 /></FullpageSection>
              <FullpageSection style={{padding: '.5rem',}}><Page6 /></FullpageSection>
              <FullpageSection style={{padding: '.5rem',}}><Page7 /></FullpageSection>
              <FullpageSection style={{padding: '.5rem',}}><Page8 /></FullpageSection>
            </FullPageSections>
          </Fullpage>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
