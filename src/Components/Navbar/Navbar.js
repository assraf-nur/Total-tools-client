import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  }

    const elements = (
        <>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
        {
          user ? <Link to="/dashboard">Dashboard</Link> : <></>
        }
        </li>
        <li>
        {
          user ? <button onClick={logout} class="btn btn-ghost">Log Out ({user.displayName})</button> : <Link to="/login">Login</Link>
        }
        </li>
        </>
    );
  return (
    <div>
      <div class="navbar bg-primary text-white px-12">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {elements}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl" as={Link} href="/home">Total Tools</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 ">
            {elements}
          </ul>
        </div>
        <div className="navbar-center">
        <label
          for="my-drawer-2"
          class="btn btn-primary btn-xs drawer-button lg:hidden"
        >
          Open drawer
        </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
