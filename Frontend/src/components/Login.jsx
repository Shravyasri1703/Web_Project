import React from "react";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
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
            />
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
            />
          </div>
          {/* Login Button */}
          <div className="flex justify-between mt-10">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registered?{" "}
              <a href="/signup" className="underline text-blue-500 cursor-pointer">
                Signup
              </a>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
