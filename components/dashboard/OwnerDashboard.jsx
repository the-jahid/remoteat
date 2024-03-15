'use client'
import Image from "next/image";

import Searchbar from "./Items/Searchbar";
import BarItems from "./Items/BarItems";
import { Tabs, TabsContent } from "@/components/ui/tabs"
import Link from "next/link";
import Dashboard from "./dashboard";
import { ShowAllFoodItems } from "./Items/foodItems";
import OwenerOrders from "./Items/OwenerOrders";
import OwnerSidebar from "./Items/OwnerSidebar";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { HiMenuAlt1 } from "react-icons/hi";

const OwnerDashboard = () => {
  return (
    <Tabs defaultValue="orders" >
    <div>
            <nav className="fixed   top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end space-x-2  ">
                       <div className=" block md:hidden lg:hidden" >
                        <Sheet  >
                            <SheetTrigger><HiMenuAlt1 size={25} /></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    <OwnerSidebar />
                                </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                            </Sheet>
                       </div>

                     <Image src={'/RELogo.png'} width={240} height={200} alt="dashboard_logo"  className="min-w-[200px]" />
                </div>

                <div className="hidden md:block  w-[30%] " >
                            <Searchbar />
                </div>
                <div className="hidden md:block min-w-xl " >
                            <BarItems />
                </div>

                <div className="flex items-center">
                    <div className="flex items-center ms-3 space-x-4 ">
                        
                        <div>
                            
                            <Link href={'/'} >Home</Link>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
            </nav>
                <div  className=" w-full flex   h-[90vh]">
                    
                    <div className="h-full border  md:fixed md:top-14  basis-3/12  px-2 pb-4 overflow-y-auto bg-white  space-y-4 hidden md:block  ">     
                        <OwnerSidebar />
                    </div>

                    <div className=" md:relative md:left-96 basis-full md:basis-9/12 p-4 z-30 " >
                            <TabsContent value="dashboard" className='h-screen bg-gray-200 p-2  z-20 ' ><Dashboard /></TabsContent>
                            <TabsContent value="orders"  className="z-20" ><OwenerOrders /></TabsContent>
                            <TabsContent value="food_items"  className="z-20" ><ShowAllFoodItems /></TabsContent>
                    </div>
                        
                </div>
                      
              

    </div>
    </Tabs>
  )
}

export default OwnerDashboard


