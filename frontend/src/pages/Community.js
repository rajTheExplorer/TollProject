import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Community = () => {
  return (
    <StyledCommunity>
      <section className="community">
        <p>
          <strong>Introduction to Community:</strong> <br /> Welcome to our
          vibrant community! Join us in discussions, sharing ideas, and
          fostering connections within a diverse community of enthusiasts.
        </p>
        <p>
          <strong> Engagement Prompt:</strong> <br /> Get involved! Share your
          experiences, ask questions, and contribute to a supportive space
          dedicated to learning and growth.
        </p>
        <p>
          <strong>Community Benefits:</strong> <br /> Discover the advantages of
          being part of our community – access to exclusive content, networking
          opportunities, and collaborative projects.
        </p>
        <p>
          <strong>Call to Action:</strong> <br /> Ready to engage? Start
          exploring topics, connect with like-minded individuals, and be part of
          our ever-expanding community!
        </p>
        <Sidebar/>
      </section>
    </StyledCommunity>
  );
}


let StyledCommunity=styled.section`

.community 
{
  width: 90vw;
  max-width: 1070px;
  margin: 0 auto;
  margin-top: 4rem;
  line-height: 2rem;
}
.community p
{
  color: white;
  margin-top: 1rem;
}


`

export default Community