import logo from '../assets/Asset1.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

const Footer = () => {
  return <Wrapper>
    <div className='top'>
      <Link to="/">
        <img src={logo} alt="cozynook store" />
      </Link>
      <p>3510 Wilmette Ave, Wilmette Illinois 60091” “ 5000 S Central Ave, Chicago, Illinois 60638</p>
      <div className='icon-wrapper'>
        <a className='icon btn' href="tel:4063102230">
          <FaPhoneAlt />
        </a>
        <a className='icon btn' href="tel:8507336721">
          <RiCustomerService2Line />
        </a>
        <a className='icon btn' target='_blank' href="https://www.instagram.com/cozynookfurniture/">
          <FaInstagram />
        </a>
        {/* <a className='icon btn' href="/">
          <FaTiktok />
        </a> */}

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
