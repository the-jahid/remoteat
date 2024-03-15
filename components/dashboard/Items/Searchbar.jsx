import { TfiSearch } from "react-icons/tfi";

const Searchbar = () => {
  return (
    <div className="flex items-center space-x-2 bg-slate-100 p-1 border-0 rounded-md px-3 w-full" >
        <TfiSearch size={25} color="#00D68D" />
        <input type="search" placeholder="Search Here" className="outline-none w-full bg-transparent border-0 focus:border-none " />
    </div>
  )
}

export default Searchbar