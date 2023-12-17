import React, { useState,useEffect } from 'react'
import { FAP } from '../Helpers'
import styled from 'styled-components'
import Joyride from "react-joyride";

const ToolTipGuide = () => {
    const [run, setRun] = useState(false);

    const steps = [
      {
        target: ".tooltip1", // Using class selector
        content: (
          <aside>
            <h4>Vehicle Type</h4>
            <p>
              Different types of vehicles might have varying toll rates. For
              example, cars, trucks, motorcycles, or vehicles with trailers may
              have different toll fees.
            </p>
          </aside>
        ),
        placement: "auto",
      },
      {
        target: ".tooltip2", // Using class selector
        content: (
          <aside className="tt2">
            <h4>EV Charging Facility</h4>
            <p>
              Toll Gates which have facility of EV charging points tend to
              charge higher than the conventional toll gates.
            </p>
          </aside>
        ),
        placement: "auto",
      },
      {
        target: ".tooltip3", // Using class selector
        content: (
          <aside className="tt2">
            <h4>Toll plaza accepting Cash</h4>
            <p>
              Gates which accepts cash tend to have higher prices compared to
              one's which accept cash
            </p>
          </aside>
        ),
        placement: "left",
      },
      {
        target: ".tooltip4", // Using class selector
        content: (
          <aside className="tt2">
            <h4>Electronic Toll gantry only</h4>
            <p>
              Many toll roads offer different rates for electronic toll
              collection (using transponders or RFID tags) compared to cash
              payments
            </p>
          </aside>
        ),
        placement: "left",
      },
      {
        target: ".tooltip5", // Using class selector
        content: (
          <aside className="tt2">
            <h4>Type of Road or Bridge</h4>
            <p>
             Tolls which are closer to ghat roads and bridges on rivers tend to have higher toll compared to plains
            </p>
          </aside>
        ),
        placement: "left",
      },
    ];

      const joyrideProps = {
        steps: steps,
        continuous: true, // Allow continuous tour
        run: run,
        callback: (data) => {
          // Handle callback events (e.g., when the tour is finished)
          if (data.type === "tour:end") {
            // Perform actions when the tour ends
            console.log("Tour ended");
          }
        },
      };


      useEffect(() => {
        setRun(true);
      }, []);
  return (
    <StyledToolTipGuide>
      <section className="tooltip">
        <div className="content">
          {FAP.map((items) => {
            let { id, text, icon } = items;
            return (
              <article key={id} className={`tooltip${id}`}>
                <p className="icon">{icon}</p>
                <p className="text">{text}</p>
              </article>
            );
          })}
        </div>
        <Joyride {...joyrideProps} />
      </section>
    </StyledToolTipGuide>
  );
}


let StyledToolTipGuide = styled.section`
  .tooltip {
    width: 100vw;
    display: grid;
    height: 9rem;
    margin: 0 auto;
    background-color: #313943;
    color: white;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    overflow-x: hidden !important;
  }
  .tooltip .content {
    max-width: 1070px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .tooltip .content article {
    text-align: center;
    flex: 1;
  }
  .tooltip .content article .icon {
    font-size: 2rem;
  }
  .tooltip .content article .text {
    text-transform: capitalize;
  }
  @media (max-width: 800px) {
    .tooltip {
      height: auto;
    }
    .tooltip .content {
      grid-template-columns: 1fr;
      height: auto;
      margin-top: 1rem;
      padding: 0rem 0 2rem 0;
    }
    .tooltip .content article {
      margin: 2rem 0;
      width: 100%;
    }
  }
`;
export default ToolTipGuide