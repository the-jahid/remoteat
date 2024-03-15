import { GiKevlarVest } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { MdBreakfastDining } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { SiMixpanel } from "react-icons/si";


import { MdBorderAll } from "react-icons/md";
export const salesSummaryitem = [
    {
        id:1,
        icon:<GiKevlarVest size={40} />,
        name:'Total Orders',
        count:255
    },
    {
        id:2,
        icon:<MdDeliveryDining size={40} />,
        name:'Total Delivery',
        count:240
    },
    {
        id:3,
        icon:<MdOutlinePendingActions size={40} />,
        name:'Pending Orders',
        count:255
    },
    {
        id:4,
        icon:<FaHandsHoldingCircle size={40} />,
        name:'On Hold',
        count:62
    }
]


export const menucategory = [
    {
        id:1,
        title:'All',
        icon:<MdBorderAll size={20} />
    },
    {
        id:2,
        title:'Break Fast',
        icon:<MdBreakfastDining size={20} />
    },
    {
        id:3,
        title:'Lunch',
        icon:<MdOutlineLunchDining size={20} />
    },
    {
        id:4,
        title:'Dinner',
        icon:<MdDinnerDining size={20} />
    },
    {
        id:5,
        title:'Combo',
        icon:<SiMixpanel size={25} />
    },
]


export const showShopItems = [
    {
        id:1,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:2,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:3,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:4,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:5,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:6,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:7,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:8,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:9,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
    {
        id:10,
        title:'Kacchi biriyani',
        quantity:4,
        status:'available',
        imagelink:'',
    },
]

export const apiurl = process.env.NEXT_PUBLIC_APP_SERVER_API

















