
// Import necessary components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CartModal from "./Items/CartModal";
import Shops from "./Items/Shops";
import Cart from "./Items/Cart";
import UsersOrders from "./Items/usersOrders";


// Define UserDashboard component
const UserDashboard = () => {

 
  
  return (
    // Create a Tabs component with default value "shop"
    <Tabs className="flex w-full h-[90vh] " defaultValue="shop" >
        <div className="basis-full lg:basis-8/12 flex flex-col lg:flex-row " >
            {/* // Create a TabsList component */}
            <TabsList  className="flex lg:flex-col bg-white  basis-full lg:basis-2/12  h-full border-r-2 " >
                {/* // Create TabsTrigger components for "shop" and "my_orders" */}
                <TabsTrigger value="shop" className='w-full' >Shop</TabsTrigger>
                <TabsTrigger value="my_orders" className='w-full' >My orders</TabsTrigger>
                
                {/* // Add CartModal component */}
                <CartModal />
            </TabsList>
            
            <div className="basis-full lg:basis-10/12 p-4" >
                {/* // Create TabsContent components for "shop" and "my_orders" */}
                <TabsContent value="shop" className="h-[85vh]" ><Shops  /></TabsContent>
                <TabsContent value="my_orders" className="h-[85vh]" ><UsersOrders /></TabsContent>
            </div>
        </div>
        {/* // Add Cart component in a div that is hidden on small screens */}
        <div className=" hidden lg:block lg:basis-4/12 border-r-2 " >
            <Cart  />
        </div>
    </Tabs>
  )
}

// Export UserDashboard component
export default UserDashboard;