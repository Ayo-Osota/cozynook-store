import logo from '../assets/Asset1.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return <Wrapper>
    <div className='top'>
      <Link to="/">
        <img src={logo} alt="cozynook store" />
      </Link>
      <p>address, N0 34, Farunwi str address, N0 34, Farunwi str address, N0 34, Farunwi str</p>
      <div className='icon-wrapper'>
        <a className='icon btn' href="/">
          <FaInstagram />

        </a>
        <a className='icon btn' href="/">
          <FaTiktok />

        </a>
      </div>
    </div>
    <h5>
      &copy; {new Date().getFullYear()} <span>Cozynook</span> All rights reserved
    </h5>
  </Wrapper>
}

const Wrapper = styled.footer`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-cns-neutral);
  text-align: center;
  div.top {
    padding-bottom: 80px;
  }
  span {
    color: var(--clr-cns-primary);
  }
  p {
    color: var(--clr-black);
    width: 100%;
    max-width: 64ch;
  }
  h5 {
    color: var(--clr-black);
    margin: 0.1rem;
    padding-top: 24px;
    padding-bottom: 24px;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  .icon-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .icon {
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .icon svg {
    font-size: 24px;
  }
  @media (min-width: 776px) {
    flex-direction: column;
  }
`

export default Footer
