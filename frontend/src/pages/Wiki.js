import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Wiki = () => {
  return (
    <StyledWiki>
      <section className="Wiki">
        <p>
          <strong>Welcome Everyone:</strong> <br /> Join our lively Wiki! Engage
          in discussions, share your thoughts, and build connections among
          passionate individuals.
        </p>
        <p>
          <strong>Connect and Participate:</strong> <br /> Get involved! Share
          your insights, ask questions, and contribute to an inclusive space
          dedicated to growth and learning.
        </p>
        <p>
          <strong>Wiki Perks Unveiled:</strong> <br /> Discover the advantages
          of our Wiki – access unique resources, expand your network, and
          collaborate on innovative ventures.
        </p>
        <p>
          <strong>Take the First Step:</strong> <br /> Ready to jump in? Begin
          exploring various topics, connect with fellow enthusiasts, and become
          an active part of our vibrant Wiki!
        </p>
      </section>
      <Sidebar/>
    </StyledWiki>
  );
};

let StyledWiki = styled.section`
  .Wiki {
    width: 90vw;
    max-width: 1070px;
    margin: 0 auto;
    margin-top: 4rem;
    line-height: 2rem;
  }
  .Wiki p {
    color: white;
    margin-top: 1rem;
  }
`;

export default Wiki;
