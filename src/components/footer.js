import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>Contact: (03) 9310 8055 | 20 Maida Ave, Sunshine North VIC 3020 | tkautomotive.13@gmail.com - © {new Date().getFullYear()} {this.props.siteName} - All Rights Reserved</span>
        </div>
      </div>
    );
  }
}
