import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = "https://glacial-citadel-80712.herokuapp.com/allOrders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) =>{
    Swal.fire({
      imageHeight: 200,
      title: `Do you want to delete`,
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted !!", "", "success");
        const url = `https://glacial-citadel-80712.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            window.location.reload();
          });
      } else if (result.isCanceled) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

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
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {orders.map((order, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{order.userName}</td>
              <td>{order.toolName}</td>
              <td>{order.quantityAmount} Unit</td>
              <td>{order.toolPrice} $</td>
              <td>
              {order.paid && (
                    <p>Pending</p>
                )}
              </td>
              <td>
              {order.paid && (
                    <button className="btn btn-xs text-white">Shipped</button>
                )}
              </td>
              <td>
              {!order.paid && (
                    <button onClick={()=> handleDelete(order._id)} className="btn btn-xs btn-error text-white">Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
