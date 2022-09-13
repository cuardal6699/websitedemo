import React from "react";
import CB from "../../assets/Images/CB.png";
import FaceBookIcon from "../../assets/Images/Facebook.png";
import InstaGram from "../../assets/Images/Insta.png";
import Twiterr from "../../assets/Images/Twite.png";
import Linkdin from "../../assets/Images/Linkdin.png";
import Google from "../../assets/Images/Google.png";

function Footer() {
	return (
		<footer className='pt-44'>
			<div className='container mx-auto'>
				<div className='border-t border-[#9BA4B7] pt-10 pb-10 text-center'>
					<div className='flex justify-between md:flex-row flex-col'>
						<div>
							<p className='text-[#ADADAD]'>© 2022, excorp</p>
						</div>
						<div className='md:hidden mb-5 mt-5'>
							<a href='!#' className='text-[#9BA4B7]'>
								Learn about Us on
							</a>
						</div>
						<div>
							<ul className='flex gap-7 items-center justify-center'>
								<li className='hidden md:block'>
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
		</footer>
	);
}

export default Footer;
