import Enterdetails from "./Enterdetails"
import MakeCombo from "./MakeCombo"

const SidebarAccordion = () => {
  return (


    <div id="accordion-collapse" data-accordion="collapse">

      <h2 id="accordion-collapse-heading-3">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
          <span>Add New Item</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-3" className="hidden space-y-4 " aria-labelledby="accordion-collapse-heading-3">


        <Enterdetails />
        <MakeCombo />


      </div>
    </div>


  )
}

export default SidebarAccordion