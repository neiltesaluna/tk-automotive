import React from "react";
import Img from "gatsby-image";

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div className="about-main row">
        <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            fluid={data.photo.fluid}
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <div className="left col-md-7 col-lg-8">
          <div className="about-details">
            <span className="name">We are {data.name}.</span>
            <h2 className="sub-position">
              Your {data.designation}.
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}
            />
            <ul className="details">
              <li>
                <strong>Contact Number</strong>
                <p>
                  <a href={`tel:${data.contactNumber}`}>{data.contactNumber}</a>
                </p>
              </li>
              <li>
                <strong>Location</strong>
                <p>
                <a href="https://g.page/t-k-automotive?share" target="_blank" rel="noopener noreferrer">{data.location}</a>
                </p>
              </li>
              <li>
                <strong>Email</strong>
                <p>
                  <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
                </p>
              </li>
            </ul>
            {/* commenting our socials due to no link
            <div className="socials">
              <ul>
                <li>
                  <a
                    className="fab fa-facebook-f"
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
              </ul>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
