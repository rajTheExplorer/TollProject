import React from 'react'
import LeafletMap from '../components/LeafletMap'
import Expenses from '../components/Expenses'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <section>
        {/* <LeafletMap/>
        <Expenses/> */}
        <Sidebar/>
        <Hero/>
        <LeafletMap/>
        <Expenses/>
    </section>
  )
}

export default Home