import React from "react";
import { useState } from "react";
import {concepts} from '../Concepts'

 const Form = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState({
    learnedConcepts: [], 
    yetToLearn: []
  });

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleCheckbox = (e) => {
    const checkedCheckbox = e.target.name;
    const isChecked = e.target.checked;
    const concept = concepts.find((c) => c.name === checkedCheckbox);
    concept.learned = isChecked;


    let learnedConcepts = concepts.filter(concept => concept.learned===true);
    let conceptsYetToLearn = concepts.filter(concept => concept.learned!==true);
    setDetails({...details,learnedConcepts:learnedConcepts,yetToLearn:conceptsYetToLearn})
    
  }

  // Storing name details object
  const saveDetails = (e) => {
    e.preventDefault();
    setDetails(prevDetails => ({ ...prevDetails, personName: name }));
  };
  
  return (
    <>
      <form>
        {/* Name field */}
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleName}
            name="personName"
            required
          />
        </div>

        {/* List of concepts */}
        <ul>
          {concepts.map((concept) => (
            <li key={concept.id}>
              <input
                checked={concepts.learned}
                type="checkbox"
                onChange={handleCheckbox}
                name={concept.name}
              />
              {concept.name}
            </li>
          ))}
        </ul>

      </form>
        {/* Result display area */}
        <button onClick={saveDetails}>Save</button>
        <span>{details.personName}, You know: </span>
        <ol>
          {
            details.learnedConcepts.map(concept => (
              <li key={concept.id}>{concept.name}</li>
            ))
          }
        </ol>
        <h1>and you need to learn</h1>
        {
          details.yetToLearn.map(concept => (
            <li key={concept.id}>{concept.name}</li>
          ))
        }
    </>
  )
}

export default Form