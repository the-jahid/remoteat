'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import OwnerOrderCard from "./OwnerOrderCard";

const OwenerOrders = () => {

    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const getUserOrder = async () => {
      try {
        const response = await axios.get('https://remoteat-c95e925e64d9.herokuapp.com/api/v1/order');
        
        setOrders(response.data.data); 
      } catch (error) {
        console.log('error found')
      }
    }
    
    useEffect(() => {
      const fetchOrders = async () => {
        await getUserOrder();
      }
      fetchOrders();
    }, [refresh]);




  return (
   <section className="w-full flex flex-col" >
        

         <div className="grow-0" >
         {
            orders.length == 0 && <div>Loading</div>
          }

         </div>
            
            <div className="  overflow-y-auto w-full grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 " >
              {
                orders.map((item) =>  <OwnerOrderCard key={item.id} item={item} setRefresh={setRefresh} refresh={refresh} /> )
              }  
              </div>  
           
            
   </section>
  )
}

export default OwenerOrders;



