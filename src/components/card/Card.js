import React from "react";

function Card({ showItems, testimonial }) {
	return (
		<div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
			{testimonial.slice(0, showItems).map((item) => (
				<div
					className='bg-[#F7F9FC] px-7 py-10 h-fit rounded-md'
					key={item._id}
				>
					<div className='flex  items-center gap-4'>
						<img src={item.img} alt='ItemsImage' className='rounded-full' />
						<div>
							<h1 className='text-lg text-black mb-1'>{item.name}</h1>
							<p className='text-[#808591] text-xs font-mono'>
								{item.subTitle}
							</p>
						</div>
					</div>

					<p className='mt-9 text-sm text-[#1C1C1C]'>{item.aboutTxt}</p>
				</div>
			))}
		</div>
	);
}

export default Card;
