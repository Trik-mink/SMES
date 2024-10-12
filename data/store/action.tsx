import { Major, University } from "../data";

export const ADD_TO_GOAL = 'ADD_TO_GOAL';
export const REMOVE_FROM_GOAL = 'REMOVE_FROM_GOAL';

export const addGoal = (uniItem: University, majorItem: Major) => {
    return {
        type: ADD_TO_GOAL,
        payload: { uniItem, majorItem }
    }
}

export const removeGoal = (uniItem: University, majorItem: Major) => {
    return {
        type: REMOVE_FROM_GOAL,
        payload: { uniItem, majorItem }
    }
}