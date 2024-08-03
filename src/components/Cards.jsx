import React from "react";
import Card from "./Card";

function Cards({ users, handleDelete }) {
  return (
    <div className="w-full max-h-96 p-3 flex flex-wrap items-center justify-center gap-4 overflow-auto">
      {users.map((items, index) => {
        return (
          <Card
            handleDelete={handleDelete}
            data={items}
            id={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Cards;
