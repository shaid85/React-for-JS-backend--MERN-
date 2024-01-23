import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {Header,Footer} from './index'
import {useDispatch} from 'react-redux'
import {login,logout} from '../store/authSlice';
import axios from 'axios';
import { Toaster } from "react-hot-toast";

function Layout() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const getuserDetails = async () => {
     try {
        const response = await axios.get("https://js-backend-api.onrender.com/api/v1/users/currentuser/")
        if(response){
          const userData = response.data.data
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
     } catch (error) {
        console.log(error);
     } finally {
        setLoading(false);
     }
  }
  
useEffect(() => {
  getuserDetails()

}, [])

return !loading ? (
  <>
      <Header/>
        <div className='w-full dark:bg-gray-800 dark:text-white min-h-screen relative'>
            <Outlet/>
        </div>
        <Toaster />
      <Footer/>
  </>
) : "Loading...."
}

export default Layout