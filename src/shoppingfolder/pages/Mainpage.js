import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer1 from '../components/Footer1'
import {Buffalo,Packet} from '../data'
import MilkCollection from '../components/MilkCollection'
const Mainpage = () => {
    const[buffaloMilk]=useState(Buffalo)
    const[milkpacket]=useState(Packet)
  return (
    <div>
       
      <Navbar />
      <Banner />
      <Collections buffaloMilk={buffaloMilk}/>
      <MilkCollection milkpacket={milkpacket}/>
      <Footer1 />
    </div>
  )
}

export default Mainpage;