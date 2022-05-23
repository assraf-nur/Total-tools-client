import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const { toolsId } = useParams();
  const [tool, setTool] = useState({});
  const [user] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || `/`;

  useEffect(() => {
    const url = `http://localhost:5000/tools/${toolsId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolsId]);

  const handleOrder = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    var quantity = e.target.quantity.value;

    if (tool.moq > quantity) {
      alert("Please order more than minimum order quantity");
      return;
    }
    if (tool.aq < quantity) {
      alert("Please give order below available unit");
      return;
    }

    const order = {
      toolId: tool._id,
      toolName: tool.name,
      userName: user.displayName,
      userEmail: user.email,
      userPhone: phone,
      userAddress: address,
      quantityAmount: quantity,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("here is data", data);
        if (data.acknowledged) {
          toast.success(`${tool.name} is ordered`);
        }
        setTool(null);
        navigate(from, { replace: true });
      });
  };
  return (
    <div className="px-12">
      <div class="card lg:card-side bg-base-100 shadow-xl mt-12">
        <figure>
          <img
            style={{ width: "600px" }}
            className="p-8"
            src={tool.img}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-4xl">{tool.name}</h2>
          <p className="text-xl">{tool.description}</p>
          <p className="text-lg">Minimum Order Quantity: {tool.moq}</p>
          <p className="text-lg">Available Quantity: {tool.aq}</p>
          <p className="text-lg">Price per unit: {tool.price} $</p>
          <div class="card-actions justify-center">
            <label
              for="my-modal-3"
              class="btn modal-button btn-primary text-white"
            >
              Place Order
            </label>
          </div>
        </div>
      </div>

      <div>
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle btn-primary text-white absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold text-center">
              You are buying{" "}
              <span className="text-4xl font-bold text-primary">
                {tool.name}
              </span>
            </h3>
            <h3 class="text-lg font-bold text-center">
              Please Enter your Information
            </h3>
            <form
              onSubmit={handleOrder}
              className="grid grid-cols-1 gap-5 justify-items-center mt-5"
              action=""
            >
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                disabled
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <small className="font-bold">
                Minimum Order: {tool.moq} Unit
              </small>
              <small className="font-bold">Available:{tool.aq} Unit</small>
              <input
                type="number"
                name="quantity"
                min={tool.moq}
                max={tool.aq}
                placeholder={tool.moq}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                placeholder="Purchase"
                value="Purchase"
                className="btn text-white font bold btn-primary input-bordered mt-5 w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
