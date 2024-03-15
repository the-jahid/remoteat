'use client'
import { Separator } from '@/components/ui/separator';
import { apiurl } from '@/lib/constant';
import { cn, getUserProfile } from '@/lib/utils';
import axios from 'axios';
import { useState, useEffect } from 'react';

const UsersOrders = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(getUserProfile());

  useEffect(() => {
    axios.get(`${apiurl}/auth/${user.id}`)
      .then(response => {

        
        setOrders(response.data.data.order);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className=' overflow-y-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  '>
        {orders.map(({ id, user_id, shop_id, food_items, description, total_price, address, order_status, payment_status, picked, created_at }) => (
        <div key={id} className='border border-black rounded-md p-2 space-y-2  relative h-72'>
               <h2>Food Items ( id  {id}) </h2>
               <div className='flex flex-wrap gap-2 ' >
                    {food_items.map((item, ind) => <p key={ind} className='bg-primary p-1 rounded-md' > {item}</p>  )}
                </div> 

                    <Separator />
                <div>
                    <p>Total: {total_price} tk </p>
                    <p>{address}</p>
                </div>  
                <Separator />

                
                <p className={cn('bg-primary rounded-md text-center absolute bottom-4 w-[90%] ', {
                    'bg-red-500':order_status === "PENDING"
                } )} >{order_status}</p>
                
        </div>
))}
    </div>
  )
}

export default UsersOrders;