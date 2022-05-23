import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddReview from './Components/Dashboard/AddReview';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/Dashboard/MyOrder';
import MyProfile from './Components/Dashboard/MyProfile';
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


          <Route path='dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            {/* nested route */}
            <Route index element={<MyOrder></MyOrder>}></Route>
            <Route path='orders' element={<MyOrder></MyOrder>}></Route>
            <Route path='review' element={<AddReview></AddReview>}></Route>
            <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          </Route>


          <Route path='signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}/>
        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
