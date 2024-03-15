'use client'

import LoginSection from "@/components/shared/login";
import SignUpSection from "@/components/shared/signup";
import { useState } from "react";

const LoginPage = () => {
  const [register, setRegister] = useState(false);

  

  return (
    <div className=" mx-auto bg-white h-[90vh]  flex items-center relative overflow-hidden shadow-xl">
    {/* register form  */}
    <SignUpSection registers={register} setRegister={setRegister} />
    {/* img */}
    <div className={`hidden lg:block absolute w-1/2 h-full top-0  duration-500 overflow-hidden bg-black/20 ${register ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
        <img src="https://i.ibb.co/HqdRwtQ/ivan-torres-MQUqbmsz-GGM-unsplash.jpg" className="object-cover h-full" alt="card navigate ui" />
    </div>
    {/* login form */}
   <LoginSection registers={register} setRegister={setRegister} />
</div>

  )
}

export default LoginPage;
