import React, { Fragment, useEffect, useState } from 'react'
import Navbars from '../../Components/Navbar/Navbars'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import TopBtn from '../../Components/TopBtn/TopBtn'
import FadeLoader from "react-spinners/FadeLoader";
import './Root.css';

const Root = () => {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=> {
      setLoading(false)
    },3000)
  },[])

  return (
    <section className='root'>
    {
      loading ?
      <FadeLoader color={"#D00216"} loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" className='spin'/>
      : 
      <Fragment>
        <Navbars/>
        <Outlet/>
        <TopBtn/>
        <Footer/>
      </Fragment>
    }
    </section>
  )
}

export default Root
