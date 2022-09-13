import React, { useState } from "react";
import CB from "../../assets/Images/CB.png";
import FaceBookIcon from "../../assets/Images/Facebook.png";
import InstaGram from "../../assets/Images/Insta.png";
import Twiterr from "../../assets/Images/Twite.png";
import Linkdin from "../../assets/Images/Linkdin.png";
import Google from "../../assets/Images/Google.png";
import Logo from "../../assets/Images/log.png";

export default function NavBar() {
	const [open, setOpen] = useState(false);

	if (open) {
		document.body.classList.add("overflow-y-hidden");
	} else {
		document.body.classList.remove("overflow-y-hidden");
	}

	return (
		<>
			<nav className='pt-10 sms:block hidden'>
				<div className='container mx-auto'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-20'>
							<a href='/'>
								<img src={Logo} alt='NavBarLogo' />
							</a>
							<ul className='flex items-center gap-4'>
								<li>
									<a
										href='/focus'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Focus
									</a>
								</li>
								<li>
									<a
										href='!#'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Strategy
									</a>
								</li>
								<li>
									<a
										href='/cases'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Cases
									</a>
								</li>
								<li>
									<a
										href='!#'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Reach
									</a>
								</li>
								<li>
									<a
										href='/clients'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Clients
									</a>
								</li>
							</ul>
						</div>
						<div className='sms:block hidden'>
							<ul className='flex gap-7 items-center'>
								<li>
									<a href='!#' className='text-[#9BA4B7]'>
										Learn about Us on
									</a>
								</li>
								<li>
									<a href='!#'>
										<img src={CB} alt='Icons' />
									</a>
								</li>
								<li>
									<a href='!#' className='hover:text-[#0B3AFF]'>
										<img src={FaceBookIcon} alt='FacebookIcon' />
									</a>
								</li>
								<li>
									<a href='!#'>
										<img src={InstaGram} alt='InstaIcon' />
									</a>
								</li>
								<li>
									<a href='!#'>
										<img src={Twiterr} alt='TwiterrIcon' />
									</a>
								</li>
								<li>
									<a href='!#'>
										<img src={Linkdin} alt='LinkdinIcon' />
									</a>
								</li>
								<li>
									<a href='!#'>
										<img src={Google} alt='GoogleIcon' />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Nav  */}

			<nav className='pt-10 sms:hidden block'>
				<div className='container mx-auto sm:px-0 px-3'>
					<div className='flex justify-between items-center'>
						<div>
							<a href='/'>
								<img src={Logo} alt='NavBarLogo' />
							</a>
						</div>

						<div className='z-50 cursor-pointer' onClick={() => setOpen(!open)}>
							{open ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
									/>
								</svg>
							)}
						</div>

						<div
							className={
								open
									? "fixed bg-white/90 h-screen top-0 right-0 transition-all ease-in-out duration-300 flex flex-col  justify-center w-1/2 z-40"
									: "fixed bg-white h-screen top-0 -right-full transition-all ease-in-out duration-300 flex flex-col justify-center  w-1/2 z-40"
							}
						>
							<ul className='flex flex-col gap-y-12 px-5'>
								<li>
									<a
										onClick={() => setOpen(false)}
										href='/focus'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Focus
									</a>
								</li>
								<li>
									<a
										onClick={() => setOpen(false)}
										href='!#'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Strategy
									</a>
								</li>
								<li>
									<a
										onClick={() => setOpen(false)}
										href='/cases'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Cases
									</a>
								</li>
								<li>
									<a
										onClick={() => setOpen(false)}
										href='!#'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Reach
									</a>
								</li>
								<li>
									<a
										onClick={() => setOpen(false)}
										href='/clients'
										className='text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#E7EBF4] hover:font-semibold hover:rounded-md'
									>
										Clients
									</a>
								</li>
							</ul>
							<div className='px-5 mt-10'>
								<ul className='flex gap-7 items-center flex-wrap'>
									<li>
										<a href='!#' className='text-[#9BA4B7]'>
											Learn about Us on
										</a>
									</li>
									<li>
										<a href='!#'>
											<img src={CB} alt='Icons' />
										</a>
									</li>
									<li>
										<a href='!#' className='hover:text-[#0B3AFF]'>
											<img src={FaceBookIcon} alt='FacebookIcon' />
										</a>
									</li>
									<li>
										<a href='!#'>
											<img src={InstaGram} alt='InstaIcon' />
										</a>
									</li>
									<li>
										<a href='!#'>
											<img src={Twiterr} alt='TwiterrIcon' />
										</a>
									</li>
									<li>
										<a href='!#'>
											<img src={Linkdin} alt='LinkdinIcon' />
										</a>
									</li>
									<li>
										<a href='!#'>
											<img src={Google} alt='GoogleIcon' />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
