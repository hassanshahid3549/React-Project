import React from 'react'

let visibility = false;

const visibilityFunction = () =>
    {
        visibility = !visibility
    }

const Data = () => {
    return (
        <div>
            <button onClick = {visibilityFunction}>
                Toggle Button
            </button>

        <p>
            {visibility && (<div>
                <p> This is actual data that is going to display.
                    {console.log("data")}
            </p>
                </div>)}
        </p>
        </div>
    )
}

export default Data