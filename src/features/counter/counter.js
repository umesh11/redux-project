import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const Counter = (props) => {
const count = useSelector((state) => {
         return state.counter.count;
     });
    //state.name.objkeyname
const dispatch = useDispatch();
const [incrementAmount, setIncrementAmount] = useState(0);

const addValue = Number(incrementAmount) || 0;


const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
}
    return (
        <section>
            <p>{count}</p>
                <button onClick={() => {
                    return dispatch(increment())
                }}>+</button>
                <button onClick={() => {
                    return dispatch(decrement())
                }}>-</button>
                <input type ="text" onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount} />

                <div>
                    <button onClick={() =>  dispatch(incrementByAmount(addValue))}>Add Amount</button>
                    <button className='' onClick={resetAll}>Reset</button>
                </div>
        </section>
    );
};



export default Counter;
