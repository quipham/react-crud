import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './layouts/LandingPage/LandingPage';
import Header from './components/Header/Header';

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
