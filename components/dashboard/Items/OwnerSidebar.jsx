import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import SidebarAccordion from "./sidebarAccordion"
import { FaSignOutAlt } from "react-icons/fa"
import { LuLayoutDashboard } from "react-icons/lu"
import { BsBorderStyle } from "react-icons/bs"
import { IoFastFood } from "react-icons/io5"
import Enterdetails from "./Enterdetails"
import { signOut } from "@/lib/utils"


const OwnerSidebar = () => {
  return (
    
        <div className="h-full  px-2 pb-4 overflow-y-auto bg-white space-y-4 w-full basis-3/12  ">
           
            <TabsList className='space-y-2 font-medium flex flex-col p-5  justify-start h-auto  w-full bg-transparent ' >
                <TabsTrigger value="dashboard" className="flex  w-full bg-transparent items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group font-semibold" >
                    <LuLayoutDashboard className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  />
                    <div className="flex-1 text-base whitespace-nowrap" >Dashboard</div>
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex  w-full bg-transparent items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group font-semibold" >
                    <BsBorderStyle className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  />
                    <div className="flex-1 text-base whitespace-nowrap" >Orders</div>
                </TabsTrigger>
                <TabsTrigger value="food_items" className="flex  w-full bg-transparent items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group font-semibold" >
                    <IoFastFood className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  />
                    <div className="flex-1 text-base whitespace-nowrap" >Food Items</div>
                </TabsTrigger>
                
            </TabsList>

            {/* <SidebarAccordion /> */}
            <Enterdetails />
            <div onClick={() => signOut()} className="flex justify-center items-center font-semibold border-2 rounded-md p-3 space-x-2 cursor-pointer " >
                <FaSignOutAlt size={20} color="#FF0000" />
                <h2 className="text-danger" >Sign Out</h2>
                
            </div>
        </div>
        
  )
}

export default OwnerSidebar