import './App.css';

import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

import nikeData from './data/nike-data'

// console.log(nikeData)

function App()
{
  const [data, setData] = useState(nikeData)
  const [cart, setCart] = useState([])

  const addToCart = (product) =>
  {
    // create new array with same contents as cart
    // rather than copy of cart
    let newCart = [...cart]
    newCart.push(product)
    // sets cart to newCart and triggers re-render
    setCart(newCart)
  }

  return (
    <div className="App">
      <Header shoppingCart={cart} />
      <ProductList products={data} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
