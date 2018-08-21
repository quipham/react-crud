import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      navBarStyle: "navbar navbar-expand-lg navbar-light fixed-top"
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    //TO-DO
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
        id="mainNav"
        onScroll={this.handleScroll}
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            Our Place
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
