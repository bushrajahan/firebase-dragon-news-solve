import React from 'react';
import Header from '../../Shared/Navbar/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RighSideNav from '../../Shared/RightSideNav/RighSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
  const news = useLoaderData();
  console.log(news)
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div>
        <LeftSideNav></LeftSideNav>

      </div>
      <div className='border'>
        {
          news?.map(aNews =><NewsCard key={aNews.id}
           news = {aNews}
            
          ></NewsCard>
        )
        }

      </div>
      <div className='border'>
      <RighSideNav></RighSideNav>

      </div>
    </div>
    </div>
  );
};

export default Home;