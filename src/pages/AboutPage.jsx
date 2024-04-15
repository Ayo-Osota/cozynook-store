
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk" className='title' />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>
          We&#8217;re dedicated to helping you transform your house into a home you&#8217;ll love. Our journey began with a shared passion for home decor and a desire to offer stylish yet affordable furniture and decor pieces to homeowners everywhere. Since our inception, we&#8217;ve grown into a trusted online destination, curating a diverse collection of products that blend comfort, style, and functionality seamlessly.
        </p>

        <p>At CozyNook, we believe that your home should be a reflection of your unique personality and lifestyle. That&#8217;s why we&#8217;re committed to providing you with high-quality furniture and decor items that not only look great but also stand the test of time. Whether you&#8217;re furnishing a new space or giving your existing home a refresh, you&#8217;ll find everything you need to create inviting and inspiring environments at CozyNook Store. </p>

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
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
