import React from 'react'
import styled from 'styled-components';

const Faq = () => {
  return (
    <StyledFaq>
      <main>
        <h2>FAQ</h2>
        <p className="underline"></p>
        <section className="faq">
          <article>
            <h2>Can Google Maps calculate tolls?</h2>
            <p>
              No, Google Maps cannot calculate tolls. However, it can indicate
              where tolls are in turn-by-turn directions. Use TollGuru Toll
              calculator instead which is built on Google Maps but also
              calculates tolls for your trip by all vehicle types - across all
              the US states.
            </p>
            <div className="stripe"></div>
          </article>
          <article>
            <h2>How do I calculate tolls for a road trip?</h2>
            <p>
              You can calculate tolls for your trip using TollGuru Toll
              Calculator app. All you have to do is specify origin and
              destination, and Submit. You can choose your vehicle type, toll
              tags, departure time and more. The mobile app (iOS or Android) is
              also available.
            </p>
            <div className="stripe"></div>
          </article>
          <article>
            <h2>How do you pay tolls in the US?</h2>
            <div>
              <p>
                The toll payment method in the US depends upon the facility
                type. It can be one or many of the following:
              </p>
              <li>Transponder (primary, secondary)</li>
              <li>Cash</li>
              <li>License plate or Video toll</li>
              <li>Credit card Prepaid card</li>
              <li>Tap and Paycard</li>
              <p>
                The major ones include New York, New Jersey, Florida,
                California, Texas,
              </p>
            </div>
            <div className="stripe"></div>
          </article>
          <article>
            <h2>Which US states have toll booths?</h2>
            <p>
              Out of the 50, 37 US states have toll booths for turnpikes,
              bridges or other toll facilities. The major ones include New York,
              New Jersey, Florida, California, Texas, and Puerto Rico territory.
              13 of the US states and the District of Columbia do not have any
              toll roads. The US Toll Calculator is Free to use for car, SUV,
              Pickup truck, EV, taxi, rideshare, carpool, bus, motorcycle, and
              RV with or without trailers to travel across the US. For trucks,
              you’ll have to take a Web Calculator subscription. Alternatively,
              use our apps (iOS or Android)
            </p>
            <div className="stripe"></div>
          </article>
        </section>
      </main>
    </StyledFaq>
  );
}


let StyledFaq = styled.section`
  main > h2 {
    margin-top: 2rem;
    text-align: center;
    color: white;
    font-size: 2rem;
  }
  .underline {
    height: 2px solid #10151c;
  }
  .faq {
    width: 90vw;
    max-width: 1070px;
    margin: 0 auto;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }

  .faq article {
    padding: 2rem;
    background-color: #0a0e12;
    border-radius: 10px;
  }
  .faq article p {
    line-height: 1.6rem;
    margin-top: 1rem;
  }
  .faq h2 {
    font-size: 1.2rem;
  }
  .faq p {
    font-size: 0.95rem;
  }
  .faq article {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  .faq .stripe {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10px;
    background-color: #05b8d9;
    width: 100%;
    overflow: hidden;
  }


  @media(max-width:800px)
  {
    .faq 
    {
        grid-template-columns: 1fr;
    }
    .faq article p 
    {
        line-height: 1.5rem;
    }
  }
`;

export default Faq