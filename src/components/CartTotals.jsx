import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return <Wrapper>
    <div>
      <article>
        <h5>subtotal : <span>{formatPrice(total_amount)}</span></h5>
        <p>shipping_fee : <span>{formatPrice(shipping_fee)}</span></p>
        <hr />
        <h4 className="order-total">order total : <span>{formatPrice(total_amount + shipping_fee)}</span></h4>
      </article>
      <Link to="/checkout" className='btn'>proceed to checkout</Link>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  
  @media (min-width: 776px) {
    justify-content: flex-end;
    article {
      padding: 1.5rem 3rem;
    }
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    align-self: center;
  }
`

export default CartTotals
