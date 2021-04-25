import {GET_USER,GET_CURRENT_USER,GET_ALL_USERS} from "../types/userTypes"



export const user=(state={},action)=>{

    switch (action.type) {
        case GET_CURRENT_USER:
                return {...state,currentUser:action.payload}
            
            break;
    
        default :
           return state
            break;
    }
}