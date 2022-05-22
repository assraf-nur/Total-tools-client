import React from "react";

const ToolList = ({ tool }) => {
    const {name, img, price, description, moq, aq} = tool;
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
          <button class="btn btn-primary mx-auto w-12/12 text-white absolute inset-x-0 bottom-0 h-12 mt-12">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ToolList;
