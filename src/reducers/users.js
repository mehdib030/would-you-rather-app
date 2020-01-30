import {RECEIVE_USERS,SAVE_USER_ANSWER} from '../actions/users'
import {ADD_QUESTION_ID_TO_USER} from '../actions/questions'

export default function users(state = {},action){

    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        case ADD_QUESTION_ID_TO_USER:

            return {
                ...state,
                [action.author]:{
                    ...state[action.author],
                    questions:state[action.author].questions.concat([action.id])
                }
            }
        
        case SAVE_USER_ANSWER:
            return {
                ...state,
                [action.authUser]:{
                    ...state[action.authUser],
                    answers:{[action.id]:action.answer}
                }
            }
        default:
            return state
    }
}