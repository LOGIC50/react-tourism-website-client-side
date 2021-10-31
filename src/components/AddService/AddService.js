import axios from 'axios';
import React from 'react';

// import { Placeholder } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            console.log(res);
  })
}
    return (
        <div className='add-service'>
            <h1>Please Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true} ) } Placeholder='Service Name' />
            <br />
            <textarea {...register("description")} Placeholder='Service Description'/>
            <br />
            <input type="number" {...register("price")} Placeholder='Service Price'/>
            <br />
            <input {...register("img")} Placeholder='Service img' />
            <br />
            <input {...register("time")} Placeholder='Service Time'/>
            <br />
            <input {...register("rating")} Placeholder='Customer Rating'/>
            <br />
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;