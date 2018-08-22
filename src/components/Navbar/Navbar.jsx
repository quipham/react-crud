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

  handleScroll = event => {
      if (window.scrollY === 0 && this.state.scrolling === true) {
          this.setState({
            scrolling: false,
            navBarStyle: "navbar navbar-expand-lg navbar-light fixed-top navbar"
          });
      }
      else if (window.scrollY !== 0 && this.state.scrolling !== true) {
          this.setState({scrolling: true});
      }

      if (this.state.scrolling) {
        this.setState({
          navBarStyle: "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
        })
      }
  }

  render() {
    return (
      <nav
        className={this.state.navBarStyle}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand">
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
                <a className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
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
