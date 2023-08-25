
import React, { useReducer } from "react";
const ACTIONS = {
    INCREAMENT : 'increament',
    DECREAMENT : 'decreament',
};


function reducer(state, action){
    switch (action.type){
        case ACTIONS.INCREAMENT:
            return  {count: state.count + 1}

        case ACTIONS.DECREAMENT:
            return  {count: state.count - 1}

        default:
            return state
    }
    
}

const App1 = () => {

    const [state, dispatch] = useReducer(reducer, { count : 0 })

   
    function increament(){
        dispatch({type : ACTIONS.INCREAMENT});
    }
    function decreament(){
        dispatch({type : ACTIONS.DECREAMENT});
    }

    return (
        <div>
            <button onClick={decreament}>-</button>
            <span>{state.count}</span>
            <button onClick={increament}>+</button>
            

        </div>
    )

}

export default App1;