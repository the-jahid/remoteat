import { apiurl } from "@/lib/constant";
import { cn } from "@/lib/utils";
import axios from "axios";
import toast from "react-hot-toast";

const OwnerOrderCard = ({item, setRefresh, refresh}) => {

    const { id, user_id, shop_id, food_items, description, total_price, address, order_status, payment_status, picked, created_at } = item;
    
    const deleteOrder = async (id) => {
        try {
          const response = await axios.delete(`${apiurl}/order/${id}`);
          setRefresh(!refresh);
          toast.success("Deleted SuccessFully")
        } catch (error) {
          console.error(error);
        }
      }

      const updateOrderStatus = async (id, newStatus) => {
        try {
          if(order_status == "ACCEPTED"){
             toast.error("Order Already Accepted")
          }  else {

            const response = await axios.patch(`${apiurl}/order/${id}`, {
            order_status: newStatus
          });
          setRefresh(!refresh);
          toast.success("Order Accepted");
          }
          
        } catch (error) {
          console.error(error);
        }
      }


      // const updateDeliveryStatus = async (id, newStatus) => {
      //   if(picked == "YES"){
      //     toast.error("Order Already Delivered")
      //  }  else {

      //    const response = await axios.patch(`${apiurl}/order/${id}`, {
      //     picked: newStatus
      //  });
      //  setRefresh(!refresh);
      //  toast.success("Order Accepted");
      //  }
      // }
      

  return (
    <div className=" space-y-4 rounded-lg  p-6 shadow-lg bg-white">
    
    <div className="grid gap-2  space-y-2 ">
        <div className="flex justify-between flex-wrap" >
            <div>
                <h1 className="text-md font-semibold ">{address} ({id})</h1>
                
            </div>

            
            <div>
                <p className={cn('text-white p-1 font-semibold rounded-md text-xs', {
                  'bg-red-500': order_status == 'REJECTED',
                  'bg-green-500': order_status == 'ACCEPTED',
                  'bg-yellow-200 text-black': order_status == 'PENDING',
                })}>
                  {order_status}
                </p>
            </div>
            
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2" >
            {food_items.map((item_name) => <p className="bg-green-400 p-1 rounded-md text-white text-center" >{item_name}</p> )}
        </div>
        <div className="text-lg font-semibold  ">{total_price} tk</div>
    </div>
    <div className="flex gap-4 flex-col md:flex-row ">
        { order_status !== "ACCEPTED" && <button onClick={() => updateOrderStatus(id, "ACCEPTED")}  className="p-1 bg-slate-800 text-white rounded-lg  md:text-base sm:text-sm text-[12px] hover:bg-slate-950"  >accept</button>}
        <button onClick={() => deleteOrder(id)}  className="p-1 bg-primary text-white rounded-lg  md:text-base sm:text-sm text-[12px] hover:bg-slate-950"  >delete</button>
        {/* <button onClick={() => updateDeliveryStatus(id, "YES")}  className="p-1 bg-primary text-white rounded-lg  md:text-base sm:text-sm text-[12px] hover:bg-slate-950"  >Delivered</button> */}

        { order_status !== "ACCEPTED" && <button onClick={() => updateOrderStatus(id, "REJECTED")}  className="p-1 bg-slate-800 text-white rounded-lg  md:text-base sm:text-sm text-[12px] hover:bg-slate-950"  >reject</button>}
          
    </div>
</div>
  )
}

export default OwnerOrderCard