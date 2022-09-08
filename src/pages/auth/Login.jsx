import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password).then((res) =>{
console.log(res);
    }
    ).then(navigate("/"));
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col  justify-center items-center   bg-white rounded-lg shadow-md dark:bg-gray-800 p-8">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login To Your Account
        </div>

        <div className="mt-8">
          <form action="#" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                Login
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
            <span className="ml-2">You don&#x27;t have an account?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
