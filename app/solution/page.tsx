import React from 'react'
import Footer from '../components/Footer/Footer'
import Solutionimg from '../components/Solutionimg/Solutionimg'
import Solutioncontent from "../components/Solutioncontent/Solutioncontent"
import Solutionimgdown from "../components/Solutionimgdown/Solutionimgdown"
import Solutionredbg from "../components/Solutionredbg/Solutionredbg"
import Solutionindus from "../components/Solutionindus/Solutionindus"
import Solutionlast from "../components/Solutionlast/Solutionslast"

const page = () => {
  return (
    <div>
        <Solutionimg></Solutionimg>
        <Solutioncontent></Solutioncontent>
        <Solutionimgdown></Solutionimgdown>
        <Solutionredbg></Solutionredbg>
        <Solutionindus></Solutionindus>
        <Solutionlast></Solutionlast>
      <Footer></Footer>
    </div>
  )
}

export default page
