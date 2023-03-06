import { useState, useEffect } from "react"
import React from "react";

function DataVisualization(props) {

  let [arr, setArr] = useState([])
  

  return (
    <>
      {console.log(props.calories )}
    </>
  )
}

export default React.memo(DataVisualization);
