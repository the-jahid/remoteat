import { GrNotification } from "react-icons/gr";
import { TbMessageMinus } from "react-icons/tb";
const BarItems = () => {
  return (
    <div className="flex items-center space-x-5" >
       
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-green-300 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <GrNotification size={25}  color="black" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-900 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
            </button>
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-green-300 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <TbMessageMinus size={25}  color="black" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-900 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
            </button>

    </div>
  )
}

export default BarItems