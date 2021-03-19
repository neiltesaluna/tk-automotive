import React, { Component } from "react";
import Slider from "react-slick";
var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000
};

export default class Testimonial extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="slider-section section testimonials" id="Testimonials">
        <div className="container">
          <div className="section-head text-center">
            <h2>Testimonials</h2>
            <p><a href="https://www.google.com/search?q=t%26k+automotive&oq=t%26k+auto&aqs=chrome.0.69i59j69i57j0i457j46i175i199j0j69i61l3.5333j0j4&sourceid=chrome&ie=UTF-8#lrd=0x6ad65f9098c097f3:0xda5edddc635b4370,1,,," target="_blank" rel="noopener noreferrer">Google Reviews for T&K Automotive</a></p>
          </div>
          <Slider {...settings}>
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="testimonials-item">
                  <div className="testi-inner">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />
                    <h3 className="name">{item.node.name}</h3>
                    <span className="sub-name">{item.node.subTitle}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
