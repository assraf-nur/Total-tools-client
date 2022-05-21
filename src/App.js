import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/Shared/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
