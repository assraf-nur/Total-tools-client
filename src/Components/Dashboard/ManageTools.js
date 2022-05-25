import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageTool from "./ManageTool";

const ManageTools = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery(["tools"], () =>
    fetch("https://glacial-citadel-80712.herokuapp.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="ml-5 text-3xl py-4">Manage Tools</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 px-12">
        {tools.map((tool) => (
          <ManageTool key={tool._id} tool={tool} refetch={refetch}></ManageTool>
        ))}
      </div>
    </div>
  );
};

export default ManageTools;
