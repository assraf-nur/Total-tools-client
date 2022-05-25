import React from "react";
import { toast } from "react-toastify";

const AddProducts = () => {
  const handleAddTools = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const moq = e.target.moq.value;
    const aq = e.target.aq.value;
    const img = e.target.image.value;

    const newTools = { name, price, description, moq, aq, img };

    fetch("https://glacial-citadel-80712.herokuapp.com/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTools),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("You wish a tool");
        e.target.reset();
      });
  };

  return (
    <div className="mb-12">
      <h2 className="ml-5 text-3xl py-4">Add New tools</h2>
      <form
        onSubmit={handleAddTools}
        className="rounded-2xl border-4 px-12 grid justify-center p-5 mb-24"
      >
        <input
          required
          type="text"
          name="name"
          placeholder="Tools Name"
          class="input input-bordered input-primary w-full"
        />
        <br />
        <input
          required
          type="number"
          name="price"
          placeholder="Price"
          class="input input-bordered input-primary w-full"
        />
        <br />
        <textarea
          required
          class="textarea textarea-primary w-full"
          name="description"
          placeholder="Description"
        ></textarea>
        <br />
        <input
          required
          type="number"
          name="moq"
          placeholder="Minimum Order Quantity"
          class="input input-bordered input-primary w-full"
        />
        <br />
        <input
          required
          type="number"
          name="aq"
          placeholder="Available Quantity"
          class="input input-bordered input-primary w-full"
        />
        <br />
        <input
          required
          type="text"
          name="image"
          placeholder="Image Url"
          class="input input-bordered input-primary w-full "
        />
        <button class="btn btn-primary mt-5 text-white">Add tools</button>
      </form>
    </div>
  );
};

export default AddProducts;
