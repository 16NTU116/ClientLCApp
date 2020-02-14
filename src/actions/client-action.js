import { addClientProfile } from "./action-type";

export const addProfile = (addProfile) => dispatch =>{
    const state = {
        type: addClientProfile,
        payload : addProfile
    }
    dispatch(state);
}