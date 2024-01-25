import React, { useState } from 'react'
import { Container,Avatarupdate,Coverupdate } from '../components'
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [show, setShow] = useState(false)
    const [showcover, setShowcover] = useState(false)
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)
console.log(userData);
    const DetailsPage = (e) => {
        navigate("/updateuser")
    }
    const PasswordPage = (e) => {
        navigate("/passwordupdate")
    }

    const showAvatar =() =>  {
        setShow(true)
    }
    const showCover =() =>  {
        setShowcover(true)
    }
  return (
    <>
    <div className="w-full h-screen -z-10 bg-no-repeat absolute bg-cover" style={{
                backgroundImage: `url('${userData ? userData.coverImage : ""}')`,
            }}>
        
    </div>
    <Container>
<button onClick={showCover} className=' text-white absolute top-5 right-4'>
<svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
</button>
    <div className={showcover ? "block" : "hidden"}>
        <Coverupdate />
    </div>
        <div className="md:flex md:flex-wrap">
            <div className=" md:w-1/4">
                <img src={userData ? userData.avatar : ""} alt="" />
                <button onClick={showAvatar} 
                className=' rounded-md bg-slate-800 py-3 px-8 text-white mt-3 hover:bg-slate-600'
                >Change image</button>
                <div className={show ? "block" : "hidden"}>
                    <Avatarupdate />
                </div>
            </div>
            <div className=" w-3/4 px-6 text-xl">
                <h2 className=' text-2xl font-medium text-slate-400'>
                    User Details
                </h2>
                <p className='text-slate-400'>Name: {userData ? userData.fullName : ""}</p>
                <p className='text-slate-400'>Email: {userData ? userData.email : ""}</p>
                <div className=" h-3"></div>
                <button onClick={DetailsPage} className='bg-slate-900 hover:bg-slate-700 text-white font-medium h-12 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400'>Change User Details</button>                
                <div className=" h-3"></div>
                <button onClick={PasswordPage} className='bg-slate-900 hover:bg-slate-700 text-white font-medium h-12 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400'>Change Password</button>
            </div>
        </div>
    </Container>
    </>

  )
}

export default Profile