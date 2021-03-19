import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="contact" id="Contact">
        <div className="container pb-5">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <a className="btn-floating blue accent-1">
                <i className="fas fa-map-marker-alt"></i>
              </a>
              <p className="mb-md-0"><a href="https://g.page/t-k-automotive?share" target="_blank" rel="noopener noreferrer">{data.location}</a></p>
            </div>
            <div className="col-md-4">
              <a className="btn-floating blue accent-1">
                <i className="fas fa-phone"></i>
              </a>
              <p><a href={`tel:${data.contactNumber}`}>{data.contactNumber}</a></p>
            </div>
            <div className="col-md-4">
              <a className="btn-floating blue accent-1">
                <i className="fas fa-envelope"></i>
              </a>
              <p className="mb-0"><a href={`mailto:${data.gmail}`}>{data.gmail}</a></p>
            </div>
          </div>
          <div id="map-container-section" className="z-depth-1-half map-container-section mb-4" style={{ height:400 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.453358217038!2d144.8328220153172!3d-37.755966679762736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65f9098c097f3%3A0xda5edddc635b4370!2sT%26K%20Automotive!5e0!3m2!1sen!2sau!4v1616112363353!5m2!1sen!2sau" frameBorder="0"
              style={{ border:0 }} allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}
