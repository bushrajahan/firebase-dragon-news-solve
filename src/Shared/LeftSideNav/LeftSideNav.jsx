import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftSideNav = () => {
  const [catagories,setCatagories] = useState([])
  useEffect(()=>{
    fetch('/data/categories.json')
    .then(res => res.json())
    .then(data => setCatagories(data))
  },[])
    console.log(catagories)

  return (
    <div>
       {
        catagories?.map((catagory)=>
           <NavLink key={catagory.id} to={`catagory/${catagory.id}`}
            className='text-black block no-underline p-4' >{catagory.name}</NavLink>
        )
       }
    </div>
  );
};

export default LeftSideNav;