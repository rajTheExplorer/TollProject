import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <StlyedHero>
      <section className='hero'>
        <h2>Your pocket buddy for deciding best toll routes</h2>
      </section>
    </StlyedHero>
  );
}


let StlyedHero=styled.section`

*
{
    color: white;
}
.hero 
{
    max-width: 1070px;
    margin:  0 auto;
    height: calc(100vh - 4rem);
    background-color: magenta;

}


`

export default Hero