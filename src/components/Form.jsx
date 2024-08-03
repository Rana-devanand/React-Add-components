import React from "react";
import { useForm } from "react-hook-form";

function Form({ FormHandleOnSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    FormHandleOnSubmit(data);
    reset();
  };

  return (
    <div className="mt-5 flex items-center justify-center ">
      <div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex gap-5">
          <input
            type="text"
            {...register("Name")}
            className="px-3 pt-2 text-violet-500 text-base outline-none  rounded-md"
            placeholder="Name"
          />
          <input
            type="text"
            {...register("Email")}
            className="px-3 pt-2 text-violet-500 text-base outline-none rounded-md"
            placeholder="Email"
          />
          <input
            type="text"
            {...register("Image")}
            className="px-3 pt-2 text-violet-500 text-base outline-none rounded-md"
            placeholder="Image URL"
          />

          <button className="px-3 py-2 bg-green-600 text-white rounded-md">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
