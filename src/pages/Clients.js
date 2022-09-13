import React from 'react'
import Brand from "../common/Brand";
import Footer from "../components/footer/Footer";
import HeaderNav from "../components/headersNav/headerNavb";
import Testimonials from "../components/testimonials/Testimonials";
import Varticles from "../components/varticles/Varticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../components/focus/Details";
import Team from "../components/focus/Team";
import HeaderNavFocus from "../components/headersNav/headerNavFocus";
import HeaderNavCases from "../components/headersNav/headerNavCases";
import Nav from "../components/cases/Nav";
import HeaderCasesDetails from "../components/headersNav/headerCasesDetails";
import HeaderClient from "../components/headersNav/headerNavClients"
import BrandClents from "../common/BrandClents";

function Clients() {
  return (
    <>

    <HeaderClient />


    <BrandClents />

</>
  )
}

export default Clients
