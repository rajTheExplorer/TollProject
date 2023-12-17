import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <section className="footer">
        <div className="content">
          <div className="left">
            <div className="sub-left">
              <h4>Company</h4>
              <p>We are TollBuddy</p>
              <p>Careers</p>
              <p>Press</p>
              <p>Blog</p>
              <p>Contact us</p>
            </div>
            <div className="sub-right">
              <h4>Products</h4>
              <p>Discover More</p>
              <p>Join Us</p>
              <p>Latest News</p>
              <p>Read Our Stories</p>
              <p>Connect Now</p>
            </div>
          </div>

          <div className="right">
            <div className="sub-left">
              <h4>Plan Your Trips With Us</h4>
              <p>About</p>
              <p>Jobs</p>
              <p>News</p>
              <p>Articles</p>
              <p>Contact</p>
            </div>
            <div className="sub-right">
              <h4>Have An EV</h4>
              <p>Our Story</p>
              <p>Opportunities</p>
              <p>Media</p>
              <p>Insights</p>
              <p>Reach Out</p>
            </div>
          </div>

          <div className="left">
            <div className="sub-left">
              <h4>Services</h4>
              <p>Enhance Your Experience</p>
              <p>Explore Opportunities</p>
              <p>Latest Updates</p>
              <p>Insights & Analysis</p>
              <p>Get in Touch</p>
            </div>
            <div className="sub-right">
              <h4>Our Solutions</h4>
              <p>Innovative Solutions</p>
              <p>Join Our Team</p>
              <p>Breaking News</p>
              <p>Engaging Stories</p>
              <p>Connect Instantly</p>
            </div>
          </div>

          <div className="right">
            <div className="sub-left">
              <h4>Explore Destinations</h4>
              <p>About Our Destinations</p>
              <p>Career Opportunities</p>
              <p>Press Releases</p>
              <p>Featured Articles</p>
              <p>Contact Information</p>
            </div>
            <div className="sub-right">
              <h4>Electric Vehicles</h4>
              <p>Our EV Journey</p>
              <p>Growth Opportunities</p>
              <p>Industry Insights</p>
              <p>Informative Resources</p>
              <p>Connect with Us</p>
            </div>
          </div>
        </div>
        <p className="footer-tagline">
          TollBuddy is a product of Raj and reflects my mission to serve
          businesses of all sizes.
        </p>
        <p className='copyright'>© TOLLBUDDY, INC. ALL RIGHTS RESERVED</p>
      </section>
    </StyledFooter>
  );
}


let StyledFooter = styled.section`
  .footer {
    width: 100vw;
    background-color: #00152a;
    margin: 0 auto;
    padding: 2rem;
  }
  .footer .content {
    max-width: 1070px;
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    margin: 0 auto;
    color: white;
  }
  .footer h4 {
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }

  .footer .content .left,
  .footer .content .right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: 1.5rem;
  }
  .footer-tagline {
    text-align: center;
    color: #1da1f2;
    margin-top: 1rem;
  }
  .copyright {
    text-align: center;
    color: #555555;
    margin-top: 1rem;
  }
  @media (max-width: 800px) {
    .footer .content .left,
    .footer .content .right {
      grid-template-columns: 1fr;
    }
  }
`;

export default Footer