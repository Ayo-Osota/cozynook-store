import shopIcon from '../assets/Asset2.png'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const Product = ({ id, price, name, image }) => {
  return (
    <Wrapper className=''>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <img src={shopIcon} alt="nice table" className='icon' />
        </Link>
      </div>
      <footer className='product-footer'>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
background: var(--clr-cns-primary);
border-radius: var(--radius);
overflow: hidden;
  .container {
    position: relative;
    background: var(--clr-black);
    overflow: hidden;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px 16px;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-1);
    letter-spacing: var(--spacing);
  }
  .icon {
    width: 50%;
    object-fit: contain;
  }
`
export default Product
