import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./layouts/LandingPage";
import Header from "./components/Header";

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
