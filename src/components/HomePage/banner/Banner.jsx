import React from 'react';
import bannerImg from '../../../assets/banner-main.png'
const Banner = () => {
    return (
        <div className='bg-[url("/banner.png")] px-40 py-16 bg-cover bg-no-repeat text-center'>
           <img src={bannerImg} className='w-64 mx-auto'  alt="" />
           <h2 className='font-bold my-4 text-xl md:text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
           <h3 className='font-medium text-[#FFFFFF] text-lg md:text-2xl'>Beyond Boundaries Beyond Limits</h3>
           <button className='btn bg-[#E7FE29] mt-6 border border-[#E7FE29]'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;Banner