import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductList from './components/products/ProductList'
import ProviderList from './components/provider/ProviderList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Raul's Hardware Store</h1>
      <BrowserRouter>
        <nav className='navMenu'>
          <Link to='/providers'> Providers </Link>
          <Link to='/products'> Products </Link>
          <div className="dot"></div>
        </nav>

        <Routes>
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
