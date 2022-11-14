import React from 'react'
import "./home.css"
import smoke from "./Assest/smoke.mp4"

function Home() {
  return (
    <div className='home_body'>
<section>
    <video src={smoke} autoplay muted></video>
    <h1>  
        <span> W</span>
        <span> E </span>
        <span> L </span>
        <span> C </span>
        <span> O </span>
        <span> M </span>
        <span> E </span>
        <span> 🧾 </span>
        
      
    </h1>
</section>

    </div>
  )
}

export default Home