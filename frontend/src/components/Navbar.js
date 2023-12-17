import React from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from '../Helpers';
import { Link } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa";



const Navbar = () => {
  return (
    <StyledNav>
      <section className="nav">
        <nav>
          <div className="nav-header">
            <h2>Toll Buddy</h2>
            <button className="ham">
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="nav-links spl">
            {links.map((items) => {
              let { text, url } = items;
              return (
                <Link to={url} className="link">
                  <p>{text}</p>
                </Link>
              );
            })}
          </div>
          <div className="nav-footer">
            <button>
              <Link to="/cart" className="link">
               TryApiFree
              </Link>
            </button>
            <button>
              <Link className="link">
                SignIn <FaUserPlus className="icon" />
              </Link>
            </button>
          </div>
        </nav>
      </section>
    </StyledNav>
  );
}


let StyledNav = styled.section`
  .nav {
    width: 100vw;
    height: 4rem;
    background-color: orange;
    color: white;
  }
  .nav nav {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .nav .nav-links {
    display: flex;
  }
  .nav .nav-links p {
    margin-left: 1rem;
  }
  .ham {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
  }

  .nav-footer button {
    margin: 0;
    margin-left: 1rem;
    background-color: green;
    padding: 0.2rem 0.5rem;
    outline: none;
    border: none;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 5px;
  }


  @media (max-width:800px)
  {
    .nav-links,.nav-footer 
    {
        display: none !important;
    }
    .spl 
    {
        display: none;
    }
    .nav-header 
    {
        display: flex;
        width:100%;
        justify-content: space-between;
        max-width: 90vw;
        margin: 0 auto;
    }
  }
  
`;

export default Navbar