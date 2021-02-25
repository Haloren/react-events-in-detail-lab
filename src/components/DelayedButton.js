// Code DelayedButton Component Here
import React from 'react';

function DelayedButton(props) {
    // console.log("DelayButton", props)

    function handleClick(event) {
        // console.log(event)

        // event.preventDefault();
        // console.log(props.delay)
        setTimeout(() => {
            event.persist()
            props.onDelayedClick(event)
        }, 
        props.delay)
        
    }

    return (
        <button onClick={handleClick}>
            Delayed Button
        </button>
    )
}

export default DelayedButton