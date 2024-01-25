import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Layout,Logout} from './components'
import {Home,About, Login, Signup, Profile, UserDetails, Passwordupdate} from './pages'
import { Provider } from 'react-redux'
import store from './store/store'
import Fileupload from './pages/Fileupload'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='logout' element={<Logout/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='upload' element={<Fileupload/>}/>
        <Route path='updateuser' element={<UserDetails/>}/>
        <Route path='passwordupdate' element={<Passwordupdate/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
