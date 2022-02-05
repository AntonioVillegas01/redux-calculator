
import {types} from "../types/types";
import {CalculatorOperations} from "../utils/calculatorUtils";
const operationalSigns= "+-/*"

export const handleOperationAction = (value) => {

    let payload;

    return {
        type: types.handleOperation,
        payload
    }
}

export const handleOperationSign = (prevValue, op) => {

    console.log('prevValue', prevValue)
    console.log('op', op)

    return {
        type: types.handleOperationSign,
        payload: {
            prevValue,
            op
        }
    }
}

export const handleResultAction = (result) => {
    return {
        type: types.handleResult,
        payload: result
    }
}
export const handleNumAction = (next, number) => {
    let payload
    payload = next === '0' ? String(number) : next + number
    return {
        type: types.handleNum,
        payload
    }
}


export const insertDotAction = () => ({
    type: types.insertDot,
    payload: {

    }
})
export const changeSignAction = () => ({
    type: types.changeSign,
    payload: {

    }
})
export const clearDataAction = () => ({
    type: types.clearData,
    payload: {

    }
})