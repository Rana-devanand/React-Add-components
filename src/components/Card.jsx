import React from "react";

function Card({ data, handleDelete, id }) {
  return (
    <div className="w-40 h-full bg-zinc-100 rounded-lg flex flex-col items-center ">
      <div className="image w-10 h-10 rounded-full my-2 bg-blue-800 overflow-hidden">
        <img src={data.Image} alt="" className=" rounded-full" />
      </div>
      <h1 className="font-semibold mx-2">{data.Name}</h1>
      <h4 className="my-2 opacity-30 text-xs">{data.Email}</h4>
      <p className="text-center font-thin text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ad?
      </p>
      <button
        onClick={() => handleDelete(id)}
        className="bg-red-600 px-3 py-1 my-2 rounded-md text-white"
      >
        Remove
      </button>
    </div>
  );
}

export default Card;
