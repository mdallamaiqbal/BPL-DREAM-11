import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <div className='max-w-7xl mx-auto'>
            <div className='bg-[url("/bg-shadow.png")] p-5 md:py-20 md:px-56  bg-cover bg-no-repeat rounded-3xl text-center'>
               <h3 className='text-xl md:text-3xl font-bold'>Subscribe to our Newsletter</h3>
               <p className='text-gray-500 mt-2'>Get the latest updates and news right in your inbox!</p>
               <div className='mt-4'>
               <input type="text" placeholder="Enter your email" className="input " />
               <button className='btn ml-3 bg-[#E7FE29]'>Subscribe</button>
               </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;