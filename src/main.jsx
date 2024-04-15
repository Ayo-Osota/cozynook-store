// import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/cart_context';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
)
