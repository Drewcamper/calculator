import { useContext, useRef, useEffect } from "react";
import { CalculatorContext } from '../context/context';

import '../App.css';




export const Inputs = () => {
    const { answer, setAnswer, expression, setExpression } = useContext(CalculatorContext);

    const display = (symbol) => {
        setExpression((prev) => prev + symbol)
        if(expression[expression.length-1] === '='){
          if(/[0-9.]/.test(symbol)){
           setExpression(symbol)
          } else {
            setExpression(answer + symbol)
            }
          }
    }
    const calculate = () => {
        setAnswer(eval(expression))         //eval is the spice
        setExpression((prev) => prev + '=')
    }

    const allClear = () => {
        setExpression('')
        setAnswer(0)
    }

    const clear = () => {
        setExpression((prev) => prev.split('').splice(0, prev.length -1).join(''))
        setAnswer(0)
    }

/*keyboard handlers*/
/*Enter key */
    const useKey = (key, cb) => {
        const callbackRef = useRef(cb);

        useEffect(() => {
            callbackRef.current = cb  
        })

        useEffect(() => {
            function handle(event){
                if(event.key === key) {
                    callbackRef.current(event)
                }
        }
        document.addEventListener('keypress', handle)
        
        return () => document.removeEventListener('keypress', handle)

        }, [key])
        
   
    }

    const handleEnter = () => {
        setAnswer(eval(expression))         //eval is the spice
        setExpression((prev) => prev + '=')
    }
    const handlePlus = (symbol) => {
        return display('+')
    }
    const handleMinus = (symbol) => {
        return display('-')
    }
    const handleMultiply = (symbol) => {
        return display('*')
    }
    const handleDivide = (symbol) => {
        return display('/')
    }
    /*const handleBackspace = (symbol) => {
        setExpression((prev) => prev.split('').splice(0, prev.length -1).join(''))
        setAnswer(0)
    }*/
    const handleDelete = (symbol) => {
        return allClear
    }
    const handleNine = (symbol) => { 
        return  display('9')   
    }
    const handleEight = (symbol) => { 
        return  display('8')   
    }
    const handleSeven = (symbol) => { 
        return  display('7')   
    }
    const handleSix = (symbol) => { 
        return  display('6')   
    }
    const handleFive = (symbol) => { 
        return  display('5')   
    }
    const handleFour = (symbol) => { 
        return  display('4')   
    }
    const handleThree = (symbol) => { 
        return  display('3')   
    }
    const handleTwo = (symbol) => { 
        return  display('2')   
    }
    const handleOne = (symbol) => { 
        return  display('1')   
    }
    const handleZero = (symbol) => { 
        return  display('0')   
    }
    

    

    useKey('Enter', handleEnter)
    useKey('+', handlePlus)
    useKey('-', handleMinus)
    useKey('*', handleMultiply)
    useKey('/', handleDivide)
    //useKey('Backspace', handleBackspace)
    useKey('Delete', handleDelete)
    useKey('9', handleNine)
    useKey('8', handleEight)
    useKey('7', handleSeven)
    useKey('6', handleSix)
    useKey('5', handleFive)
    useKey('4', handleFour)
    useKey('3', handleThree)
    useKey('2', handleTwo)
    useKey('1', handleOne)
    useKey('0', handleZero)


  return(
    <div className="container">
        <div className='grid'>
            <div className='dis'>
                <input type='text' value={expression} placeholder='0' disabled/>
                <div className='total'>{answer}</div>
            </div>

    {/*buttons*/}

            <div onClick={allClear} className='padButton AC tomato'>AC</div>

            <div onClick={clear} className='padButton C tomato'>C</div>

            <div onClick={() => display('/')} className='padButton div'>/</div>

            <div onClick={() => display('*')} className='padButton times'>*</div>

            <div onClick={() => display('7')} className='padButton seven dark-grey'>7</div>

            <div onClick={() => display('8')} className='padButton eight dark-grey'>8</div>

            <div onClick={() => display('9')} className='padButton nine dark-grey'>9</div>

            <div onClick={() => display('-')} className='padButton minus'>-</div>

            <div onClick={() => display('4')} className='padButton four dark-grey'>4</div>

            <div onClick={() => display('5')} className='padButton five dark-grey'>5</div>

            <div onClick={() => display('6')} className='padButton six dark-grey'>6</div>

            <div onClick={() => display('+')} className='padButton plus'>+</div>

            <div onClick={() => display('1')} className='padButton one dark-grey'>1</div>

            <div onClick={() => display('2')} className='padButton two dark-grey'>2</div>

            <div onClick={() => display('3')} className='padButton three dark-grey'>3</div>

            <div onClick={calculate} className='padButton equal blue'>=</div>
            
            <div onClick={() => display('0')} className='padButton zero dark-grey'>0</div>

            <div onClick={() => display('.')} className='padButton dot dark-grey'>.</div>

        </div>
    
    </div>

  )
}

