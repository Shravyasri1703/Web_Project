import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email : data.email,
      password : data.password,
    }
    await axios.post('http://localhost:4000/user/login', userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Login Successfull')
        document.getElementById("my_modal_3").close()
        setTimeout(()=>{
         
          window.location.reload()
          localStorage.setItem('Users', JSON.stringify(res.data))
  
        },1000)
        

      }
     
    }).catch((err)=>{
      if(err.response){
        console.log(err)
         toast.error("Error : "+ err.response.data.message)
      }
     
    })
  }

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
