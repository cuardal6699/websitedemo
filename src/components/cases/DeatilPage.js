import React from 'react'
import HeaderNavFocus from "../headersNav/headerNavFocus";
import Group from "../../assets/Images/b22.jpg";

function DeatilPage() {
    return (
        <header className='py-36'>
            <div className='container mx-auto'>
                <div className='pb-[26px]'>
                    <span>Cases <span>/ 00021</span></span>
                </div>
                <div className='text-left mr-[500px] lg:w-[60%] md:w-[90%]'>
                    <h2 className='text-black font-bold lg:text-[44px] md:text-[20px] inline-block mx-auto '>
                        Design and Development of Male’ City Council Community Digital Portal and Internal System Automation
                    </h2>
                    <h2 className='absolute inline-block mx-auto px-[20px] py-2 rounded-[5px] bg-[#0B3AFF] ml-[460px] text-white cursor-pointer hover:bg-opacity-90  '>
                        View Online
                    </h2>
                </div>

                <div className=' mt-[70px] h-[1330px] rounded-[42px] drop-shadow-md bg-white '>
                    <div className=' grid mt-24 gap-10 sm:grid-cols-3 lg:grid-cols-4 grid-cols-1 sm:px-0 px-5 border-b-2 border-white '>


                        <div className='text-left cursor-pointer transition-all ease-in-out duration-100 hover:text-[#0B3AFF] pb-6 hover:border-b-2 border-[#0B3AFF] lg:mt-[72px] lg:ml-[112px] '>
                            <div>

                                <h4 className='font-plusessb text-xl '>
                                    Client
                                </h4>
                                <p className='font-mono mb-1 mt-6 '>MALE’ CITY COUNCIL</p>
                            </div>
                        </div>

                        <div className='text-left cursor-pointer transition-all ease-in-out duration-100 hover:text-[#0B3AFF] pb-6 hover:border-b-2 border-[#0B3AFF] mt-[72px] '>
                            <div className=''>

                                <h4 className='font-plusessb text-xl'>
                                    Date
                                </h4>
                                <p className='font-mono mb-1 mt-6 '>2022</p>
                            </div>
                        </div>

                        <div className='text-left cursor-pointer transition-all ease-in-out duration-100 hover:text-[#0B3AFF] pb-6 hover:border-b-2 border-[#0B3AFF] mt-[72px] col-span-2 mr-[144px]  '>
                            <div className=''>

                                <h4 className='font-plusessb text-xl'>
                                    Scope
                                </h4>
                                <p className='font-mono text-[14px] mb-1 mt-6 '>Data gathering, Data Analysis, Digital Framework for e-government, UI/UX, Development, Integrations.</p>
                            </div>
                        </div>



                    </div>
                    <div className='mt-12 mx-auto w-[85%]'>
                        <p className='text-[18px]'>
                            Maavehi Portal - is a truly game changer for City Council Administrations and Public Services.
                            Designed and developed based on the ideas and led by the examples of digital frameworks followed by leading countries,
                            The portal when fully implemented will enable 90% of council services to go online. One of the most important aspect of this portal is
                            amount of time spent on analysing years of paperworks within the council to fully understand how we can cut short and convert it into digital
                            forms with minimal information to be filled by the applicants. In the coming days we will be adding more features such as e-permits which will eliminate
                            traditional permits and wastage of paper, docs verification which will enable verification of the authenticity of permits issued by the council.
                            City works Map which will help citizens to get latest updates on roads closed and road works within the city. As we move forward,
                            we are also testing on council management portal, helping more tech enabled governance. If you’re applying for a Service on Maavehi Portal, you will need to
                            Sign Up and get Verified. You can request for either Identity Video Verification or you may choose to visit any of Male’ City offices to get Verified.
                            This is only required Once. more than a million drawings and various registries related to Male’ residents will be added to the portal’s
                            database and shared with related parties.
                        </p>
                    </div>

                    <div className='grid grid-rows-3 grid-flow-col gap-4 w-[1080px] mx-auto mt-20 '>
                        <div class="row-span-3 w-[250px]  ">
                            <img
                                src={Group}
                                alt='conusImg'
                                className='w-[250px] rounded-[20px] '
                            />
                                                    <img
                            src={Group}
                            alt='conusImg'
                            className='w-[250px] rounded-[20px] mt-8 '
                        />
                        </div>
                        <div class="row-span-2 col-span-2  w-[530px]">                        
                        <img
                            src={Group}
                            alt='conusImg'
                            className='inline-block w-[530px] rounded-[20px] '
                        />
                        </div>
                        <div class="row-span-3 w-[250px] ">
                            <img
                                src={Group}
                                alt='conusImg'
                                className='w-[250px] rounded-[20px] '
                            />
                                                    <img
                            src={Group}
                            alt='conusImg'
                            className='w-[250px] rounded-[20px] mt-8 '
                        />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DeatilPage
