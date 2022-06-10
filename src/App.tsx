import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LogIn from './components/login/LogIn';
import GoogleLogIn from './components/login/LogInGoogle';
import Logout from "./components/login/Logout";
import SignIn from './components/login/SignIn';
import ProductList from './components/products/ProductList'
import ProviderList from './components/provider/ProviderList'
import { RootState } from './store';


function App() {
  const { user } = useSelector((state: RootState) => state.logged)

  return (
    <div className="App">
      <h1>Raul's Hardware Store</h1>
      <BrowserRouter>
        {user !== null ?
          <nav className='navMenu'>            
            <Link to='/providers'> Providers </Link>
            <Link to='/products'> Products </Link> 
            <Link to="/LogOut" >Log Out</Link>
          </nav> : 
          
          <nav className='navMenu'>
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
          <Route path="/LogOut" element={<Logout />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
