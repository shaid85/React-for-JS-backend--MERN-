import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../store/authSlice';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = async () => {
        try {
            const response = await axios.post("/api/v1/users/logout/")
            if(response){
                toast.success('Logout successful')
                dispatch(logout())
                navigate("/login")
            }
        } catch (error) {
            console.log(error);
        }
    }
useEffect(() => {
    onLogout()
}, [])

    return (
        <>

        </>
      )
}

export default Logout