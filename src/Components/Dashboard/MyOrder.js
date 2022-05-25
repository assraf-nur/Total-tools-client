import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://glacial-citadel-80712.herokuapp.com/orders?userEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div class="overflow-x-auto mt-8">
      <h2 className="ml-5 text-2xl mb-3">Orders</h2>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Name</th>
            <th>Tools Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {orders.map((o, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{o.userName}</td>
              <td>{o.toolName}</td>
              <td>{o.quantityAmount} Unit</td>
              <td>{o.toolPrice}$</td>
              <td>
                {o.toolPrice && !o.paid && (
                  <Link to={`/dashboard/payment/${o._id}`}>
                    <button className="btn btn-xs text-white px-3">Pay</button>
                  </Link>
                )}{" "}
              </td>
              <td>{o.toolPrice && o.paid && <p>Pending</p>} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
