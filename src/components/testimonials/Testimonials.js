import React, { useState } from "react";
import Card from "../card/Card";
import { testimonial } from "../../fakeCardData";

function Testimonials() {
	const [showItems, setShowItems] = useState(6);

	const handleShow = () => {
		setShowItems((prev) => prev + 3);
	};

	const handleShowLess = () => {
		setShowItems((prev) => prev - 3);
	};

	return (
		<section className='pb-32'>
			<div className='container mx-auto'>
				<div className='text-center'>
					<p className='text-5xl'>🎉</p>
					<p className='font-mono mt-7'>Lets hear from our clients</p>
				</div>

				<div className='relative'>
					<div className='pt-28 sm:px-0 px-5 '>
						<Card showItems={showItems} testimonial={testimonial} />
					</div>
					<div
						className={
							showItems === testimonial.length
								? "text-center pt-20"
								: "text-center pt-64 bg-gradient-to-b from-[#FFFFFF00] to-[#FFFFFF] absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-72 z-20"
						}
					>
						{showItems === testimonial.length ? (
							<button
								onClick={handleShowLess}
								className='inline-block px-4 py-3 bg-[#0B3AFF] text-xs text-white font-semibold rounded-md'
							>
								Show less
							</button>
						) : (
							<button
								onClick={handleShow}
								className='inline-block px-4 py-3 bg-[#0B3AFF] text-xs text-white font-semibold rounded-md'
							>
								Load more
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
