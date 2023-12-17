import React from 'react'
import styled from 'styled-components'

const Integrate = () => {
  return (
    <StyledIntegrate>
      <section className="integrate">
        <div className="content">
          <img
            src="https://tollguru.com/wp-content/uploads/2021/06/cta_desktop-min.png"
            alt=""
          />
          <div className="adv-info">
            <h2>Ready to integrate Toll Intelligence?</h2>
            <p>Get started with TollGuru Toll API or Cloud Services</p>
            <div className="btn-section">
                <button>Integrate Now</button>
                <button>Schedule a demo</button>
            </div>
          </div>
        </div>
      </section>
    </StyledIntegrate>
  );
}

let StyledIntegrate = styled.section`
  .integrate {
    width: 100vw;
    background-color: #00152a;
    margin: 4rem auto;
  }
  .integrate .content {
    max-width: 1070px;
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    margin: 0 auto;
  }
  .integrate img {
    width: 100%;
    height: 380px !important;
    object-fit: cover;
  }
  .integrate .adv-info {
    display: grid;
    grid-template-columns: 1fr;
    color: white;
  }
  .integrate .adv-info h2 {
    font-size: 2rem;
  }
  .integrate .adv-info p {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }
  .integrate .adv-info .btn-section {
    display: flex;
    align-items: center;
  }
  .integrate .adv-info .btn-section button {
    padding: 0.3rem 1.5rem;
    margin-right: 2rem;
    color: white;
    background-color: #0dafe2;
    outline: none;
    border: none;
    font-size: 0.9rem;
  }

  @media(max-width:800px)
  {

        .integrate 
        {
            padding: 2rem 0;
        }
        .integrate .content
        {
            grid-template-columns: 1fr;
            padding: 0;
            line-height: 3rem;
        }
         .integrate .content p
         {
            font-size: 1rem;
            line-height: 2rem;
            margin: 1rem 0;
         }
        .btn-section
        {
            justify-content:space-between;
        }

  }
`;


export default Integrate