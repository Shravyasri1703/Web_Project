import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 flex flex-col gap-2">
              <span>Email</span>
              <input
                className="w-80 border rounded-md px-3 py-1 outline-none"
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className=" mt-2 text-sm text-red-600">This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-4 flex flex-col gap-2">
              <span>Password</span>
              <input
                className="w-80 border rounded-md px-3 py-1 outline-none"
                type="password"
                name=""
                id=""
                placeholder="Enter your passowrd"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="mt-2 text-sm text-red-600">This field is required</span>}
            </div>
            {/* Login Button */}
            <div className="flex justify-between mt-10">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <a
                  href="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
