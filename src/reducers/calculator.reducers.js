import { types } from "../types/types";


const initalState ={
    prevValue: null,
    showResult: false,
    nextValue: "0",
    op: null,
}

export const calculatorReducer = (state= initalState, action)=>{
    switch(action.type) {

        case types.handleOperation:
            return{
                ...state,
                nextValue: action.payload
            }


        case types.handleOperationSign:
            return{
                ...state,
                prevValue: action.payload.prevValue,
                nextValue: '',
                op: action.payload.op
            }

        case types.handleNum:
            return{
                ...state,
                nextValue: action.payload
            }

        case types.handleResult:
            return{
                ...state,
                op: null,
                prevValue: null,
                showResult: true,
                nextValue: action.payload
            }

        default:
            return state
    }
}