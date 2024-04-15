/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { loadStripe } from '@stripe/stripe-js'
// import {
//   CardElement,
//   useStripe,
//   Elements,
//   useElements,
// } from '@stripe/react-stripe-js'
// import axios from 'axios'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'

const CustomInput = ({ type, name, placeholder, onChange, maxLength, handleOnInput, minLength, value }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} maxLength={maxLength} minLength={minLength} onInput={handleOnInput} />
  )
}

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();

  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [secCode, setSecCode] = useState('');
  const [cardName, setCardName] = useState('');


  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  }
  const onAddressChange = (event) => {
    setAddress(event.target.value);
  }
  const onCardNumberChange = (event) => {
    const value = event.target.value.replace(/\s+/g, '').replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();

    setCardNumber(value);
  }

  const onExpDateChange = (event) => {
    setExpDate(event.target.value);
  }
  const onSecCodeChange = (event) => {
    setSecCode(event.target.value);
  }
  const onCardNameChange = (event) => {
    setCardName(event.target.value);
  }

  // Validate the form before submit
  const validateForm = () => {
    setError('')
    if (!email || !firstName || !lastName || !address || !cardNumber || !expDate || !secCode) {
      setError('All fields are required.');
      // return false;
    }
    // const d = new Date();
    // let month = d.getMonth() + 1;
    // let year = d.getFullYear();
    // if ((month + '' <= expDate.slice(0, 2)) && (year + '' <= expDate.slice(3))) {


    //   setError('Invalid Expiration date.');
    //   return false;
    // }
    const formatedCardNumber = cardNumber.replace(/\s/g, '');
    if (formatedCardNumber.length !== 16 && formatedCardNumber.length !== 19) {
      setError('Invalid card deatils')
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    validateForm()
    console.log(email);
    console.log(firstName + lastName);
    console.log(cardName);
    console.log(cardNumber);
    console.log(expDate);
    console.log(secCode);
    console.log(address);
    clearForm()
  };

  const clearForm = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setAddress('');
    setCardNumber('');
    setExpDate('');
    setSecCode('');
    setCardName('');
  };

  return (<div>
    {succeeded ? (
      <article className='heading'>
        <h4>Opps!</h4>
        <h4>Your payment was unsuccessful!</h4>
        <h4>Redirecting to home page shortly</h4>
      </article>
    ) : (
      <article className='heading'>
        <h4>Your total is <span className='total'>{formatPrice(total_amount)}</span></h4>
      </article>
    )}
    <form id='payment-form' onSubmit={handleSubmit}>
      <CustomInput name={'email'} type={'email'} placeholder={'Email'} value={email} onChange={onEmailChange} required />
      <CustomInput name={'firstname'} type={'text'} placeholder={'First name'} value={firstName} onChange={onFirstNameChange} minLength={'2'} maxLength={'24'} required />
      <CustomInput name={'lastName'} type={'text'} placeholder={'Last name'} value={lastName} onChange={onLastNameChange} minLength={'2'} maxLength={'24'} required />
      <CustomInput name={'address'} type={'text'} placeholder={'Address'} value={address} onChange={onAddressChange} minLength={'2'} required />
      <CustomInput name={'cardNumber'} type={'text'} placeholder={'Card number'} value={cardNumber} onChange={onCardNumberChange} maxLength={'23'} handleOnInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim() }} />
      <CustomInput name={'expiryDate'} type={'text'} placeholder={'Expiry date (MM / YY)'} value={expDate} onChange={onExpDateChange} minLength={'7'} maxLength={'9'} required handleOnInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').replace(/(\d{0,2})(\d{0,2})/, '$1 / $2').trim() }} />
      <CustomInput name={'securityCode'} type={'text'} placeholder={'Security code'} value={secCode} onChange={onSecCodeChange} minLength={'3'} maxLength={'4'} required handleOnInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '') }} />
      <CustomInput name={'cardName'} type={'text'} placeholder={'Name on card'} value={cardName} onChange={onCardNameChange} minLength={'2'} maxLength={'64'} />
      <button
        // disabled={processing || disabled || succeeded} 
        id='submit'>
        <span id='button-text'>
          {processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className='card-error' role='alert'>
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}

    </form>
  </div>
  )
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />

    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    width: 30vw;
    margin-inline: auto;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
    margin-bottom: 64px;
    background: var(--clr-cns-neutral);
  }
  .heading {
    margin-inline: auto;
    text-align: center;
    margin-top: 64px;
    margin-bottom: 32px;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  input::placeholder {
    color: #AAB7C6;
  }
  input:focus {
    outline: 1px solid var(--clr-cns-primary);
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
  .total {
    color: var(--clr-cns-secondary);
  }
`

export default StripeCheckout
