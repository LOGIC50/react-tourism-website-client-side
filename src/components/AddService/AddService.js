import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://still-lake-86681.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Product Added Successfully");
        }
        console.log(res);
      });
  };
  return (
    <div className="add-service">
      <h1 style={{ margin: "20px auto" }}>Please Add a Service</h1>
      <div className="input-portion">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            Placeholder="Service Name"
          />
          <br />
          <textarea
            {...register("description", { required: true })}
            Placeholder="Service Description"
          />
          <br />
          <input
            type="number"
            {...register("price", { required: true })}
            Placeholder="Service Price (ex: $100)"
          />
          <br />
          <input
            {...register("img", { required: true })}
            Placeholder="Service img (img link)"
          />
          <br />
          <input
            {...register("time", { required: true })}
            Placeholder="Service Time"
          />
          <br />
          <input
            {...register("rating", { required: true })}
            Placeholder="Rating- example (10k+)"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
