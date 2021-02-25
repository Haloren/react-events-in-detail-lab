// Code CoordinatesButton Component Here
import React from 'react';

function CoordinatesButton(props) {
    // console.log("Coordinates", props)
    
    function handleClick(event) {
        // console.log(event)
        // event.preventDefault(); 

        let coordinates = [event.clientX, event.clientY]
        props.onReceiveCoordinates(coordinates)
    }

    return (
        <button onClick={handleClick}>
            Coordinates Button
        </button>
    )
}

export default CoordinatesButton
// WHY DOES THIS NOT PASS THE TESTS WHEN "event.preventDefault();" IS USED ?