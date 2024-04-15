
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          Join our newsletter and get 20% off
        </h3>
        <div className="content">
          <p>
            Plus, stay up-to-date with the latest trends and exclusive offers straight to your inbox.
          </p>
          <form className="contact-form">
            <input type="email" name="email" placeholder="enter email" className="form-input" />
            <button type="submit" className='submit-btn'>subscribe</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-cns-neutral);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    border: 1px solid rgba(50, 50, 93, 0.1);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
    font-weight: 500;
  }
  .submit-btn:hover {
    color: var(--clr-primary-1);
  background: var(--clr-primary-7);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
  .form-input:focus,
  .submit-btn:focus {
    outline: 1px solid var(--clr-cns-primary);
  }
`

export default Contact
