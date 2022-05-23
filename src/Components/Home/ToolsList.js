import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ToolList from "./ToolList";

const ToolsList = () => {
  const { data: tools, isLoading } = useQuery(["tools"], () =>
    fetch("http://localhost:5000/tools",{
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
    <div className="px-12 mt-5">
        <h2 className="text-center text-4xl font-semibold">Tools We Provide</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        {
            tools.slice(0, 6).map(tool => <ToolList key={tool._id} tool={tool}></ToolList>)
        }
      </div>
    </div>
  );
};

export default ToolsList;
