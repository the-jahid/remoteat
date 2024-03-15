'use client'

import { Separator } from "@/components/ui/separator"
import { apiurl, menucategory, showShopItems } from "@/lib/constant"
import axios from "axios";
import { useEffect, useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import FoodCard from "./FoodCard";

const Shops = ({selectItem, setSelectedItems, selectedItems}) => {

  const [foodItems, setFoodItems] = useState([]);

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
    }, []);

   
  return (
    <section className=" flex flex-col space-y-4  h-full " >
        <div className="space-y-2" >
           <h2 className="text-2xl">Menu Category</h2>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {
                  menucategory.map((item) =>  
                    <button key={item.id} className="border-2 p-1 rounded-md flex justify-center space-x-2 cursor-pointer hover:border-4">
                      {item.icon}
                      <h2 className="text-sm sm:text-md md:text-lg">{item.title}</h2>
                    </button> 
                  )
                }
              </div> */}
        </div>
          <Separator  />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto h-full ">
          {foodItems.map((item) => <FoodCard  item={item}   />  )}
        </div>

    </section>
  )
}

export default Shops