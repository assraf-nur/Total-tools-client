import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  console.log(email);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://glacial-citadel-80712.herokuapp.com/users/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const updateUser = (e) => {
    e.preventDefault();

    const education = e.target.education.value;
    const location = e.target.location.value;
    const number = e.target.number.value;
    const linkIn = e.target.linkIn.value;

    const updateUser = { education, location, number, linkIn };

    const url = `https://glacial-citadel-80712.herokuapp.com/users/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log("success", data);
        toast("updated successfully");
        e.target.reset();
      });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mt-4 ml-3">Profile</h2>
      <div className="border-2 rounded-2xl p-8">
        <h2 className="text-3xl font-semibold">{user.displayName}</h2>
        <h2>Email: {users.email}</h2>
        <h2>Education: {users.education}</h2>
        <h2>Location: {users.location}</h2>
        <h2>Phone: {users.number}</h2>
        <h2>LinkedIn Link: {users.linkIn}</h2>
        <h2 className="mt-1">
          Go to LinkedIn profile{" "}
          <span className=" bg-blue-300 p-1 rounded-lg">
            <a target="_blank" href={users.linkIn}>
              LinkedIn
            </a>
          </span>
        </h2>

        <div>
          <label
            for="my-modal-3"
            class="btn btn-primary text-white modal-button mt-12"
          >
            Update Profile
          </label>
        </div>
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm text-white btn-primary btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={updateUser}>
              <input
                type="text"
                name="education"
                placeholder="Education"
                class="input input-bordered w-full max-w-xs my-3"
              />
              <br />
              <input
                type="text"
                name="location"
                placeholder="Location"
                class="input input-bordered w-full max-w-xs my-3"
              />
              <br />
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                class="input input-bordered w-full max-w-xs my-3"
              />
              <br />
              <input
                type="text"
                name="linkIn"
                placeholder="LinkedIn Profile Link"
                class="input input-bordered w-full max-w-xs my-3"
              />
              <br />
              <input
                type="submit"
                className="btn btn-primary text-white"
                value="Add info"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
