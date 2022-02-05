import React from 'react';
import CalculatorKey from "./CalculatorKey";
import {calculatorProps} from '../_data/CalculatorProps'
import {useDispatch, useSelector} from "react-redux";
import {
    handleNumAction,
    handleOperationAction,
    handleOperationSign, handleResultAction,
    performOperationAction
} from "../actions/calculator.actions";
import {CalculatorOperations} from "../utils/calculatorUtils";

const operationalSigns= "+-/*="



const Calculator = () => {


    const dispatch = useDispatch();
    const {
        prevValue,
        showResult,
        nextValue,
        op,
    } = useSelector(state => state.calculator)

    const performOperation = () => {

        console.log('perform operation')

        let temp = CalculatorOperations[op](
            parseFloat(prevValue),
            parseFloat(nextValue)
        );
        dispatch(handleResultAction(temp.toString()))
    };

    const handleOperation=(value) =>{

        console.log(value)

        if(Number.isInteger(value)){
        dispatch(handleNumAction(nextValue, value))
        }else if (operationalSigns.includes(value) ){
            if(prevValue && op && nextValue){
                performOperation()
            }else{
                dispatch(handleOperationSign(nextValue, value))
            }
        }




    }


    return (
        <div>

            <input id="result" type="text"
                   className="neumorphistic-borders py-4 form-control text-end col-12 mb-3"
                   placeholder={
                       op ? `${prevValue} ${op} ${nextValue} `
                           :  nextValue
                   }
                   disabled/>
            <div className="row g-3 p-2">
                {
                    calculatorProps.map((button,i) => (
                        <CalculatorKey
                            key={button.value}
                            handleOperation={handleOperation}
                            {...button}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default Calculator;