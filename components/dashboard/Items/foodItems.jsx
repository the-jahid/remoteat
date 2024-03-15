'use client'

import { apiurl } from "@/lib/constant";
import axios from "axios"
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ShowAllFoodItems = () => {

    const [foodItems, setFoodItems] = useState([]);
    const [refresh, setRefresh] = useState(false);
    
    const fetchFoodItems = async () => {
        try {
          const response = await axios.get(`${apiurl}/food/single`);
          setFoodItems(response.data.data);
          
        } catch (error) {
          console.error('There was an error!', error);
        }
      }
      
      useEffect(() => {
        fetchFoodItems();
      }, [refresh]);

      

      const deleteItem = async (id) => {
        try {
          const response = await axios.delete(`https://remoteat-c95e925e64d9.herokuapp.com/api/v1/food/single/${id}`);
          toast.success("item deleted Successfully");
          setRefresh(!refresh); // Toggle the refresh state to trigger a re-render
        } catch (error) {
          toast.error("Dev Error");
        }
      }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
            {foodItems.map((item) =>  <div className="border rounded-md" >
            <div className=" space-y-4 rounded-lg  p-6 shadow-lg  bg-white">
                  <Image 
                    src={item.food_image} 
                    alt="card navigate ui" 
                    width={350} 
                    height={275} 
                    objectFit="cover"
                    className="rounded-lg"
                  />
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">{item.food_name}</h1>
         
                <div className="flex flex-col md:flex-row items-center justify-evenly" >
                <div className="text-lg font-semibold  ">{item.price} tk</div>
                <button onClick={() => deleteItem(item.id)} className="p-1 bg-red-500 rounded-md " >Delete Item</button>
               </div>
            </div>
            
        </div>
            </div> )}
        </div>
    )
}
