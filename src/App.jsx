import './App.css';

import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

import nikeData from './data/nike-data'

// console.log(nikeData)

function App()
{
  return (
    <div className="App">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
