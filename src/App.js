import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/Shared/NotFound';
import Purchase from './Components/Shared/Purchase';
import SignUp from './Components/Shared/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='tools/:toolsId' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
          <Route path='signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}/>
        </Routes>
    </div>
  );
}

export default App;
