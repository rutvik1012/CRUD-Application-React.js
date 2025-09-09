import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../useContext/UserContext";
import {useNavigate} from "react-router"

const AddUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const { userData, setUserData, editUser, setEditUser } =
    useContext(UserContext);
    const navigate =useNavigate()

  useEffect(() => {
    if (editUser) {
      setValue("name", editUser.name);
      setValue("job", editUser.job);
    } else {
      reset(); 
    }
  }, [editUser, setValue, reset]);

  const onSubmit = (formData) => {
    if (editUser) {
      // Edit existing user
      const updatedData = userData.map((item) =>
        item.id === editUser.id
          ? { ...item, name: formData.name, job: formData.job }
          : item
      );
      setUserData(updatedData);
        setEditUser(null);
    } else {
      // Add new user
      const newUser = {
        id: userData.length + 1,
        name: formData.name,
        job: formData.job,
      };
      setUserData([...userData, newUser]);
    }

    reset(); 
    // setUp(true); // refresh UI
    navigate('/')
  };

  const handleBack=()=>{
    setEditUser(null); 
    navigate('/')
  }

  return (
    <div className="mt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[45%]  m-auto border bg-blue-50 p-15 ">
       <div className="flex justify-evenly mb-5">
         <div>
          <label>Enter Your Name:</label>
          <br />
          <input
            type="text"
            className="border-1"
            placeholder="Enter Name"
            {...register("name", { required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </div>

        <div>
          <label >Enter Job Profile:</label>
          <br />
          <input
            type="text"
            className="border-1"
            placeholder="Enter Job"
            {...register("job", { required: true })}
          />
          {errors.job && <p>This field is required</p>}
        </div>
       </div>

        <div className="flex justify-center ">
         <button type="submit" className="btn btn-success h-fit me-2">
          {editUser ? "Update" : "Save"}
        </button> 
        <button className="btn btn-secondary h-fit" onClick={()=>handleBack()}>Back to User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
