import './App.css';

import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

import nikeData from './data/nike-data'

// console.log(nikeData)

function App()
{
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
