import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { NavBar6 } from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./store";



const poppins = Poppins({ subsets: ["latin"], weight:'400' });

export const metadata = {
  title: "remoteat",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
 
   <ReduxProvider>
      <html lang="en">
      
      <body className={poppins.className}>
     
      
          <NavBar6 />
          
           {children}
       
        
          <Toaster position="bottom-right"
          reverseOrder={false} />
        </body>
        
    </html>
   </ReduxProvider>

  );
}
