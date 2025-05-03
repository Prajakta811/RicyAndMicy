import React, { useEffect, useState } from 'react'
import axios from "axios"
const Home = () => {
    const[charData,setCharData]=useState([])
    async function fetchData(){
        const responce=await axios.get("https://rickandmortyapi.com/api/character");
        const data=await Object.entries(responce.data);
        console.log(data)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Home
