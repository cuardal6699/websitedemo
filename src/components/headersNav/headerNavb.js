import React from "react";
import Header from "../header/Header";
import NavBar from "../navbar/NavBar";

function headerNavb() {
	return (
		<div className='bg-headers bg-no-repeat bg-cover'>
			<NavBar />
			<Header />
		</div>
	);
}

export default headerNavb;
