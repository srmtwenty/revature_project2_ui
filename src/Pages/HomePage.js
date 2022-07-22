import React from 'react'
import '../images/forest.jpg'
import ReactAnime from 'react-animejs'


const {Anime, stagger} = ReactAnime

export default function HomePage() {
  return (
    <div>
    
        <div >
        
            <img src={require('../images/forest.jpg')} alt="forest" className="w-full h-full position: absolute"/>
            </div>

            <body class="p-10">
    <div class="relative">


      
       
        
        <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2"></h2>
        <h3 class="absolute text-2xl text-blue-300 top-5 left-5"></h3>
        
    </div>

    <Anime
  initial={[
    {
      targets: "#Box",
      translateX: 400,
      translateY: 150,
      easing: "linear", 
      duration: 3000,
      opacity: [0, 1],
    }
  ]}
>
  <h1 id="Box" style={{ fontSize: "7rem", height: 850, width: 850, color: "yellow" }} >
            Magic and Swords</h1>
</Anime>
</body>
    </div>
  )
}
