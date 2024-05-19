import React from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import SignupIMG from "../../public/signup-img.jpg";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex justify-between rounded-2xl shadow-lg max-w-3xl p-5">
          {/* form */}
          <div className="w-1/2 px-8">
            <h2 className="font-bold text-2xl text-[#2E2720]">Signup</h2>
            <p className="text-sm mt-4 text-[#2E2720]">
              Don't have an account SignIn below!!
            </p>

            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            {/* <button className="absolute right-1 top-1">
              ✕
            </button> */}
              <input
                className="bg-gray-50 p-2 mt-8 rounded-xl border"
                type="text"
                name=""
                id=""
                placeholder="Enter your full name"
                {...register("name", { required: true })}
              />
              {errors.name && <span className=" mt-1 text-sm text-red-600">This field is required</span>}
              <input
                className="bg-gray-50 p-2 rounded-xl border"
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className=" mt-1 text-sm text-red-600">This field is required</span>}
              <input
                className="bg-gray-50 p-2 rounded-xl border"
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && <span className=" mt-1 text-sm text-red-600">This field is required</span>}
              <button className="bg-[#2E2720] rounded-xl p-2 text-white">
                SignIn
              </button>
              <p>
                Have an account?
                <Link to="/" className="underline text-blue-600 cursor-pointer ml-24">Login</Link>
              </p>
            </form>
          </div>

          {/* image */}
          <div className="w-1/2 ml-auto">
            <img className="w-4/5 rounded-2xl" src={SignupIMG} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
