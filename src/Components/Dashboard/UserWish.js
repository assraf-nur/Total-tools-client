import React, { useEffect, useState } from "react";
import WishTable from "./WishTable";

const UserWish = () => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/wishes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWish(data));
  }, []);

  return (
    <div class="overflow-x-auto">
        <h3 className="ml-5 text-3xl py-2">User Wish Tools</h3>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>User Name</th>
            <th>Tools Name</th>
            <th>Approximate Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
              wish.map(w => <WishTable key={w._id} w={w}></WishTable>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default UserWish;
