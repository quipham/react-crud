import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import LandingPage from './layouts/LandingPage/index';
import Header from './components/Header/index';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
