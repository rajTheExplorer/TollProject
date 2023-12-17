import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading';

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


  return (
    <section>
      <p>{costs.cash}</p>
      <p>{costs.fuel}</p>
      <p>{costs.minimumTollCost}</p>
      <p>{summary.currency}</p>
      {console.log(distance)}
      <p>{distance.metric}</p>
      <p>{distance.text}</p>
      <p>{distance.value}</p>
    </section>
  );
}

export default Expenses