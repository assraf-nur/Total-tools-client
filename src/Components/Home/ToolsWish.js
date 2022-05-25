import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import logo from "../../Images/logo.png";

const ToolsWish = () => {
  const [user] = useAuthState(auth);

  const handleWish = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    const userName = user.displayName;

    const wishList = { name, price, details, userName };

    fetch("https://glacial-citadel-80712.herokuapp.com/wish", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishList),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("You wish a tool");
        e.target.reset();
      });
  };

  return (
    <div className="px-12">
      <h2 className="text-center mt-12 text-4xl font-semibold">
        <span className="uppercase font-bold text-primary text-5xl">Tools</span>{" "}
        you{" "}
        <span className="uppercase font-bold text-primary text-5xl">Wish</span>{" "}
        to see in our store
      </h2>
      <form
        onSubmit={handleWish}
        className="mt-5 rounded-2xl border-4 px-12 grid justify-center p-12"
      >
        <img src={logo} alt="" className="mb-8" />

        <input
          required
          type="text"
          name="name"
          placeholder="Tools Name"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <input
          required
          type="number"
          name="price"
          placeholder="Approximate Price"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <textarea
          required
          class="textarea textarea-primary w-full"
          name="details"
          placeholder="Some Details"
        ></textarea>
        <br />
        <button class="btn btn-primary mt-5 text-white">Tools wish</button>
      </form>
    </div>
  );
};

export default ToolsWish;
