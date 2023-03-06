import {useState} from "react";
import "../recipeEntry/recipeEntry.css"
import '../recipeBook/recipeBook.css'
import DataVisualization from "../dataVisualization/dataVisualization";


function RecipeEntry(props) {
    const { name, weight, calServing} = props;
    const [newName, setNewName] = useState(name);
    const [newWeight, setNewWeight] = useState(100);
    const [newCalServing, setNewCalServing] = useState(calServing);
    const [totalCalories, setTotalCalories] = useState(calServing);

    


    const handleWeightChange = (event) => {
        const newWeight = event.target.value;
        const newCalories = (newWeight/100) * newCalServing;

        setNewWeight(newWeight);
        setTotalCalories(newCalories);

    }

    const handleCalServingChange = (event) => {
        const newCalServing = event.target.value;
        const newCalories = newWeight * newCalServing;
        setNewCalServing(newCalServing);
        setTotalCalories(newCalories);
    }

    const handleTotalCaloriesChange = (event) => {
        const newTotalCalories = event.target.value;
        const newWeight = newTotalCalories / (newCalServing/100);
        setTotalCalories(newTotalCalories);
        setNewWeight(newWeight);
        
        
    }




    return (
        <>
            <input 
            className='bg-gray-100 rounded-md p-2'
            type="text" 
            defaultValue={newName}/>

            <input 
            className='bg-gray-100 rounded-md p-2'
            type="number" 
            value={newWeight}
            onChange={handleWeightChange}
            />

            <input 
            className='bg-gray-100 rounded-md p-2'
            type="number" 
            defaultValue={newCalServing}/>

            <input 
            className='bg-gray-100 rounded-md p-2'
            type="number" 
            value={totalCalories}
            onChange={handleTotalCaloriesChange}
            />
            <DataVisualization 
            calories={totalCalories}
            />
            
        </>
    )
}

export default RecipeEntry