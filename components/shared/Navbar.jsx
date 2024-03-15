'use client'

import { getUserProfile, signOut } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const NavBar6 = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const user = JSON.parse(getUserProfile());

    

    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between bg-white px-4 py-2 text-black shadow-md sticky top-0 z-20 ">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <Image src={'/RELogo.png'}  width={200} height={200} alt='nav_logo' />
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <Link href={'/'} className="group flex  cursor-pointer flex-col">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        { user?.role == "OWNER" && <Link href={'/dashboard'} className="group flex  cursor-pointer flex-col">
            Dashboard<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>}
          
         {
          user == null ?  <Link href={'/login_signup'} className="group flex  cursor-pointer flex-col shadow-md px-4 py-2 justify-center items-center rounded-md">
          Login/Signup<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </Link> : <button className='bg-blue-200 p-2 rounded-md' onClick={() => signOut()} >Signout</button>
         }
         
        </ul>
        
        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-white  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base   shadow-md px-4 py-2">
              <Link href={'/'} className="group flex  cursor-pointer flex-col">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
      { user?.role == "OWNER" &&<Link href={'/dashboard'} className="group flex  cursor-pointer flex-col">
        Dashboard<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>}

          
          
          {
          user == null ?  <Link href={'/login_signup'} className="group flex  cursor-pointer flex-col shadow-md px-4 py-2 justify-center items-center rounded-md">
          Login/Signup<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
           </Link> : <button className='bg-blue-200 p-2 rounded-md' onClick={() => signOut()} >Signout</button>
         }
         
            </ul>
          )}
        </div>
</nav>
  

    );
};



