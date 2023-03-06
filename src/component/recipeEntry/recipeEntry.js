import {useState} from "react";
import "../recipeEntry/recipeEntry.css"
import '../recipeBook/recipeBook.css'
import DataVisualization from "../dataVisualization/dataVisualization";
import React from "react";

// The RecipeEntry creates all the variables and fields associated so that user interaction and data can be displayd

function RecipeEntry(props) {
    // useStates for all of the varaibles associated. 
    const { name, weight, calServing, id} = props;
    const [newName, setNewName] = useState(name);
    const [newWeight, setNewWeight] = useState(100);
    const [newCalServing, setNewCalServing] = useState(calServing);
    const [totalCalories, setTotalCalories] = useState(calServing);


    // Function that allows weight to change calories
    const handleWeightChange = (event) => {
        const newWeight = event.target.value;
        const newCalories = (newWeight/100) * newCalServing;
        setNewWeight(newWeight);
        setTotalCalories(newCalories);
    }       

    // Function that allows calories to change weight
    const handleTotalCaloriesChange = (event) => {
        const newTotalCalories = event.target.value;
        const newWeight = newTotalCalories / (newCalServing/100);
        setTotalCalories(newTotalCalories);
        setNewWeight(newWeight);
        
    }



    return (
        <>
        {/* Input fields, aligned in a row. Allows for user manipulation  */}
            <input 
            className='bg-gray-100 rounded-md p-2'
            type="text" 
            defaultValue={newName}
            disabled/>

            <input 
            className='bg-gray-100 rounded-md p-2'
            type="number" 
            value={newWeight}
            onChange={handleWeightChange}
            />

            <input 
            className='bg-gray-100 rounded-md p-2'
            type="number" 
            defaultValue={newCalServing}
            disabled/>
            
            <input 
            className='bg-gray-100 rounded-md p-2'
            type="number" 
            value={totalCalories}
            onChange={handleTotalCaloriesChange}
            />

            {/* Component whos intention is  */}
            <DataVisualization 
                calories={totalCalories}
            />
           
        </>
    )
}

export default RecipeEntry;