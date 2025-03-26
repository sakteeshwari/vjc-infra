import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Personal from "../components/Personal/Personal"

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Personal></Personal>
      <Footer></Footer>
    </div>
  )
}

export default page
