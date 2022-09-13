import React from 'react'
import brain from "../../assets/Images/brain.png";
import CB from "../../assets/Images/CB.png";
import FaceBookIcon from "../../assets/Images/Facebook.png";
import InstaGram from "../../assets/Images/Insta.png";
import Twitter from "../../assets/Images/Twite.png";
import Linkdin from "../../assets/Images/Linkdin.png";
import Google from "../../assets/Images/Google.png";

function Team() {
  return (
    <section className='py-32'>
        			<div className='container mx-auto flex '>
				<div className='text-center mx-auto items-center'>
					<img className='mx-auto' src={brain}/>
				</div>
                </div>
        
    <div className='container mx-auto px-12'>
    <div className='grid mt-16 gap-4 sm:grid-cols-4 lg:grid-cols-4 grid-cols-1 sm:px-0 px-5'>

        {/* Card Start */}
        
					<div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
							<p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
							<h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
								Nafi
							</h4>
                            <p className='font-mono text-[#808591] text-[14px]'>Co-founder - CEO</p>
                            <div className='pt-2'>
                            <ul className='flex gap-4 items-center justify-center'>
								<li>
									<a href='!#'>
										<img src={Twitter} alt='Icons' />
									</a>
								</li>
								<li>
									<a href='!#' className='hover:text-[#0B3AFF]'>
										<img src={Linkdin} alt='FacebookIcon' />
									</a>
								</li>
								<li>
									<a href='!#'>
										<img src={CB} alt='InstaIcon' />
									</a>
								</li>
                                </ul>
                            </div>
					</div>

            {/* Card End */}

            <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                        Mathiu
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Co-founder - COO</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#' className='hover:text-[#0B3AFF]'>
                                    <img src={Linkdin} alt='FacebookIcon' />
                                </a>
                            </li>
                            <li>
                                <a href='!#'>
                                    <img src={CB} alt='InstaIcon' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>

                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                        Siyah
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Chief Growth Officer</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Twitter} alt='Icons' />
                                </a>
                            </li>
                            <li>
                                <a href='!#' className='hover:text-[#0B3AFF]'>
                                    <img src={Linkdin} alt='FacebookIcon' />
                                </a>
                            </li>
                            <li>
                                <a href='!#'>
                                    <img src={CB} alt='InstaIcon' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>

                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                            Haneen
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Chief Technology Officer</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#' className='hover:text-[#0B3AFF]'>
                                    <img src={Linkdin} alt='FacebookIcon' />
                                </a>
                            </li>
                            <li>
                                <a href='!#'>
                                    <img src={CB} alt='InstaIcon' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>


                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                        Fathi
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Head of Products</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Linkdin} alt='InstaIcon' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>



                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                        Ela
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Tech Lead</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Linkdin} alt='Icons' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>



                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                            Maju
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>DevOps</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Linkdin} alt='Icons' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>



                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                            Eamaan
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Developer</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Linkdin} alt='Icons' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>



                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                        Altho
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Co-founder - CEO</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Linkdin} alt='Icons' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>

                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                        Shai
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Co-founder - CEO</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Linkdin} alt='Icons' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>

                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                        Maiz
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Co-founder - CEO</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Linkdin} alt='Icons' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>

                <div className='text-center px-2 py-2 group rounded-xl h-[300px]'>
						
                        <p className='inline-block w-[183px] h-[183px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-full'>01</p>
                        <h4 className='text-black font-semibold text-xl pt-2 text-[16px] font-plusm'>
                        Wafir
                        </h4>
                        <p className='font-mono text-[#808591] text-[14px]'>Consulting</p>
                        <div className='pt-2'>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>
                                <a href='!#'>
                                    <img src={Linkdin} alt='Icons' />
                                </a>
                            </li>
                            </ul>
                        </div>
                </div>
                    </div>
                    </div>
        </section>
  )
}

export default Team
