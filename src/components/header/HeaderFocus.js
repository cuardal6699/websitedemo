import React from "react";
import Boy from "../../assets/Images/Image 41.png";
import Pen from "../../assets/Images/Image 42.png";
import Emoji from "../../assets/Images/Image 43.png";
import Group from "../../assets/Images/Group 4572.png";

function HeaderFocus() {
  return (
    <header className='py-36'>
    <div className='container mx-auto'>
        <div className='text-center '>
            <h2 className='text-black font-bold md:text-6xl text-4xl inline-block lg:w-[60%] mx-auto'>
                When <img src={Boy} alt='BoyLogo' className='inline-block' /> is
                infused with{" "}
                <img src={Pen} alt='BoyLogo' className='inline-block' /> , you get a{" "}
                <img src={Emoji} alt='BoyLogo' className='inline-block' /> product
                to showcase
            </h2>
            <p className='font-mono md:w-1/3 mx-auto mt-7'>
						Most bookkeeping software is accurate, but hard to use. We make the
						opposite trade-off, and hope you don’t get audited.
					</p>
        </div>
    </div>
</header>
  )
}

export default HeaderFocus
