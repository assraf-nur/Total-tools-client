import React from "react";
import { useNavigate } from "react-router-dom";

const ToolList = ({ tool }) => {
    const {_id, name, img, price, description, moq, aq} = tool;

    const navigate = useNavigate();
    const handlePurchase = id =>{
        navigate(`/tools/${_id}`)
    }

  return (
    <div className="shadow-xl rounded-2xl border-2 relative">
      <figure>
        <img className="p-12 h-2/12"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div class="card-body mb-12">
        <h2 class="card-title font-bold text-2xl">{name}</h2>
        <p>{description}</p>
        <p className="font-bold">Available Quantity: {aq} unit</p>
        <p className="font-bold">Minimum Order Quantity: {moq} unit</p>
        <p className="text-xl">Price Per Unit: <span className="text-primary">{price} $</span></p>

        <div class="card-actions">
          <button onClick={() => handlePurchase(_id)} class="btn btn-primary mx-auto w-12/12 text-white absolute inset-x-0 bottom-0 h-12 mt-12">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ToolList;
