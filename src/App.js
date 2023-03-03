import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import { Register } from '@components/User/Register';
import { Login } from '@components/User/Login';
import { Logout } from '@components/User/Logout';
function App() {
  return (
    <Routes>
      {/* test api */}
      <Route path="/" element={<Logout/>}/>
    </Routes>
  );
}

export default App;
