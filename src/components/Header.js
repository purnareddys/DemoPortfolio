import React from "react";
// import "./Header.css";
import "./Header.css";
import "./index.css";
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <p>Programmer's Den</p>
          <p>Top Players</p>
          <p>Maze Game</p>
          <p href="#section-link">
            <button>About Me</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
