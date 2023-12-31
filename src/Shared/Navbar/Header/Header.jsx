import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
moment().format();
const Header = () => {
  return (
    <div>
     <img src={logo} alt="" />
     <p>Journalism Without Fear or Favour</p>
     <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;