import './App.css';

import { createContext, useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

import nikeData from './data/nike-data'


// 1. Creating the context
export const ProductContext = createContext(null)

function App()
{
  const [data, setData] = useState(nikeData)
  const [cart, setCart] = useState([])

  // 2. Wrap the components inside the Context Provider and pass the values
  return (
    <ProductContext.Provider value={{ data, cart, setCart }}>
      <div className="App">
        <Header shoppingCart={cart} />
        <ProductList addToCart={setCart} />
        <Footer />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
