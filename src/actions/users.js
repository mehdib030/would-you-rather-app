export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_ID_TO_USER = 'ADD_QUESTION_ID_TO_USER'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER' 



export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}

 export function addQuestionToUser(questionId){
    return {
        type:ADD_QUESTION_ID_TO_USER,
        questionId
    }
} 

export function saveUserAnswerAction({id,authUser,hasAnswered,answer}){
    return {
        type:SAVE_USER_ANSWER,
        id,
        authUser,
        hasAnswered,
        answer
    }
}

