import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { Register } from '@components/User/Register';
import { Login } from '@components/User/Login';
import { Logout } from '@components/User/Logout';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Home exact path="/" coponent={Home}/>
        <Product exact path="/product" coponent={Product} />
      </Switch>
    </>
      );
}
      export default App;
