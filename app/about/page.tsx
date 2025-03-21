import React from 'react'
import Aboutimg from "../components/Aboutimg/Aboutimg"
import Footer from "../components/Footer/Footer"
import Aboutpossibility from "../components/Aboutpossibility/Aboutpossibility"
import Aboutvideo from "../components/Aboutvideo/Aboutvideo"

const page = () => {
  return (
    <div>
      <Aboutimg></Aboutimg>
      <Aboutpossibility></Aboutpossibility>
      <Aboutvideo></Aboutvideo>
      <Footer></Footer>
    </div>
  )
}

export default page
