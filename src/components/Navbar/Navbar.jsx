import React from 'react';
import dollarImg from '../../assets/Currency.png'
import logoImg from '../../assets/logo.png'
const Navbar = ({coin}) => {
    return (
<div className="navbar container mx-auto bg-base-100 sticky top-0 z-50 shadow-sm mb-5">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={logoImg} className='w-16' alt="" /></a>
  </div>
  <div className="flex-none">
    <button className="flex gap-2 justify-center items-center font-bold text-xl">
    {coin} Coins
     <img src={dollarImg} alt="" />
    </button>
  </div>
</div>
    );
};

export default Navbar;