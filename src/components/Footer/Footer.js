import React from 'react';
import img from '../../assets/footer.jpg'
import { AiOutlineCopyrightCircle,AiOutlineInstagram,AiFillTwitterCircle,AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='max-w-[1440px] m-auto mt-32 px-8 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='mt-10 lg:0' >
                  <img src={img}
                  alt="" srcset="" />  
                  <h1 className='text-lg text-gray-400'>A new way to make the payments easy, <br /> reliable and secure.</h1>
                </div>
                <div className='mt-10' >
                    <h1 className='text-xl text-white font-bold'>Usefull Links</h1>
                    <p className='text-lg text-gray-400'>Content</p>
                    <p className='text-lg text-gray-400'>How it Works</p>
                    <p className='text-lg text-gray-400'>Create</p>
                    <p className='text-lg text-gray-400'>Explore</p>
                    <p className='text-lg text-gray-400'>Terms & Services</p>
                </div>
                <div className='mt-10 lg:0' >
                    <h1 className='text-xl text-white font-bold'>Community</h1> 
                    <p className='text-lg text-gray-400'>Help Center</p>
                    <p className='text-lg text-gray-400'>Partners</p>
                    <p className='text-lg text-gray-400'>Suggestions</p>
                    <p className='text-lg text-gray-400'>Blog</p>
                    <p className='text-lg text-gray-400'>Newsletters</p>
                </div>
                <div  className='mt-10'>
                    <h1 className='text-xl text-white font-bold'>Partner</h1>
                    <p className='text-lg text-gray-400'>Our Partner</p>
                    <p className='text-lg text-gray-400'>Become a Partner</p>
                    
                </div>
            

            </div>
            <div className=' mt-4 border-t-[0.5px] flex flex-col lg:flex-row items-center lg:justify-between border-gray-400 '>
                <div className='pt-4  px-0 lg:px-4 flex '>
                    <h1 className='text-gray-400 px-4 ' > Copyright   </h1>
                
                    <AiOutlineCopyrightCircle className='text-gray-400 flex  '/>
                    <h1 className='text-gray-400 flex px-4 '> 2023 Orbido. All Rights Reserved.</h1>
                </div>
                <div className='flex  pt-4 px-0 lg:px-4'>
                
                  <AiOutlineInstagram size={30} color='white' className='mx-2'/>
                  <BsFacebook size={30} color='white' className='mx-2'/>
                  <AiFillTwitterCircle size={30} color='white' className='mx-2'/>
                  <AiFillLinkedin size={30} color='white' className='mx-2'/>

                </div>

            </div>
            
        </div>
    );
};

export default Footer;