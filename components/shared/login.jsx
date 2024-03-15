// 'use client'
// Import necessary libraries and components
import { apiurl } from "@/lib/constant";
import axios from "axios";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";


// Define the LoginSection component
const LoginSection = ({registers, setRegister}) => {

    // const router = useRouter();
    // Initialize the form with react-hook-form
    
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
    
    // Define the function to run when the form is submitted
    const onSubmit = (data) => {

        // Destructure the form data
        const {email, password} = data;

        // Prepare the data to send in the POST request
        const postData = {
          email,
          password
        }

        // Send a POST request to the login endpoint
        axios.post(`${apiurl}/auth/login`, postData)
        .then(response => {
          // If the response includes a token, store the user info and token in localStorage
          if (response.data  ) {
            
            const {id, name, email, role} = response.data.data.user;
            const userdata ={
              id,name, email, role
            }

            localStorage.setItem('userinfo', JSON.stringify(userdata));
            localStorage.setItem('jwtToken', response.data.data.token);

            // Show a success message
            reset();
            toast.success("Successfully logged in");

            if(role == "STUDENT"){
              window.location.href= '/'
            }  else if (role == "OWNER") {
              window.location.href= '/dashboard'
            }  else {
              console.log('Your Role is not defined')
            }
          } else {
            // If the response does not include a token, show an error message
            
            toast.error("Wrong Password");
          }
        })
        // If the request fails, show an error message
        .catch(error => {
          toast.error("error found");
          console.error('Request failed', error);
        });
    }
    
    // Render the form
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`p-8 w-full mr-0 ml-auto duration-500 ${registers ? 'lg:translate-x-full hidden lg:block' : ''}`}>
            <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
            <div className="space-y-5">
                <label htmlFor="_email" className="block">Email</label>
                <input {...register("email", { required: true })} id="_email" type="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                <label htmlFor="_password" className="block">Password</label>
                <input {...register("password", { required: true })} id="_password" type="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"/>
            </div>
            <button type="submit" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Login</button>
            <p className="mb-3 text-center">Don&apos;t have an account?<button type="button" onClick={() => {setRegister(!registers);}} className="underline font-semibold">Register</button></p>
        </form>
    )
}

// Export the LoginSection component
export default LoginSection