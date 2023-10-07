import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  return (
    <div className='flex'>
      <button className="btn bg-pink-500 text-white" >Breaking News</button>
       <Marquee pauseOnHover ={true} speed={100}>
       <Link className='mr-12 no-underline text-black' to="/">I can be react component,multiple react component........</Link>
       <Link className='mr-12 no-underline text-black' to="/">I can be react component,multiple react component........</Link>
       <Link className='mr-12 no-underline text-black' to="/">I can be react component,multiple react component........</Link>
       <Link className='mr-12 no-underline text-black' to="/">I can be react component,multiple react component........</Link>
       <Link className='mr-12 no-underline text-black' to="/">I can be react component,multiple react component........</Link>


       </Marquee>
    </div>
  );
};

export default BreakingNews;