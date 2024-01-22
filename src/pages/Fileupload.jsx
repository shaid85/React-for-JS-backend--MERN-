import React, { useState } from 'react'
import { Container } from '../components'
import axios from 'axios'
import { useForm, Form } from 'react-hook-form'
import {Input,Button} from '../components';

function Fileupload() {
  const {register,handleSubmit,control,setValue} = useForm()
    // way-1 success ----
    // const [file, setFile] = useState()
    // const handleUpload = async (e) => {
    //     e.preventDefault()
    //   const formdata = new FormData()
    //   formdata.append("image", file)

    //  await axios.post("/api/v1/users/upload", formdata)
    // }


// ----- way-3 ---- works
    const onSubmit = async (data) => {
        try {
          console.log(data);
            const formData = new FormData()
            formData.append("image", data.image[0])
            data = { ...data, image: data.image[0].name };
  formData.append("alldata", JSON.stringify(data));
            const response = await axios.post("/api/v1/users/upload/", formData)


            if(response){
              console.log("file upload");             
            }
        } catch (error) {
          console.log("upload error");  
        }      
    }

    return (
      <Container>
        {/* way-1 success works */}
        {/* <form onSubmit={handleUpload}>
          <input type="file" onChange={(e)=> setFile(e.target.files[0])} />
          <button >Submit</button>
        </form>   */}

        {/* way-2 works */}
        {/* <Form 
          control={control}
          method='post'
          action='http://localhost:3000/api/v1/users/upload'
        >
          <input hidden type="file" {...register('image')} />
          <input type="file" onChange={(e)=> setValue('image', e.target.files[0])} />
          <button >Submit</button>
        </Form>  */}

{/* way-3  ---- works */}
        <form 
          onSubmit={handleSubmit(onSubmit)}        
        >
          <Input type="text" {...register('name')} />
          <Input type="text" {...register('phone')} />
          <Input type="file" {...register('image')} />
          <Button type='submit' >Create Account</Button>
        </form> 

      </Container>
    )
  }

export default Fileupload