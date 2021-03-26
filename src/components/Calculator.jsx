import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { sum, sub } from '../store/Calculator/Calculator.actions';

function Calculator() {
    const result = useSelector(state => state.calculator);
    const dispatch = useDispatch();
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    return (
        <>
            <input type="text" placeholder="a" value={num1} onChange={(e) => setNum1(Number(e.target.value))}/>
            <input type="text" placeholder="b" value={num2} onChange={(e) => setNum2(Number(e.target.value))}/>

            <button onClick={() => dispatch(sum(num1,num2))}>
                somar
            </button>
            <button onClick={() => dispatch(sub(num1,num2))}>
                subtrair
            </button>
            

            <div>
              {result}
            </div>
        </>
    )
}

export default (Calculator)