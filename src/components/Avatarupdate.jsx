import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import {Input,Button} from '../components';
import axios from 'axios';
import toast from 'react-hot-toast';


function Avatarupdate() {
    const [error, setError] = useState('') 
    const [loading, setLoading] = useState(false)
    const {register,handleSubmit} = useForm()

    const userUpdate = async (data) => {
        setError("")
          try {
            setLoading(true);
            const formData = new FormData()
            formData.append("avatar", data.avatar[0])
            const session = await axios.patch("/api/v1/users/updateavatar/", formData)
            if(session){
              toast.success('Update successful')
              window.location.reload(false);    
            }
          } catch (error) {
            setError(error.message)
          } finally {
            setLoading(false);
          }
      }
  return (
    <div className='md:w-80 py-5 text-black'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    
                <h2 className="text-center text-2xl font-bold leading-tight">{loading ? 'loading...' : 'Update avatar image'}</h2>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(userUpdate)} className='mt-8'>
                <Input label= "Avater Image"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("avatar" , {
                    required: true
                })}  
                />
                <Button type='submit' >Update Avatar</Button>
            </form>
        </div>
    </div>
  )
}

export default Avatarupdate