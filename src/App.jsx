import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { Home, About, ProductsPage, Cart, CheckoutPage, ErrorPage, SingleProductPage, Promo } from './pages';
import PromoModal from './components/PromoModal';

function App() {

  const [isPromoModalOpen, setIsPromoModalOpen] = useState(true);

  const closePromoModal = () => {
    setIsPromoModalOpen(false)
  }

  return <>
    <Router>
      {isPromoModalOpen && <PromoModal closeModal={closePromoModal} />}
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/products" element={<ProductsPage />} />

        <Route exact path="/products/:id" element={<SingleProductPage />}></Route>
        <Route exact path="/checkout" element={<CheckoutPage />} />


        <Route exact path="/promo" element={<Promo />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
    </Router>
  </>
}

export default App
