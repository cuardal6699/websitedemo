import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Focus from "./pages/Focus";
import Cases from "./pages/Cases";
import Clients from "./pages/Clients";
import Casesdetails from "./pages/CasesDetail";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
		{/* <Router> */}
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route excat path="/focus" element={<Focus/>} />
				<Route excat path="/cases" element={<Cases/>} />
				<Route excat path="/clients" element={<Clients/>} />
				<Route excat path="/deails" element={<Casesdetails/>} />
			</Routes>
				

			{/* <HeaderNavFocus /> */}
			{/* <HeaderClient /> */}
			{/* <BrandClents/> */}
			
			
			{/* <Details/> */}
			{/* <Nav /> */}
			{/* <HeaderCasesDetails /> */}
			{/* <Team/> */}

			<Footer />

			</BrowserRouter>,
);
