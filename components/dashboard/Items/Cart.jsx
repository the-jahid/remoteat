'use client'
import { Separator } from "@/components/ui/separator";
import { cancelItem, counttotalPrice, deleteallSelectedItems } from "@/features/counter/counterSlice";
import { apiurl } from "@/lib/constant";
import { getUserProfile } from "@/lib/utils";
import axios from "axios";
import { addRequestMeta } from "next/dist/server/request-meta";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

    const dispatch = useDispatch();
    const user = JSON.parse(getUserProfile());
    
    const [address, setAddress] = useState('');
    
    const {selectedItems, totalPrice} = useSelector((state) => state.counter); 
    
    useEffect(() => {
        dispatch(counttotalPrice())
    }, [selectedItems]); 
    
    const postOrder = async (data) => {
        try {
            await axios.post(`${apiurl}/order`, data);
            setAddress("");
            dispatch(deleteallSelectedItems());
            toast.success("Order Successfully");
        } catch (error) {
            toast.error("Error Found");
            console.error(error);
        }
    }
    
    const orderItems = () => {
        const food_items = selectedItems.reduce((acc, curr) => {
            if(curr.food_name){
                acc.push(curr.food_name)
            }
            return acc;
        }, []) 
    
        const data = {
            user_id:user?.id,
            shop_id: 1,
            food_items:food_items,
            description: "My order",
            total_price : totalPrice,
            address:address
        }
    
        if(address.length === 0 || food_items.length === 0 ) {
            toast.error("Please enter your info properly")
        } else {
            postOrder(data);
        }
    }
   

  return (
   
        <div className=" py-4 flex flex-col justify-between  bg-gray-250   bg-transparent space-y-2 md:px-2 lg:px-4  h-full ">
            {/* top part  */}
            <div className="flex  grow-0 justify-between items-center ">
                <h4 className="text-lg font-medium text-slate-800 uppercase">order</h4>
                <p className="text-sm font-medium text-gray-400 uppercase">edit cart</p>
            </div>

            <Separator />
         
            {/*  Cart  map */}
           <div className=" h-96 lg:h-96 overflow-y-auto  grow space-y-2 " >

                {selectedItems.length === 0 && (
                <div className="w-full h-full relative">
                    <Image 
                    src="/cart_image.jpg" 
                    alt="cart_image" 
                    layout="fill" 
                    objectFit="cover"
                    className="bg-cover"
                    />
                </div>
                )}

           {selectedItems.map((item, idx) => (
                
                <div className="space-y-1" >
                    <div key={idx} className="grid grid-cols-2">
                    
                    <Image 
                      src={item.food_image} 
                      alt="card navigate ui" 
                      width={60} 
                      height={60} 
                      className="rounded-lg"
                    />
    
                    <div className="flex flex-col md:flex-row md:space-x-2 text-sm sm:text-md">
                                    <h2 className="font-semibold">Quantity: {item.quantity}</h2>
                                    <h2 className="font-semibold">Price: {item.price * item.quantity} tk</h2>
                    </div> 
    
    
                    <h5 className="text-lg sm:text-lg font-medium text-black">{item?.food_name}</h5>
                  
                    
                  
                    <button className="p-1 bg-primary rounded-md text-white" onClick={() => dispatch(cancelItem(item.id))}>Cancel</button>
                  </div>
                  <Separator />
                </div>
            ))}
   
           
           </div>
            {/* calculation part  */}
            <Separator />
            <div className="space-y-2  grow-0 ">
                <div className="flex justify-between items-center ">
                    <h5 className="text-lg text-slate-800 capitalize">total Price :</h5>
                    <h4 className="text-lg font-medium text-slate-800">{totalPrice}</h4>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="address">Enter Your Order Point</label>
                    <input value={address} type="text" className="border border-rounded  border-black p-2 " onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button onClick={() => orderItems()}  className="font-semibold bg-primary text-white py-3 w-full duration-500 active:bg-[#278b76]">Order </button>
            </div>
        </div>
    
  )
}

export default Cart;
