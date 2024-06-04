import {atom, selector} from "recoil"

export const countState=atom({
    key:"count",
    default:10
});

export const countChange = selector({
    key:"change",
    get: ({get})=>{
        return get(countState)*get(countState)
    }
});