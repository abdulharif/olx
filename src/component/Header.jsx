import React from 'react';
 
import OlxLogo from '../assets/OlxLogo';
import Search from '../assets/Search';
import Arrow from '../assets/Arrow';
import SellButton from '../assets/SellButton';
// import SellButtonPlus from '../assets/SellButtonPlus';
import '../css/Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> <Link className='span' to="Logout">Logout</Link> </span>
         
        </div>
        <div className="loginPage">
          <span ><Link className='spans' to="Rigster">REGISTER</Link></span>
         
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            {/* <SellButtonPlus></SellButtonPlus> */}
           <span ><Link className='span' to='/Create'>SALE</Link></span> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
