import { useState, useEffect } from "react"


let num = 0

function DataVisualization (props) {
    const  [calCount, setCalCount] = useState(props.calories )



    return (
        <>
            
            {console.log(calCount)}
            

            





            {/* {recipe.ingredients.map( (ingredient) => {
                let protein = ingredient.protein
                let fat = ingredient.fat
                let carb = ingredient.carb



            })} */}

        </>
    )
}


export default DataVisualization