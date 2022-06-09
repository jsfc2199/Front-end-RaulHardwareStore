import { useState } from 'react'
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LogIn from './components/login/LogIn';
import GoogleLogIn from './components/login/LogInGoogle';
import SignIn from './components/login/SignIn';
import ProductList from './components/products/ProductList'
import ProviderList from './components/provider/ProviderList'
import { RootState } from './store';


function App() {
  const [count, setCount] = useState(0)

  const { user } = useSelector((state: RootState) => state.logged)

  return (
    <div className="App">
      <h1>Raul's Hardware Store</h1>
      <BrowserRouter>
        {user !== null ?
          <nav className='navMenu'>
            <Link to="/logInGoogle">Log in with google</Link>
            <Link to="/logIn">Log in</Link>
            <Link to="/SignIn">Sign in</Link>
            <Link to='/providers'> Providers </Link>
            <Link to='/products'> Products </Link>
            
          </nav> : <nav className='navMenu'>
            <Link to="/logInGoogle">Log in with google</Link>
            <Link to="/logIn">Log in</Link>
            <Link to="/SignIn">Sign in</Link>
            
          </nav>}

        <Routes>
          <Route path="logInGoogle" element={<GoogleLogIn />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
