
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
   
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
      axios.get('/api/jokes')
      .then((res)=>{
  setJokes(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  })

  return (
    <>
    <h1>
      You Are A Great MERN Stack Developer
    </h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke,index)=>(
          <div key={joke.id}> 
            <h3> {joke.title} </h3>
            <h3> {joke.content} </h3>
           </div>
      ))
    }


    </>
  )
}

export default App
