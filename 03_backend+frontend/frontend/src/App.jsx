import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [about, setAbout] = useState([])

   useEffect(() => {
     axios.get("/api/about")
     .then((response) =>{
      setAbout(response.data)
     })
     .catch((error) => {
      console.log(error)
     })
   })
   
  return (
    <>
    <h1>backend!</h1>
    <p>abouts: {about.length}</p>
      {
        about.map((about) =>(
          <div key = {about.id}>
            <h3>{about.title}</h3>
            <p>{about.content}</p>
          </div>
        ))
      }
    </>
    
  )
}

export default App