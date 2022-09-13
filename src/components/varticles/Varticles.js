import React from "react";
import conus from "../../assets/Images/conus 01.png";
import spring from "../../assets/Images/spring 01.png";
import ring from "../../assets/Images/ring 01.png";
import arc from "../../assets/Images/arc 01.png";
import cube from "../../assets/Images/cube 01.png";
import polyhedron from "../../assets/Images/polyhedron 01.png";

function Varticles() {
	return (
		<section className='py-36'>
			<div className='container mx-auto'>
				<div className='text-center '>
					<h2 className='text-black font-bold md:text-6xl text-4xl inline-block lg:w-[60%] mx-auto'>
						Over the years we have 🤝 with various business verticles
					</h2>
					<p className='font-mono mt-7'>
						View our Cases by choosing the right sector
					</p>
				</div>

				<div className='grid mt-24 gap-4 sm:grid-cols-3 lg:grid-cols-6 grid-cols-1 sm:px-0 px-5'>
					<div className='text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer'>
						<div className='transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6'>
							<p className='text-black font-mono mb-1'>08</p>
							<h4 className='text-black font-semibold text-xl'>
								Digitalization
							</h4>
						</div>
						<div className='transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0'>
							<a
								href='!#'
								className='inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md'
							>
								View Cases
							</a>
						</div>
						<img
							src={conus}
							alt='conusImg'
							className='inline-block transition-all ease-in-out duration-300 group-hover:rotate-45'
						/>
					</div>
					<div className='text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer'>
						<div className='transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6'>
							<p className='text-black font-mono mb-1'>08</p>
							<h4 className='text-black font-semibold text-xl mb-3'>Portals</h4>
						</div>
						<div className='transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0'>
							<a
								href='!#'
								className='inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md'
							>
								View Cases
							</a>
						</div>
						<img
							src={spring}
							alt='conusImg'
							className='inline-block transition-all ease-in-out duration-300 group-hover:rotate-45'
						/>
					</div>
					<div className='text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer'>
						<div className='transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6'>
							<p className='text-black font-mono mb-1'>08</p>
							<h4 className='text-black font-semibold text-xl mb-3'>
								Websites
							</h4>
						</div>
						<div className='transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0'>
							<a
								href='!#'
								className='inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md'
							>
								View Cases
							</a>
						</div>
						<img
							src={ring}
							alt='conusImg'
							className='inline-block transition-all ease-in-out duration-300 group-hover:rotate-45'
						/>
					</div>
					<div className='text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer'>
						<div className='transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6'>
							<p className='text-black font-mono mb-1'>08</p>
							<h4 className='text-black font-semibold text-xl mb-3'>Apps</h4>
						</div>
						<div className='transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0'>
							<a
								href='!#'
								className='inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md'
							>
								View Cases
							</a>
						</div>
						<img
							src={arc}
							alt='conusImg'
							className='inline-block transition-all ease-in-out duration-300 group-hover:rotate-45'
						/>
					</div>
					<div className='text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer'>
						<div className='transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6'>
							<p className='text-black font-mono mb-1'>08</p>
							<h4 className='text-black font-semibold text-xl mb-3'>
								Marketing
							</h4>
						</div>
						<div className='transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0'>
							<a
								href='!#'
								className='inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md'
							>
								View Cases
							</a>
						</div>
						<img
							src={cube}
							alt='conusImg'
							className='inline-block transition-all ease-in-out duration-300 group-hover:rotate-45'
						/>
					</div>
					<div className='text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer'>
						<div className='transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6'>
							<p className='text-black font-mono mb-1'>08</p>
							<h4 className='text-black font-semibold text-xl mb-3'>
								Creative
							</h4>
						</div>
						<div className='transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0'>
							<a
								href='!#'
								className='inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md'
							>
								View Cases
							</a>
						</div>
						<img
							src={polyhedron}
							alt='conusImg'
							className='inline-block transition-all ease-in-out duration-300 group-hover:rotate-45'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Varticles;
