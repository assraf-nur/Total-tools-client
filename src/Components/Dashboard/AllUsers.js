import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://glacial-citadel-80712.herokuapp.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div class="overflow-x-auto mt-5">
      <h2 className="ml-5 text-2xl mb-3">All User</h2>
      <table class="table w-full">
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((user) => (
              <UserList key={user._id} user={user}></UserList>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
