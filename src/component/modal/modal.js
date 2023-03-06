import React, { useState, useEffect } from "react";

function Modal() {
    // Varaibles 
    const [showModal, setShowModal] = React.useState(false);
    const [newIngredient, setNewIngredient] = useState("")
    const [newCalorie, setNewCalorie] = useState("")
    const [newProtein, setNewProtein] = useState("");
    const [newCarb, setNewCarb] = useState("");
    const [newFat, setNewFat] = useState("");

    
    const [recipe, setNewRecipe] = useState(() => {
        const recipeFromStorage = JSON.parse(localStorage.getItem('recipe'));
        return recipeFromStorage || { ingredients: [] };
    });

    // Function that saves all the users input and then saves it 
    const handleRecipeSave = () => {
        const newId = recipe.ingredients.length + 1;
        const newIngredientObj = {
            id: newId,
            name: newIngredient,
            weight: "",
            calServing: newCalorie,
            calTotal: "",
            protein: newProtein,
            carb: newCarb,
            fat: newFat,

        };
        const newIngredients = [...recipe.ingredients, newIngredientObj];
        const newRecipe = { ...recipe, ingredients: newIngredients };
        setNewRecipe(newRecipe);
        localStorage.setItem("recipe", JSON.stringify(newRecipe));
        setShowModal(false);
    };







    return (
        <>
            {/* {console.log('modal test')} */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                type="button"
                onClick={() => {setShowModal(true)}}
            >
                Add Ingredient
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {setShowModal(false)}}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Ingredient Name
                                    </p>
                                    <input
                                        className='bg-gray-300 rounded-md p-2'
                                        onChange={(event) => {
                                            setNewIngredient(event.target.value)
                                        }} />
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Calories per 100g
                                    </p>
                                    <input
                                        className='bg-gray-300 rounded-md p-2'
                                        onChange={(event) => {
                                            setNewCalorie(event.target.value)
                                        }} />

                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Protien per 100g
                                    </p>
                                    <input
                                        className='bg-gray-300 rounded-md p-2'
                                        onChange={(event) => {
                                            setNewProtein(event.target.value)
                                        }} />

                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Carbohydrates per 100g
                                    </p>
                                    <input
                                        className='bg-gray-300 rounded-md p-2'
                                        onChange={(event) => {
                                            setNewCarb(event.target.value)
                                        }} />

                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Fat per 100g
                                    </p>
                                    <input
                                        className='bg-gray-300 rounded-md p-2'
                                        onChange={(event) => {
                                            setNewFat(event.target.value)
                                        }} />



                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                            console.log('test')
                                        }}
                                        
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleRecipeSave}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}


export default React.memo(Modal)