import {RECEIVE_QUESTIONS,TOGGLE_ANSWER} from '../actions/questions'


export default function questions (state = {},action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case TOGGLE_ANSWER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    answers:action.hasAnswered === true
                    ?state[action.id].answers.filter((uid) => uid !== action.authedUser)
                    :state[action.id].answers.concat([action.authedUser])
                }
            }
        default:
            return state
    }

}