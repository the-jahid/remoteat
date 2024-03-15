'use client'

import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";

const MakeCombo = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
       <div className="mt-5 space-y-4 mb-3 " >
            <h2 className="text-center font-semibold" >Make Combo</h2>
            <Separator />
            

              <div>
                <input {...register("combo_name", { required: true })} type="text" className="w-full rounded-md " placeholder="Enter Combo Name " />
              </div>
              <div>
                <button className="bg-gray-200 shadow-md  w-full p-2 rounded-md font-semibold " >Select from Food Items</button>
              </div>
              <div>
                <input {...register("combo_price", { required: true })} type="number" className="w-full rounded-md " placeholder="Enter Price " />
              </div>
              <div>
                <input  type="file" className="w-full rounded-md  " placeholder="Enter Price " />
              </div>



              
       </div>
   
        
        <button type="submit" className="w-full bg-green-400 border p-2 rounded-md font-semibold text-white ">Submit</button>
    </form>
  )
}

export default MakeCombo;
