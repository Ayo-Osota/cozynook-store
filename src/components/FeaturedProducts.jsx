
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const {
    products_loading: loading, products_error: error, featured_products: featured
  } = useProductsContext();

  if (error) {
    return <Error />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Wrapper className='section'>
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <p>From plush sofas and cozy armchairs to stunning posters and elegant shelves, our range of products is designed to cater to all your needs and preferences.</p>
      <div className="section-center featured">
        {featured.slice(0, 3).map((product) => {
          const { id } = product;
          return (
            <Product key={id} {...product} />
          )
        })}
      </div>
      <Link to="/products" className='btn'>view more</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-7);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 1rem;
    max-width: 64ch;
    width: 100%;
    margin-inline: auto;
    color: var(--clr-cns-primary);
    opacity: 0.9;
  }
  h2 {
    color: var(--clr-cns-primary);
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
