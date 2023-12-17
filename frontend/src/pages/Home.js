import React from 'react'
import LeafletMap from '../components/LeafletMap'
import Expenses from '../components/Expenses'

const Home = () => {
  return (
    <section>
        <LeafletMap/>
        <Expenses/>
    </section>
  )
}

export default Home