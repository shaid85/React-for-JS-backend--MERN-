import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {Input,Button} from '../components';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux';

function UserDetails() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const userData = useSelector(state => state.auth.userData)
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm({
        defaultValues: {
            fullName: userData?.fullName || '',
            email: userData?.email || '',
        }
    })
  
    const userUpdate = async (data) => {
      setError("")
        try {
          setLoading(true);
          const session = await axios.patch("/api/v1/users/updatuser/", data)
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
  
          <h2 className="text-center text-2xl font-bold leading-tight">{loading ? 'loading...' : 'Update user details'}</h2>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(userUpdate)} className='mt-8'>
            <Input 
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("fullName" , {
                    required: true
                })}
            />
            <Input label="Email: " 
              type="email"
              placeholder="Type your email..."
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                }
              })}
            />            
              <Button type='submit' >Update</Button>
            </form>
        </div>
      </div>
    )
}

export default UserDetails