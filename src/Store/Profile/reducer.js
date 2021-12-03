 import { TOGGLE_NAME_ACTION } from "./constonts";

 const instalState = {
     showName: true,
     name: "user"
 };

 export const profileReduser = (state = instalState, action) =>{
    
    switch(action.type){
        case TOGGLE_NAME_ACTION :{
                return{ 
                ...state,
                showName: !state.showName
                }
        }
        default:
            return state;
    }
 };