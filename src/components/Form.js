import React from 'react'
import {useState} from 'react'
const Form = () => {
    const [details,setDetails] = useState({
        personName:'',
        concepts:[],
    });
    const handleCheckBox = (e) => {
      let updatedDetails = {...details};
      if(e.target.checked){
      updatedDetails.concepts.push("Hi")
      }
      setDetails(updatedDetails);
    }
    
  return (
    <div>
    
      <form>
        <div>
            <label>Name:</label>
            <input  type='text'/>
        </div>
        <div>
            <label>Age</label>
            <input type='text'/>
        </div>
        <div>
            <label>Choose the languages you know</label>
            <input type='checkbox'/>HTML
            <input type='checkbox'/>JavaScipt
            <input type='checkbox'/>Reactjs
            <input type='checkbox'/>CSS
            <input type='checkbox'/>Tailwindcss
            <input type='checkbox'/>Nextjs
            <input type='checkbox'/>Node.js
            <input type='checkbox' onChange={handleCheckBox} name="expressjs"/>ExpressJS
        </div>
      </form>
      <div>
        <h1>So you have to learn: </h1>
        <h2>{details.concepts}</h2>
      </div>
    </div>
  )
}

export default Form
