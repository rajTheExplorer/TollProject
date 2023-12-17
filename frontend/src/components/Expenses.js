import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading';
import styled from 'styled-components';

const Expenses = () => {
    let { tollGuruTollData, TOLLGURU_DATA_LOADING } = useSelector(
      (state) => state.Map
    );

    if(TOLLGURU_DATA_LOADING)
    {
        return <Loading/>
    }

      const summary = tollGuruTollData.summary || {};
      const route = tollGuruTollData.route || {};
      const costs = route.costs || {};
      const distance = route.distance || {};
    // let {cash,fuel,minimumTollCost}=costs
    // let {metric,text,value}=distance
    // let {currency,units}=summary;
    console.log(tollGuruTollData)

  return (
    <StyledExpenses>
      <section className="expenses">
        <div className="whitespace"></div>
        <div className="content">
          <article>
            <p>
              Fuel: {costs.fuel || 0} Minimum Total Cost:{" "}
              {costs.minimumTollCost || 0} Currency: {summary.currency || "USD"}
            </p>
          </article>
          <article>
            <p>
              Distance: {distance.metric || 0} Miles: {distance.text || 0}
            </p>
          </article>
          <article className="totals">
            <div>
              <p>Tolls</p>
              <p>{costs.cash || 0}</p>
            </div>
            <div>
              <p>Fuel</p>
              <p>{costs.fuel || 0}</p>
            </div>
            <div>
              <p>Total</p>
              <p>{costs.cash + costs.fuel || 0}</p>
            </div>
          </article>
        </div>
      </section>
    </StyledExpenses>
  );
}


let StyledExpenses = styled.section`
  .expenses {
    color: white;
    display: grid;
    grid-template-columns: 5fr 8fr;
    margin-bottom: 4rem;
    max-width:1070px;
    margin: 0 auto;
  }


  .expenses .content article p {
    padding: 0.6rem 1rem;
  }

  .expenses .content article:nth-of-type(1),
  .expenses .content article:nth-of-type(2) {
    background-color: #e3f5fc;
    color: black;
    margin-top: 1rem;
    border-radius: 5px;
    font-weight: 400;
  }
  .expenses .content .totals {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 2rem;
    background-color: white;
    border-radius: 5px;
    color: white;
  }
  .expenses .content .totals p:nth-of-type(1) {
    background-color: #1da1f2;
    font-weight: 600;
  }
  .expenses .content .totals p:nth-of-type(2) {
    font-weight: 600;
    color: black;
  }
`;

export default Expenses