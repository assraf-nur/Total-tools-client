import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { toolsId } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tools/${toolsId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolsId]);
  return (
    <div className="px-12">
      <div class="card lg:card-side bg-base-100 shadow-xl mt-12">
        <figure>
           <img style={{width: '600px'}}
            className='p-8'
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
            <button class="btn btn-primary text-white">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
