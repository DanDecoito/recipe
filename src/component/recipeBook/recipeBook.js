import React, { useState, useEffect } from 'react';
import RecipeEntry from "../recipeEntry/recipeEntry";
import '../recipeBook/recipeBook.css'
import Modal from '../modal/modal';
import DataVisualization from '../dataVisualization/dataVisualization';
import IngredientsRender from '../ingredientsRender/ingredientsRender';


function RecipeBook() {

    const [accCall, setAccCal] = useState('0')


    const [recipe, setNewRecipe] = useState(() => {
        const recipeFromStorage = JSON.parse(localStorage.getItem('recipe'));
        return recipeFromStorage || {
            ingredients: [
                {
                    id: 1,
                    name: "",
                    weight: "",
                    calServing: "",
                    calTotal: "",
                },
            ]
        };
    });

    useEffect(() => {
        const recipeFromStorage = JSON.parse(localStorage.getItem('recipe'));
        if (recipeFromStorage) {
            setNewRecipe(recipeFromStorage);
        }
    }, []);




    

    // const addIngredient = () => {
    //     const newId = recipe.ingredients.length + 1;
    //     const newIngredient = {
    //         id: newId,
    //         name: "",
    //         weight: "",
    //         calServing: "",
    //         calTotal: "",
    //     };
    //     const newIngredients = [...recipe.ingredients, newIngredient];
    //     const newRecipe = { ...recipe, ingredients: newIngredients };
    //     setNewRecipe(newRecipe);
    //     // localStorage.setItem('recipe', JSON.stringify(newRecipe));
    // };


    // const buttonAdd = () => {



    // }


    // const handleRecipeSave = () => {
    //     localStorage.setItem('recipe', JSON.stringify(recipe));
    // };


    return (
        <>
            
            < div className='bg-blue-300 min-h-screen flex flex-col items-center  justify-center'>
                <div className="grid-cols-4 gap-4 my-grid" >
                    <div>Ingredient</div>
                    <div>Weight</div>
                    <div>Calories Per 100g</div>
                    <div>Total Calories</div>
                    {recipe.ingredients.length > 0 && recipe.ingredients.map((ingredient) => (
                        <RecipeEntry
                            key={ingredient.id}
                            name={ingredient.name}
                            weight={ingredient.weight}
                            calServing={ingredient.calServing}
                            calTotal={ingredient.calTotal}

                        />
                    ))}


                </div>
                <Modal />
                    
            </div>
                <div 
                className='mt-10'
                >
                    <DataVisualization
                       recipe={recipe} 
                    />
                </div>

        </>
    )
}





export default RecipeBook;