import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users,questions]) => ({
        users,
        questions,
    }))
}

export function saveAnswer({authedUser,qid,answer}){
    return _saveQuestionAnswer({authedUser,qid,answer})
}

export function saveQuestion(question){
    console.log('*** SAVING QUESTION')
    return _saveQuestion(question)
}

