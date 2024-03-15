'use client'
import { selectItem } from '@/features/counter/counterSlice';
import Image from 'next/image';
import React, { useState } from 'react'
import { MdShoppingCartCheckout } from 'react-icons/md';
import { useDispatch } from 'react-redux';

const FoodCard = ({item}) => {

  const { id, shop_id, food_name, price, food_image } = item;
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const selectedItem = (item, quantity) => {
        const data = {
            id,
            shop_id,
            food_name,
            price,
            food_image,
            quantity,
          };

          dispatch(selectItem(data));
    }

  return (
    <div className="px-4 py-4 shadow-lg  font-sans rounded-xl space-y-4  mx-auto   w-full">
         
        <section className="image-section flex justify-center w-full h-28  md:h-40 relative ">
            <Image src={food_image} alt="card navigate ui" layout="fill" objectFit="cover" className='rounded-md' />
        </section>

          <div className="text-center w-[85%] mx-auto font-semibold space-y-2">
              <h6 className="text-sm md:text-base lg:text-lg">{item.food_name}</h6>
              <p className="text-gray-400 text-xs md:text-sm font-semibold">{item.price} tk</p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
              
            <div className="flex justify-evenly w-full" >
                <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

              <button onClick={() => selectedItem(item, quantity) } className="flex items-center justify-center space-x-2 p-2 bg-gray-100 rounded-md w-full ">
                 <MdShoppingCartCheckout />
                <span className="text-black"  >Select</span>
              </button>
          </div>
      </div>
  )
}

export default FoodCard