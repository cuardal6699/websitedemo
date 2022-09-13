import React from "react";
import Brand1 from "../assets/Images/c1.png";
import Brand2 from "../assets/Images/c2.png";
import Brand3 from "../assets/Images/c3.png";
import Brand4 from "../assets/Images/c4.png";
import Brand5 from "../assets/Images/c5.png";
import Brand6 from "../assets/Images/c6.png";

function Brand() {
	return (
		<section className='pt-9'>
			<div className='container mx-auto'>
				<div className='grid sm:grid-cols-3  lg:grid-cols-6 grid-cols-2'>
					<div>
						<img
							src={Brand1}
							alt='BrandImage'
							className='grayscale transition-all ease-in-out duration-300 hover:grayscale-0 cursor-pointer'
						/>
					</div>
					<div>
						<img
							src={Brand2}
							alt='BrandImage'
							className='grayscale transition-all ease-in-out duration-300 hover:grayscale-0 cursor-pointer'
						/>
					</div>
					<div>
						<img
							src={Brand3}
							alt='BrandImage'
							className='grayscale transition-all ease-in-out duration-300 hover:grayscale-0 cursor-pointer'
						/>
					</div>
					<div>
						<img
							src={Brand4}
							alt='BrandImage'
							className='grayscale transition-all ease-in-out duration-300 hover:grayscale-0 cursor-pointer'
						/>
					</div>
					<div>
						<img
							src={Brand5}
							alt='BrandImage'
							className='grayscale transition-all ease-in-out duration-300 hover:grayscale-0 cursor-pointer'
						/>
					</div>
					<div>
						<img
							src={Brand6}
							alt='BrandImage'
							className='grayscale transition-all ease-in-out duration-300 hover:grayscale-0 cursor-pointer'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Brand;
