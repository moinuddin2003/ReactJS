import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

import { Header, Footer } from './components';

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
