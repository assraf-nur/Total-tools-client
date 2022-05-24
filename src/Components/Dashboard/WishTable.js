import React from "react";

const WishTable = ({ w }) => {
  const { userName, name, price, details } = w;

  return (
    <tr>
      <th>{userName}</th>
      <td>{name}</td>
      <td>{price} $</td>
      <td>{details}</td>
    </tr>
  );
};

export default WishTable;
