'use client'
import { apiurl } from "@/lib/constant";
import axios from "axios";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const SignUpSection = ({registers, setRegister}) => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
        
      } = useForm();
    
        const onSubmit = (data) => {
        
        const {username:name, email, password, address} = data;

        const postData = {
            name,
            email,
            password,
            address
          };
        
          
        axios.post(`${apiurl}/auth/register`, postData)
        .then(response => {
            
            toast.success('Successfully Registerred');
            setRegister(false);
            reset();
        })
        .catch(error => {
            toast.error('Please Try again');
            reset();
        });
                
        }

  return (
        <form  onSubmit={handleSubmit(onSubmit)} className={`p-8 w-full ${registers ? 'lg:translate-x-0' : 'lg:-translate-x-full hidden lg:block'} duration-500`}>
            <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Register</h1>
            <div className="space-y-5">
                <label htmlFor="name" className="block">Name</label>
                <input {...register("username", { required: true })} id="name" type="text" placeholder="John Doe" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
               
                <label htmlFor="u_email" className="block">Email</label>
                <input {...register("email", { required: true })} id="u_email" type="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                <label htmlFor="u_address" className="block">Enter Your Address</label>
                <input {...register("address", { required: true })} id="u_address" type="text" placeholder="Address" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                <label htmlFor="u_password" className="block">Password</label>
                <input {...register("password", { required: true })} id="u_password" type="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"/>
            </div>
            
            <button type="submit" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Sign Up</button>
            <p className="mb-3 text-center">Already have an account?<button type="button" onClick={() => {setRegister(!registers);}} className="underline font-semibold">Login</button></p>
         
        </form>
  )
}

export default SignUpSection;


