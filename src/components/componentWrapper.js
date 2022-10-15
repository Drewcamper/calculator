
import { useContext } from 'react';
import { CalculatorContext } from '../context/context';

import { Inputs } from './inputs';


export const Calculator = () => {
    const { expression, setExpression, answer, setAnswer } = useContext(CalculatorContext);
    return (
        <>            
           <Inputs expression={expression} setExpression={setExpression} answer={setAnswer} setAnswer={setAnswer}/>
        </>
    )
}