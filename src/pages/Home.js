import React from 'react'
import Brand from "../common/Brand";
import HeaderNav from "../components/headersNav/headerNavb";
import Testimonials from "../components/testimonials/Testimonials";
import Varticles from "../components/varticles/Varticles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeatilPage from '../components/cases/DeatilPage';
import NavBar from '../components/navbar/NavBar';

function Home() {
  return (
<>
                  <NavBar/>
                    {/* <HeaderNav/>  */}
                    <DeatilPage />
					
					
					{/* <Varticles />
					<Testimonials />
					<Brand /> */}

</>
  )
}

export default Home
