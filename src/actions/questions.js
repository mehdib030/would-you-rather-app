import {saveAnswer,saveQuestion} from '../utils/api'
import {saveUserAnswerAction} from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ID_TO_USER = 'ADD_QUESTION_ID_TO_USER'

function addQuestion(question){
    return {
        type:ADD_QUESTION,
        question,
    }
}

function addQuestionIdToUser(questionId,authedUser){
    return {
        type:ADD_QUESTION_ID_TO_USER,
        id: questionId,
        author:authedUser
    }
}

export function handleAddQuestion(optionOne,optionTwo){
    return (dispatch,getState) => {
        const {authedUser} = getState()

        //dispatch(showLoading())
        return saveQuestion({
            optionOneText:optionOne,
            optionTwoText: optionTwo,
            author:authedUser.authedUser,
        }).then((question) => {
            dispatch(addQuestion(question))
            dispatch(addQuestionIdToUser(question.id,authedUser.authedUser))
        })
        //.then(() => dispatch(hideLoading()))
    }
}
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function saveAnswerAction({id,authUser,hasAnswered,answer}){
    return {
        type:SAVE_ANSWER,
        id,
        authUser,
        hasAnswered,
        answer
    }
}

export function handleSaveAnswer({id,hasAnswered,authedUser,answer}){
    return (dispatch,getState) => {
        const {authedUser} = getState()

        const authUser = authedUser.authedUser
        return saveAnswer({ 
            authedUser:authUser, 
            qid:id, 
            answer:answer?answer:"optionOne"
        }).then(() => {
            hasAnswered = false
            answer = answer?answer:"optionOne"
            dispatch(saveAnswerAction({id,authUser,hasAnswered,answer}))
            dispatch(saveUserAnswerAction({id,authUser,hasAnswered,answer}))
        })
        /*  .catch((e)=>{
            console.warn('Error in saveAnswer: ', e)
            dispatch(saveAnswer(question.id,))
            alert('There was an error selecting an answer.Try again.')
            }) 
        */
    }
}