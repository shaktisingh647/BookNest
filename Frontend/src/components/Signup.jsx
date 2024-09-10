import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form"
import Login from './Login'
const Signup = () => {
  const{
    register,
    handleSubmit,
    formState:{errors},
} = useForm();
const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div id="my_modal_3" className="  w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Signup</h3>
             <div className="mt-4 space-y-2 rounded-md">
             <div className="mt-4 space-y-2 rounded-md">
                <label htmlFor="name">Name</label>
                <br />
                <input type="name" name="name" id="name" placeholder="Enter Your FullName" className="w-80 px-3 border rounded-md outline-none py-1" {...register("name",{required:true})}/>
                <br />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
             </div>
             
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-80 px-3 border rounded-md outline-none py-1" {...register("email",{required:true})}/>
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
             </div>
             {/* password div */}
             <div className="mt-4 space-y-2">
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" id="password" placeholder="Enter Password" className="w-80 px-3 border rounded-md outline-none py-1" {...register("password",{required:true})}/>
                <br />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
             </div>
             {/* login button */}
             <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                <p>Have Account? <Link to="/" className="underline text-blue-500 cursor-pointer" onClick={
                    ()=>document.getElementById("my_modal_3").showModal()
                }>Login</Link> <Login/></p>
             </div>
             </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
