
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'

const ProductsPage = () => {
  return <main>
    <PageHero title="products" />
    <Wrapper className='page'>
      <div className="section-center products">
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  article {
    background: var(--clr-cns-neutral);
    color: var(--clr-black);
  }
  article p {
   opacity: 1;
    color: var(--clr-cns-primary);
    font-weight: 700;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
