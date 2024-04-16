import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/PromoImage.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title="Special offers" />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk" className='title' />
      <article>
        <div className="title">
          <h2>Prizes Galore</h2>
          <div className="underline"></div>
        </div>
        <p>
          Entering our lottery is easy! Simply navigate through our website and explore our wide range of products and services. For every purchase you make, you&#8217;ll automatically receive a lottery entry. The more you shop, the greater your chances of winning one of our fantastic prizes.
        </p>

        <p>With prizes ranging from the cutting-edge iPhone 15 Pro to the convenient and high-quality Apple AirPods, there&#8217;s something for everyone in our lottery. Whether you&#8217;re looking to upgrade your smartphone or enhance your audio experience, our prizes are sure to delight. </p>
        <Link to="/products" className='btn promo-btn'>Shop now</Link>

      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .promo-btn {
    margin-top: 24px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
