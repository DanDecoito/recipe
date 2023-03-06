
// Imports
import React, { useState, useEffect } from 'react';
import RecipeEntry from "../recipeEntry/recipeEntry";
import Modal from '../modal/modal';

import '../recipeBook/recipeBook.css'

import DataVisualization from '../dataVisualization/dataVisualization';
import IngredientsRender from '../ingredientsRender/ingredientsRender';


function RecipeBook() {

    const [calories, setCalories] = useState('');
    const [totalCalories, setTotalCalories] = useState(0);


    useEffect(() => {
        const recipeFromStorage = JSON.parse(localStorage.getItem('recipe'));
        if (recipeFromStorage) {
            setNewRecipe(recipeFromStorage);
        }
    }, []);






    // Creates an Object and saves it to localStorage
    const [recipe, setNewRecipe] = useState(() => {
        const recipeFromStorage = JSON.parse(localStorage.getItem('recipe'));
        return recipeFromStorage || {
            recipe: [
                {   // If localStorage is empty, it will create a new object. This is the objects key configuration
                    id: 1,
                    name: "",
                    weight: "",
                    calServing: "",
                    calTotal: "",
                    protein: "",
                    fat: "",
                    carb: ""
                },
            ]
        };
    });



    return (
        <>
            < div className='bg-blue-300 min-h-screen flex flex-col items-center  justify-center'>
                <div className="grid-cols-4 gap-4 my-grid" >
                    {/* Header  */}
                    <div>Ingredient</div>
                    <div>Weight</div>
                    <div>Calories Per 100g</div>
                    <div>Total Calories</div>
                    {/* Map to display all elemnts within the array recipe */}
                    {recipe.ingredients.length > 0 && recipe.ingredients.map((ingredient) => (
                        <RecipeEntry
                            //  Props
                            key={ingredient.id}
                            name={ingredient.name}
                            weight={ingredient.weight}
                            calServing={ingredient.calServing}
                            calTotal={ingredient.calTotal}
                        />
                    ))}
                </div>
                {/* Modal sits underneath the mapping of recipeEntry. Allows user to pick an ingrident and  */}
                <Modal />
            </div>
        </>
    )
}





export default RecipeBook;