import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ClientCommit from "../components/ClientCommit/ClientCommit"

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ClientCommit></ClientCommit>
      <Footer></Footer>
    </div>
  )
}

export default page
