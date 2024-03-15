'use client'

import { salesSummaryitem } from "@/lib/constant";
import { useForm } from "react-hook-form";
import OwnerTable from "./Items/OwnerTable";

const Dashboard = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit= (data) => console.log(data);

  return (
    <section  className="space-y-5  bg-blue-500 ">
      <div className="flex flex-col bg-white rounded-md space-y-4 p-3  grow-0 " >
          <div className="flex justify-between shadow-md rounded-b-lg  px-5 py-2 flex-wrap  " >
              <h2 className="text-2xl font-semibold" >Sales Summary</h2>
              <form onSubmit={handleSubmit(onSubmit)} >

                <select>
                    <option>Last 7 days</option>
                    <option>Last 14 days</option>
                    <option>Last 1 month</option>
                    <option>Last 2 month</option>
                </select>
              </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  " >
              {
                salesSummaryitem.map((item) => <div key={item.id} className="bg-gradient-to-r from-amber-200 to-yellow-400 space-y-2 rounded-md shadow-md  font-semibold flex flex-col justify-center items-center py-2  " >
                    <div className="flex  items-center justify-center space-x-2" >
                    {item.icon}
                    <p className="text-xl" >{item.count}</p>
                    </div>
                    <h2 className="text-xl" >{item.name}</h2>
                </div> )
              }
          </div>

      </div>

      <div className=" w-full h-full grow bg-green-300  " >
        {/* <OwnerTable /> */}
        <h2>Hello world</h2>
      </div>
    </section>
  )
}

export default Dashboard;
