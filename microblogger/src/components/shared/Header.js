import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="align-middle" id="page-header">
          {this.props.title}
        </h1>
      </header>
    );
  }
}

export default Header;
