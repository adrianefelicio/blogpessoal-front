import { action } from "./actions"

export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: action) => {
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }
        default:
            return state 
    }
}