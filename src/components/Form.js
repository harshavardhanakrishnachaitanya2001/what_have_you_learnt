import React from 'react'
import { useState } from 'react'
const Form = () => {
  const [name,setName] = useState('');
  const [age,setAge] = useState(0)
  const [details,setDetails] = useState({})
  const [concepts,setConcepts] = useState([
    {
      id:1,
      name:'HTML',
      learned:false
    },
    {
      id:2,
      name:'CSS',
      learned:false
    },
    {
      id:3,
      name:'JavaScript',
      learned:false
    },
    {
      id:4,
      name:'Reactjs',
      learned:false
    },
    {
      id:5,
      name:'Tailwindcss',
      learned:false
    },
    {
      id:6,
      name:'Mongodb',
      learned:false
    },
    {
      id:7,
      name:'Expressjs',
      learned:false
    },
  ])
  return (
    <form>
      {/* Name field */}
      <div>
        <label>Name</label>
        <input type='text' value = {name}/>
      </div>

      {/* Age field */}
      <div>
        <label>Age</label>
        <input type='text' />
      </div>
    </form>
  )
}

export default Form
