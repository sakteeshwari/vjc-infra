import React from 'react'
import Contactimg from "../components/Contactimg/Contactimg"
import Footer from "../components/Footer/Footer"
import Contactform from "../components/Contactform/Contactform"
import Contactrequest from "../components/Contactrequest/Contactrequest"
import Contactposition from "../components/Contactposition/Contactposition"

const page = () => {
  return (
    <div>
      <Contactimg></Contactimg>
      <Contactform></Contactform>
      <Contactrequest></Contactrequest>
      <Contactposition></Contactposition>
      <Footer></Footer>
    </div>
  )
}

export default page
