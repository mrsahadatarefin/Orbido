import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
const NavBar = () => {
    const [nav,setNav] = useState(false) 

    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "About Us",
        },
        {
          id: 3,
          link: "Features",
        },
        {
          id: 4,
          link: "Solution",
        },
        
      ];
  return (
    <div className=" px-4 bg-black flex justify-between items-center w-full h-20 text-white sticky 
     top-0 ">
      <div className="mt-5">
        
        <img src={logo} alt="logo" className="mt-8"/>
      </div>
      <ul className=" hidden md:flex">
        {links.map(({link,id}) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
            key={id} link={link}
          >
            
            <Link >{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
       {
        nav? <FaTimes size={30} /> : <FaBars size={30}/>
       }

       {nav && (
    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
   {links.map(({link,id}) => (
    <li
    className="px-4 cursor-pointer capitalize py-6 text-4xl"
      key={id}
    >
    <Link onClick={()=> setNav(!nav)}  > {link}</Link>
    </li>
  ))}
  
  
 
 </ul>
       ) }
      
      </div>
    </div>
  );
};

export default NavBar;
