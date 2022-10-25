import { StateInterface, ActionInterface } from "../types";

export const initialState: StateInterface = {
    products: []
}

export const reducerFn = (state: StateInterface, action: ActionInterface) => {


    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                products: payload as ProductInterface[]
            }
        default: return state
    }

}