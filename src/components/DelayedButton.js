// Code DelayedButton Component Here
import React from 'react';

function DelayedButton(props) {
    // console.log("DelayButton", props)

    function handleClick(event) {
        // console.log(event)
        // console.log(props.delay)

        // event.preventDefault();
        event.persist()
        
        setTimeout(() => { props.onDelayedClick(event)}, props.delay) 
    }

    return (
        <button onClick={handleClick}>
            Delayed Button
        </button>
    )
}

export default DelayedButton