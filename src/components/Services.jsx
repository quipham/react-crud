import React from "react";
import "../font-awesome/css/font-awesome.css"


const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <hr className="my-4" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-coffee text-primary mb-3 sr-icons" />
                  <h3 className="mb-3">Cup of Coffee</h3>
                  <p className="text-muted mb-0">Life Is About Experiences!</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons" />
                  <h3 className="mb-3">Made with Love</h3>
                  <p className="text-muted mb-0">
                    Make websites with love these days!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
