import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = params;
  console.log(id);
  return <h1>Movie Detail : {id} </h1>;
};

export default page;
