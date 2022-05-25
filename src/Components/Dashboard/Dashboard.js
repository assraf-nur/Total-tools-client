import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile px-12">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content mt-5">
          <h1 className="text-5xl text-primary font-semibold">Dashboard</h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
          <Link to='/dashboard/orders'>My Orders</Link>
          </li>
          <li>
          <Link to='/dashboard/profile'>My Profile</Link>
          </li>
          <li>
          {
            admin ? <Link to='/dashboard/allUsers'>All User</Link> : <> </>
          }
          </li>
          <li>
          {
            admin ? <Link to='/dashboard/wishList'>User Wish</Link> : <> </>
          }
          </li>
          <li>
          {
            admin ? <Link to='/dashboard/manageTools'>Manage Tools</Link> : <> </>
          }
          </li>
          <li>
          {
            admin ? <Link to='/dashboard/addProduct'>Add Product</Link> : <> </>
          }
          </li>
          <li>
          {
            admin ? <Link to='/dashboard/allOrders'>All Orders</Link> : <> </>
          }
          </li>
          <li>
            {
              admin ? <> </> : <Link to='/dashboard/review'>Add a Review</Link>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
