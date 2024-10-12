import { Major, University } from "../data";
import { ADD_TO_GOAL, REMOVE_FROM_GOAL } from "./action";

export interface GoalState {
    uniItem: University;
    majorItem: Major;
}

export const initialState: GoalState[] = []

const goalReducer = (state = initialState, action: any) => {
    console.log(`Action: ${action}`);
    console.log(`Previous state: ${state}`);

    switch (action.type) {
        case ADD_TO_GOAL:
            return {
                ...state,
                uniItem: action.payload.uniItem,
                majorItem: action.payload.majorItem
            }
        case REMOVE_FROM_GOAL:
            return {
                ...state,
                uniItem: action.payload.uniItem,
                majorItem: action.payload.majorItem
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default goalReducer;


// import { useReducer } from "react";
// import { ADD_TO_GOAL, REMOVE_FROM_GOAL, addGoal, removeGoal } from "./action";
// import goalReducer, { GoalState, initialState } from "./reducer";
// import { Major, University } from "../data";

// function RootProvider() {
//     const [state, dispatch] = useReducer(goalReducer, initialState);

//     const { goalItems } = state;

//     const addGoalItem = (uniItem: University, majorItem: Major) => {
//         dispatch(addGoal(uniItem, majorItem));
//     }

//     const removeGoalItem = (uniItem: University, majorItem: Major) => {
//         dispatch(removeGoal(uniItem, majorItem));
//     }

    
// }

// export default RootProvider;