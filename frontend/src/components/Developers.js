import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Developers = () => {
  return (
    <StyledDevelopers>
      <section className="Developers">
        <p>
          <strong>Welcome Message:</strong> <br /> Greetings to our thriving
          Developers! Engage in discussions, exchange ideas, and foster bonds
          within a diverse group of enthusiasts.
        </p>
        <p>
          <strong>Join the Conversation:</strong> <br /> Participate actively!
          Share your stories, ask queries, and contribute to a nurturing space
          focused on learning and development.
        </p>
        <p>
          <strong>Perks of Developers:</strong> <br /> Explore the benefits of
          joining our Developers – gain access to exclusive resources, expand
          your network, and collaborate on innovative projects.
        </p>
        <p>
          <strong>Take Initiative:</strong> <br /> Ready to dive in? Start
          exploring diverse topics, connect with peers, and become an integral
          part of our growing Developers!
        </p>
      </section>
      <Sidebar />
    </StyledDevelopers>
  );
};

let StyledDevelopers = styled.section`
  .Developers {
    width: 90vw;
    max-width: 1070px;
    margin: 0 auto;
    margin-top: 4rem;
    line-height: 2rem;
  }
  .Developers p {
    color: white;
    margin-top: 1rem;
  }
`;

export default Developers;
