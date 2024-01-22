import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import {useSelector} from 'react-redux';

export default function Header() {
    const [hidden, setHidden] = useState("max-h-0")
    const authStatus = useSelector((state) => state.auth.status)

    const handelclick = () => {
        const btn = document.querySelector("#showmenu");

        if(hidden != "max-h-40"){
            setHidden("max-h-40")
        }else{
            setHidden("max-h-0")
        }
    }

    useEffect(() => {
        setHidden("max-h-0")
    }, [])

    const ulclick = () => {
    setTimeout(() => {
        setHidden("max-h-0")
        }, 100);   
    }    

    const navItem = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "About",
            slug: "/about",
            active: true
        },
        // {
        //     name: "Upload",
        //     slug: "/upload",
        //     active: true
        // },
        {
            name: "Profile",
            slug: "/profile",
            active: authStatus,
        },
        
    ]

    return (
        <header className=" bg-white shadow sticky z-50 top-0 dark:bg-gray-800 text-white">
            <div className='w-full max-w-7xl mx-auto px-4'>
                <nav className="border-gray-200 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto ">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-12 dark:hidden" 
                                alt="Logo"
                            />
                            <img
                                src={logo2}
                                className="mr-3 h-12 hidden dark:block" 
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex items-center md:order-2">                       
                        {!authStatus && (
                            <Link
                                to="/login"
                                className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none"
                            >
                                Login
                            </Link>
                        )}
                        {authStatus && (
                            <Link
                                to="/logout"
                                className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none"
                            >
                                Logout
                            </Link>
                        )}
                        {!authStatus && (
                            <Link
                                to="/signup"
                                className=" hidden md:block text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Signup
                            </Link>
                        )}

            <div className="md:hidden flex items-center md:order-2 ml-2 mt-1">
                <button onClick={handelclick}
                    id="showmenu" class="text-3xl cursor-pointer " >
                    <div className="hover:cursor-pointer ">
                        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                    </div>
                </button>
            </div>        
                        </div>
                        <div
                            className={`md:!max-h-none md:!overflow-hidden w-full overflow-hidden md:flex md:items-center transition-all md:w-auto mobilemenu ${hidden}`}
                            id="mobile-menu-2"
                        >
                          <div className="text-sm md:flex-grow">
                            <ul onClick={ulclick} className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
    
            {navItem.map((item) => (
                item.active ? (
                    <li>
                    <NavLink to={item.slug}  key={item.slug}
                    className={({isActive}) => `block py-2 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                                    }
                    >{item.name}</NavLink>                               
                </li>
                ) : null

            ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    );
}

