import React from "react";

const Footer = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading">Let's Get In Touch!</h2>
            <hr className="my-4" />
            <p className="mb-5">
              My very first Blog
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fa fa-phone fa-3x mb-3 sr-contact" />
            <p>090-247-5388</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope-o fa-3x mb-3 sr-contact" />
            <p>
              <a href="mailto:qui.phamnhu@gmail.com">
                qui.phamnhu@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
