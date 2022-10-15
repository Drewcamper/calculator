import React, { createContext, useState } from "react";

export const CalculatorContext = createContext()


export const CalculatorProvider = ({children}) => {
   
    const [expression, setExpression] = useState('')
    const [answer, setAnswer] = useState(0)

    return (
      <CalculatorContext.Provider value={{expression, setExpression, answer, setAnswer}}>
        {children}
      </CalculatorContext.Provider>
    )
  }
