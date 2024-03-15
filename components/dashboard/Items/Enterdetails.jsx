// Import necessary libraries and components
'use client'
import { Separator } from "@/components/ui/separator";
import { apiurl } from "@/lib/constant";
import { uploadImage } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// Define a reusable InputField component
const InputField = ({ register, name, type, placeholder }) => (
  <div>
    {/* Use the register function from react-hook-form for form handling */}
    <input  {...register(name, { required: true })} type={type} className="w-full rounded-md  border-2 p-2" placeholder={placeholder} />
  </div>
);

// Define the Enterdetails component
const Enterdetails = () => {
  
  // State for the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  // Initialize the form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      gender: "female", // set default value for gender
    }
  });

  // Function to handle form submission
  const onSubmit = async (data) => {


    
    
    const imageUrl = await uploadImage(selectedImage);

    // Create a new food item object
    const createNewFoodItem = {
      shop_id: 1,
      food_name: data.food_name,
      price: parseFloat(data.price),
      stock:data.stock,
      food_image: imageUrl.data.display_url,
    }

    

      axios.post(`${apiurl}/food/single`, createNewFoodItem)
      .then(response => {
        toast.success("Food Added Successfully")
        reset();
      })
      .catch(error => {
        console.error('There was an error!', error);
      });


    
    reset()
    
  };
  
  // Render the form
  return (
    <form className=" mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 space-y-4 mb-3">
        <h2 className="text-center font-semibold">Enter Details</h2>
        <Separator />
        {/* Use the InputField component for the food name and price inputs */}
        <InputField register={register} name="food_name" type="text" placeholder="Enter Food Name" />

        <select {...register("stock")} className="w-full" >
          <option value="STOCKIN">Stock In</option>
          <option value="STOCKOUT">Stock Out</option>
         
        </select>

        <InputField register={register} name="price" type="number" placeholder="Enter Price" />
        {/* Input for image file */}
        <input type="file" onChange={handleImageChange} />
      </div>
      {/* Submit button */}
      <button type="submit" className="w-full bg-green-400 border p-2 rounded-md font-semibold text-white">Submit</button>
    </form>
  )
}

// Export the Enterdetails component
export default Enterdetails;