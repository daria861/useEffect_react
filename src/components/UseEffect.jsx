import { useEffect, useState } from "react"

export function UseEffect(){

    const [state, setState] = useState('value')

    useEffect(() =>{
        console.log('State: ', state);
    })

    return(

        <div className="App">
            <h2>Click button</h2>
            <button onClick={() => setState('New value')}>Click</button>
        </div>
    )
}