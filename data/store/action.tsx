//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { UserFormat } from "../interfaceFormat";

// export const EXAMPLE = `EXAMPLE`;
// export const examplefnc = (item: any) => {
//     return {
//         type: EXAMPLE,
//         payload: item
//     }
// }

export const SET_USER = `SET_USER`;
export const currentSetUser = (user: UserFormat) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const SET_ONGOING_PODCAST = `SET_ONGOING_PODCAST`;
export const currentSetOngoingPodcast = (podcast: any) => {
    return {
        type: SET_ONGOING_PODCAST,
        payload: podcast
    }
}