import { useState } from "react";
import {concepts} from '../Concepts'

 const Form = () => {
  const [details, setDetails] = useState({
    learnedConcepts: [], 
    yetToLearn: []
  });
  const [newConcept,setNewConcept] = useState({});

  
  const handleCheckbox = (e) => {
    const checkedCheckbox = e.target.name;
    const isChecked = e.target.checked;
    const concept = concepts.find((c) => c.name === checkedCheckbox);
    concept.learned = isChecked;


    let learnedConcepts = concepts.filter(concept => concept.learned===true);
    let conceptsYetToLearn = concepts.filter(concept => concept.learned!==true);
    setDetails({...details,learnedConcepts:learnedConcepts,yetToLearn:conceptsYetToLearn})
    
  }

  // Add new concept: click handler
  let id=7;
  const addNewConcept = (e) => {
    e.preventDefault();
    let newConceptList = [...concepts];
    newConceptList.push({
      id:++id,
      name:newConcept,
      learned:false,
    });
    console.log(concepts)
  };

  //Storing name
  const handleConceptChange = (e) => {
    setNewConcept(e.target.value)
  }


  
  return (
    <div className="text-xl ml-2 h-full">
      <form>
        {/* List of concepts */}
        <ul className="space-y-5 flex flex-col justify-center">
          {concepts.map((concept) => (
            <li key={concept.id}>
              <input
                checked={concepts.learned}
                type="checkbox"
                className="border-box m-1 h-5 w-5"
                onChange={handleCheckbox}
                name={concept.name}
              />
              {concept.name}
            </li>
          ))}
        </ul>
        {/* Input to add new concept object */}
        <input type="text" value={newConcept} onChange = {handleConceptChange} className="border border-gray-500 rounded-sm p-2 mr-2"/>
        {/* Button for adding that to the concepts array */}
        <button onClick={addNewConcept} className="border rounded-lg p-2 my-2">Add concept</button>
      </form>

        {/* Result display area */}
        
          <>  
            <p className="my-2 font-bold">It's grate that you know: </p>
            <ol className="space-y-4">
              {
                details.learnedConcepts.map(concept => (
                  <li key={concept.id} className="space-y-4">{concept.name}</li>
                ))
              }
            </ol>
            <p className="my-2 font-bold">But if you know about the following too, that would be fantastic.</p>
            <ol className="space-y-4">
              {
                details.yetToLearn.map(concept => (
                  <li key={concept.id} className="">{concept.name}</li>
                ))
              }
            </ol>
            <p className="my-2 font-bold">Hope you have a great day!</p>
          </>
       
    </div>
  )
}

export default Form