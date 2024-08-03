import React, { useState } from "react";
import Form from "./components/Form";
import Cards from "./components/Cards";

function App() {
  const [user, setUser] = useState([]);

  const handleOnFormSubmit = (data) => {
    setUser([...user, data]);
  };

  const handleDelete = (id) => {
    setUser(user.filter((item, index) => index !== id));
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards handleDelete={handleDelete} users={user} />
        <Form FormHandleOnSubmit={handleOnFormSubmit} />
      </div>
    </div>
  );
}

export default App;
