import React, { useState } from "react";
import { registerUser } from "../../services/AuthService";
import { useForm } from "react-hook-form";


const Register = () => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    const {name, email, password} = data
    registerUser(name, email, password)
    console.log(data); 
  } 
    


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col  justify-center items-center   bg-white rounded-lg shadow-md dark:bg-gray-800 p-8">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Create A New Account
        </div>

        <div className="mt-8">
          <form action="#" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  id="sign-in-name"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Name"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="text"
                  id="sign-in-email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your email"
                  {...register("email")}

                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  id="sign-in-password"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your password"
                  {...register("password")}
                 
                />
              </div>
            </div>

            <br />
            <br />
            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                SIgn Up
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span className="ml-2">Already a user Signin</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
