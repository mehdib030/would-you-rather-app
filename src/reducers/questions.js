import {RECEIVE_QUESTIONS,SAVE_ANSWER, ADD_QUESTION} from '../actions/questions'


export default function questions (state = {},action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    //[action.answer]:action.hasAnswered === true
                    //?state[action.id].answers.filter((uid) => uid !== action.authedUser)
                    //://state[action.id][action.answer].concat([action.authedUser])
                    [action.answer]: action.hasAnswered === true?
                    {
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.filter((uid) => uid !== action.authUser)
                   
                    }
                    :
                    {
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat([action.authUser])
                    }
                }
            }
        case ADD_QUESTION:
            const {question} = action
            console.log('REDUCER: ADDING A QUESTION')
            return {
                ...state,
                [action.question.id]: action.question,
            }
            
        default:
            return state
    }

}