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

  // const getuserDetails = async () => {
  //    try {
  //       const response = await axios.get("/api/v1/users/currentuser/")
  //       if(response){
  //         const userData = response.data.data
  //         dispatch(login({userData}))
  //       }else{
  //         dispatch(logout())
  //       }
  //    } catch (error) {
  //       console.log(error);
  //    } finally {
  //       setLoading(false);
  //    }
  // }
  
useEffect(() => {
  axios.get("/api/v1/users/currentuser/")
    .then((response) => {
      const userData = response.data.data
      console.log(userData);
      dispatch(login({userData}))
    }).catch((error) => {
      console.log(error);
      dispatch(logout())
    }).finally(
      setLoading(false)
    )

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