import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Safety from "../components/Safety/Safety"

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Safety></Safety>
      <Footer></Footer>
    </div>
  )
}

export default page
