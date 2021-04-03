import { ACTION_SET_TO,ACTION_SET_FROM } from './constants';

//to  => from
export const setFrom = ( from ) => ({
    type:ACTION_SET_FROM,
    payload:from
})


//from => to
export const setTo =(to) => ({
    type:ACTION_SET_TO,
    payload: to
})