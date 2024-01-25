import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {Input,Button} from '../components';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux';

function Passwordupdate() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const userData = useSelector(state => state.auth.userData)
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm()
  
    const passwordUpdate = async (data) => {
      setError("")
        try {
          setLoading(true);
          const session = await axios.post("/api/v1/users/updatepassword/", data)
          if(session){
            toast.success('Update successful')
            navigate("/profile")            
          }
        } catch (error) {
          setError(error.message)
        } finally {
          setLoading(false);
        }
    }
      
    return (
      <div
      className='flex items-center justify-center w-full text-black mt-12'
      >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
  
          <h2 className="text-center text-2xl font-bold leading-tight">{loading ? 'loading...' : 'Update Password'}</h2>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(passwordUpdate)} className='mt-8'>
<div className="w-full flex relative">
            <Input label="Old password: " 
              type="text"
              placeholder="Enter your old password..."
              {...register("oldPassword", {
                required: true
              })}
            />

</div>           
<div className="w-full flex relative">
            <Input label="New password: " 
              type="text"
              placeholder="Enter your password..."
              {...register("newPassword", {
                required: true
              })}
            />

</div>           
              <Button type='submit' >Update</Button>
            </form>
        </div>
      </div>
    )
}

export default Passwordupdate