import React from 'react'
import Contactimg from "../components/Contactimg/Contactimg"
import Footer from "../components/Footer/Footer"
import Contactform from "../components/Contactform/Contactform"
import Contactrequest from "../components/Contactrequest/Contactrequest"

const page = () => {
  return (
    <div>
      <Contactimg></Contactimg>
      <Contactform></Contactform>
      <Contactrequest></Contactrequest>
      <Footer></Footer>
    </div>
  )
}

export default page
