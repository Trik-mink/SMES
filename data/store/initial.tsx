//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
// export interface ExampleInitInter {
//     example: string;
// }
// export interface Action {
//     type: string;
//     payload?: any;
// }
// export const initialState: ExampleInit = {
//     example: 'example'
// };

import { UserFormat } from "../interfaceFormat";

export interface CurrentCache {
    user: UserFormat;
    onGoingPodcastID?: {
        id: number;
        epID: number;
    } | null;
}

export interface Action {
    type: string;
    payload: any;
}

export const initialState: CurrentCache = {
    user: {
        name: '',
        age: '',
        imgAddress: ''
    },
    onGoingPodcastID: null
};