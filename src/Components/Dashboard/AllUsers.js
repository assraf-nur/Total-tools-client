import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserList from "./UserList";

const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/users",{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="overflow-x-auto mt-5">
        <h2 className="ml-5 text-2xl mb-3">All User</h2>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
              users.map(user => <UserList key={user._id} user={user} refetch={refetch}></UserList>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
