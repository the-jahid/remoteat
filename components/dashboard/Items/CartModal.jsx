
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Cart from "./Cart";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";


const CartModal = () => {

  const dispatch = useDispatch();

  

  
  const {selectedItems, totalPrice} = useSelector((state) => state.counter); 

  const totalItemsInCart = selectedItems.length;
  return (
    
  <div className="lg:hidden h-full  " >
    <Sheet>
    <SheetTrigger className="relative mx-auto h-fit w-fit rounded-md bg-white p-2 hover:bg-gray-200" >
        
            <CiShoppingCart size={25} />
            <span className="h-[14px] w-[14px]  absolute rounded-full -top-1 -right-1 ">{totalItemsInCart}</span>
            
    </SheetTrigger>
    <SheetContent   >
        <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
          
        </SheetHeader>
        <Cart />
    </SheetContent>
    </Sheet>
</div>
  )
}

export default CartModal