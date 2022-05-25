import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/allOrders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div class="overflow-x-auto">
        <h2 className="text-3xl ml-3 py-3">All Order</h2>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Name</th>
            <th>Tools Name</th>
            <th>Ordered Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
              orders.map((order, index) => (
                <tr>
                    <th>{index+1}</th>
                    <td>{order.userName}</td>
                    <td>{order.toolName}</td>
                    <td>{order.quantityAmount} Unit</td>
                    <td>{order.toolPrice} $</td>
                    <td>Blue</td>
               </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
