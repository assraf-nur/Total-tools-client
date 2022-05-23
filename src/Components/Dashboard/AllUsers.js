import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AllUsers = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>User Number</th>
            <th>Email</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
              users.map((u, index) => (
                <tr>
                <th>{index+1}</th>
                <td>{u.email}</td>
                <td><button class="btn btn-xs btn-primary text-white">Make Admin</button></td>
                <td><button class="btn btn-xs btn-error text-white">Remove User</button></td>
              </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
