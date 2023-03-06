import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { Register } from '@components/User/Register';
import { Login } from '@components/User/Login';
import { Logout } from '@components/User/Logout';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product'
import CartProduct from './components/CartProduct'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Home exact path="/" coponent={Home}/>
        <Product exact path="/product" coponent={Product} />
        <CartProduct exact path ="/product/:id" coponent={CartProduct}/>
        <Login exact path ="/login" coponent={Login}/>
        <Register exact path ="/register" coponent={Register}/>
      </Switch>
    </>
      );
}
      export default App;
