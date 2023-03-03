import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import { Register } from '@components/Login/Register';
import { Login } from '@components/Login/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}/>
    </Routes>
  );
}

export default App;
