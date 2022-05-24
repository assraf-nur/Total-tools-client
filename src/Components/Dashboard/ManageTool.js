import React from "react";
import Swal from "sweetalert2";

const ManageTool = ({ tool, refetch }) => {
  const { _id, name, img, price, moq, aq } = tool;

  const handleDelete = (id) => {
    Swal.fire({
      imageUrl: `${img}`,
      imageHeight: 200,
      imageAlt: 'A tall image',
      title: `Do you want to delete ${name}`,
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted !!", "", "success");
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
          });
      } else if (result.isCanceled) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  };

  return (
    <div className="shadow-xl rounded-2xl border-2 relative">
      <figure>
        <img className="p-12 h-2/12" src={img} alt="Shoes" />
      </figure>
      <div class="card-body mb-12">
        <h2 class="card-title font-bold text-2xl">{name}</h2>
        <p className="font-bold">Available Quantity: {aq} unit</p>
        <p className="font-bold">Minimum Order Quantity: {moq} unit</p>
        <p className="text-xl">
          Price Per Unit: <span className="text-primary">{price} $</span>
        </p>

        <div class="card-actions">
          <button
            onClick={() => handleDelete(_id)}
            class="btn btn-error mx-auto w-12/12 text-white absolute inset-x-0 bottom-0 h-12 mt-12"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageTool;
