import React from 'react'
import { Container } from '../components'
import {useSelector} from 'react-redux';

function Profile() {
    const userData = useSelector(state => state.auth.userData)
    
  return (
    <>
    <div className="w-full h-screen -z-10 bg-no-repeat absolute bg-cover" style={{
                backgroundImage: `url('${userData ? userData.coverImage : ""}')`,
            }}>
        
    </div>
    <Container>
        <div className="flex flex-wrap">
            <div className=" w-1/4">
                <img src={userData ? userData.avatar : ""} alt="" />
            </div>
            <div className=" w-3/4 px-6 text-xl">
                <h2 className=' text-2xl font-medium text-slate-400'>
                    User Details
                </h2>
                <p className='text-slate-400'>Name: {userData ? userData.fullName : ""}</p>
                <p className='text-slate-400'>Email: {userData ? userData.email : ""}</p>
                <div className=" h-3"></div>
                <button className='bg-slate-900 hover:bg-slate-700 text-white font-medium h-12 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400'>Change User Details</button>
                <div className=" h-3"></div>
                <button className='bg-slate-900 hover:bg-slate-700 text-white font-medium h-12 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400'>Change Password</button>
            </div>
        </div>
    </Container>
    </>

  )
}

export default Profile