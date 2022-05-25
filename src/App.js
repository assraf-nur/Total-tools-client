import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddProducts from "./Components/Dashboard/AddProducts";
import AddReview from "./Components/Dashboard/AddReview";
import AllOrders from "./Components/Dashboard/AllOrders";
import AllUsers from "./Components/Dashboard/AllUsers";
import Dashboard from "./Components/Dashboard/Dashboard";
import ManageTools from "./Components/Dashboard/ManageTools";
import MyOrder from "./Components/Dashboard/MyOrder";
import MyProfile from "./Components/Dashboard/MyProfile";
import Payment from "./Components/Dashboard/Payment";
import UserWish from "./Components/Dashboard/UserWish";
import Blogs from "./Components/Home/Blogs";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Home/Portfolio";
import Login from "./Components/Login/Login";
import RequireAdmin from "./Components/Login/RequireAdmin";
import RequireAuth from "./Components/Login/RequireAuth";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/Shared/NotFound";
import Purchase from "./Components/Shared/Purchase";
import SignUp from "./Components/Shared/SignUp";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="tools/:toolsId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          {/* nested route */}
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="orders" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="manageTools"
            element={
              <RequireAdmin>
                <ManageTools></ManageTools>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="wishList"
            element={
              <RequireAdmin>
                <UserWish></UserWish>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProducts></AddProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allOrders"
            element={
              <RequireAdmin>
                <AllOrders></AllOrders>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="portfolio" element={<Portfolio></Portfolio>}/>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
