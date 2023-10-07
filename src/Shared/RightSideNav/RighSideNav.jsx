import React from 'react';
import {  FaFacebook, FaGithub, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'


import { Link } from 'react-router-dom';
const RighSideNav = () => {
  return (
      <div>
              <div className='p-4 space-y-3 mb-6'>
      <h2 className='text-3xl'>Login with</h2>
      <button className="btn btn-outline w-full">
        <FaGoogle></FaGoogle>
         Google
          </button>
            <button className="btn btn-outline w-full">
        <FaGithub></FaGithub>
           Github
         </button>
    </div>
      < div className='p-4 space-y-3 mb-6'>
         <h2 className='text-3xl'>Find Us On</h2>
          
          <Link to=" " className='no-underline text-lg flex items-center border-x shadow-lg rounded-t-lg text-black'>
          <FaFacebook className='mr-2 '></FaFacebook>
          Facebook
         </Link>
         <Link to=" " className='no-underline text-lg flex items-center border shadow-lg rounded-t-lg text-black'>
          <FaWhatsapp className='mr-2'></FaWhatsapp>
          whatsApp
         </Link>
         <Link to=" " className='no-underline text-lg flex items-center border shadow-lg rounded-t-lg text-black'>
          <FaInstagram className='mr-2'></FaInstagram>
          Instagram
         </Link>
      </div>
  
      < div className='p-4 space-y-3 mb-6'>
         <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
      </div>
      </div>
  );
};

export default RighSideNav;