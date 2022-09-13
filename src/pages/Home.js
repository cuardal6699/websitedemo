import React from 'react'
import Brand from "../common/Brand";
import HeaderNav from "../components/headersNav/headerNavb";
import Testimonials from "../components/testimonials/Testimonials";
import Varticles from "../components/varticles/Varticles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
<>

                    <HeaderNav/> 
					
					
					<Varticles />
					<Testimonials />
					<Brand />

</>
  )
}

export default Home
