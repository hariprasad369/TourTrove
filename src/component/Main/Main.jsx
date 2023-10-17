import React,{useEffect} from "react"
import './main.css'
import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.webp'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpeg'
import img8 from '../../Assets/img8.jpeg'
import img9 from '../../Assets/img9.jpeg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data=[
   {
     id:1,
    imgSrc:img1,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:"Bora Bora: A tropical paradise with crystal-clear waters, overwater bungalows, and breathtaking coral reefs awaits for the ultimate escape into luxury and natural beauty."
      },

  {
    id:2,
   imgSrc:img2,
   destTitle:'Machu Picchu',
   location:'peru',
   grade:'CULTURAL RELAX',
   fees:'$600',
   description:"Explore the awe-inspiring ancient ruins of Machu Picchu, nestled high in the Andes, and embark on a journey through history and breathtaking scenery like no other."
  },
  
  {
    id:3,
   imgSrc:img3,
   destTitle:'Great Barrier Reef',
   location:'Australia',
   grade:'CULTURAL RELAX',
   fees:'$700',
   description:"Dive into the mesmerizing world of the Great Barrier Reef, where vibrant corals and an array of marine life await your exploration in this natural wonder of unparalleled beauty."
  },

  
  {
    id:4,
   imgSrc:img4,
   destTitle:'cappadocia',
   location:'Turkey',
   grade:'CULTURAL RELAX',
   fees:'$800',
   description:"Discover the enchanting streets, vibrant culture, and rich history of Guanajuato, Mexico's picturesque UNESCO World Heritage city nestled in the heart of the mountains."
  },
  
  {
    id:5,
   imgSrc:img5,
   destTitle:'Guanajuato',
   location:'Mexico',
   grade:'CULTURAL RELAX',
   fees:'$1100',
   description:"Guanajuato is a charming Mexican city known for its vibrant culture, colorful colonial architecture, and rich history, nestled in the heart of the country amidst picturesque hills and valleys."
  },

   {
    id:6,
   imgSrc:img6,
   destTitle:'Cinque Terre',
   location:'Italy',
   grade:'CULTURAL RELAX',
   fees:'$840',
   description:"Experience the breathtaking beauty of Italy's Cinque Terre, where colorful cliffside villages, pristine beaches, and scenic hiking trails converge in a Mediterranean paradise."
  },

  {
    id:7,
   imgSrc:img7,
   destTitle:'Angkor Wat',
   location:'Cambodia',
   grade:'CULTURAL RELAX',
   fees:'$790',
   description:"Experience the awe-inspiring beauty of Angkor Wat, a UNESCO World Heritage site and the world's largest religious monument, with its intricate Khmer architecture and stunning sunrise views."
  },

  
  {
    id:8,
   imgSrc:img8,
   destTitle:'Taj Mahal',
   location:'India',
   grade:'CULTURAL RELAX',
   fees:'$900',
   description:"Experience the timeless beauty of the Taj Mahal, nestled on its serene island, a symbol of eternal love and architectural marvel."
  },

  
  {
    id:9,
   imgSrc:img9,
   destTitle:'Bali Island',
   location:'Indonesia',
   grade:'CULTURAL RELAX',
   fees:'$500',
  description:"Discover the enchanting beauty of Bali Island, where lush rice terraces meet pristine beaches, offering a perfect blend of culture, adventure, and relaxation for an unforgettable travel experience."
  },
 
]

const Main=()=>{
  // create a react hook to add a scroll animation...
   
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

    return(
       <section className="main container section">
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most visited destinations
            </h3>
        </div>

        <div className="secContent grid">

          {
            Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
              return(
                <div key={id} 
                data-aos="fade-up"
                className="singleDestination">
                   
                   <div className="imageDiv">
                      <img src={imgSrc} alt={destTitle}/>
                  </div>
                   <div className="cardInfo">
                      <h4 className="destTitle">
                       {destTitle}</h4>
                       <span className="continent flex">
                            <HiOutlineLocationMarker className="icon"/>
                            <span className="name">{location}</span>
                       </span>

                       <div className="fees flex">
                         <div className="grade">
                          <span>{grade}<small>+1</small></span>
                         </div>
                         <div className="price">
                          <h5>{fees}</h5>
                         </div>
                       </div>

                       <div className="desc">
                        <p>{description}</p>
                       </div>

                       <button className="btn flex">
                        DETAILS<HiOutlineClipboardCheck className='icon'/>
                       </button>
                   </div>
                </div>
              )
            })
          }

        </div>
       </section>
    )
}

export default Main