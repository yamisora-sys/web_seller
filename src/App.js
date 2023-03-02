import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import { Register } from '@components/Login/Register';
import { Login } from '@components/Login/Login';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
  );
}

export default App;
