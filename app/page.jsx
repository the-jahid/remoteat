'use client'

import OwnerDashboard from "@/components/dashboard/OwnerDashboard";
import UserDashboard from "@/components/dashboard/UserDashboard";
import {  getUserInfo, getUserProfile } from "@/lib/utils";
import Link from "next/link";

export default function Home() {

  const user = JSON.parse(getUserProfile());

  
  return (
    <main>

      {user == null && <section className="flex min-h-[700px] h-[90vh]  w-full items-center justify-center bg-white px-8">
    <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
      <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">Healthy Food of your area's restaurant. 
</h1>
        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
        Bringing the taste of convenience to every corner. Introducing our revolutionary online food delivery system " Remote Eat" tailored for remote areas. Savor the flavor, because everyone deserves a delicious bite.

        </p>
        <div className="flex space-x-4">
          <Link href={'/login_signup'} >
              <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                Get Started
              </button>
          </Link>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent text-blue-600">
            Learn More
          </button>
        </div>
       
      </div>
      <div className="relative">  
        <img src="https://i.ibb.co/zRqPQw5/mae-mu-I7-A-p-HLc-QK8-unsplash.jpg"  className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="hero navigate ui"/>
      </div>
    </div>
  </section>}

      {/* <OwnerDashboard /> */}
      { user?.role == "STUDENT" && <UserDashboard />}
    </main>
  );
}




