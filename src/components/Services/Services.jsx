import React from "react";
import loadingGif from '../../loading.gif'

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Page is under construction</h2>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="container center-block">
       <img src={loadingGif} alt="" />
      </div>
    </section>
  );
};

export default Services;