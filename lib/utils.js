
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";


export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const uploadImage = async (file) => {
  const formData = new FormData();
  
  formData.append("image", file);

  try {
    // i will secure this key in next time 
    const response = await axios.post("https://api.imgbb.com/1/upload?key=3a6f58b192ee31f623a3d7c3dec31ec6", formData);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error.response.data.status_txt}`);
  }
};

export const getUserProfile = () => {
  if (typeof window !== 'undefined') {
      const userProfile = localStorage.getItem('userinfo');
      return userProfile;
  }
  return null;
}

export const signOut = () => {
  if (typeof window !== 'undefined') {
      localStorage.removeItem('jwtToken'); // remove jwt token from local storage
      localStorage.removeItem('userinfo'); // remove user profile from local storage
      window.location.href = '/'; // redirect to the home page
  }
}




