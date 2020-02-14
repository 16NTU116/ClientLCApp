import { addClientProfile } from "../actions/action-type"

const state = {
    clients: [{
        username: "ali",
        password: "1234"
    },{
        username: "hamza",
        password: "gadget"
    }]
}

const clientReducer = (mState = clone(state), action) => {
    switch (action.type) {
        case addClientProfile:
            console.log(action.payload);
            mState.clients.push(action.payload);
            return clone(mState);
        default:
            return clone(mState);
    }
}


export default clientReducer;
const clone = (obj) => (JSON.parse(JSON.stringify(obj))); 