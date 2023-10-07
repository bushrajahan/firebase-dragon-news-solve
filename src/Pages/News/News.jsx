import React from 'react';
import Header from '../../Shared/Navbar/Header/Header';
import { useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const News = () => {
  const {id} = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-2">
         <div className="col-span-2">

          <h2 className='text-5xl'> {id}</h2>
         </div>
      </div>
    </div>
  );
};

export default News;