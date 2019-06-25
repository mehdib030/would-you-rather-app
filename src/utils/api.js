import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from '../../_DATA.js'

export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users,questions]))
}

export function saveAnswerToggle(info){
    return _saveQuestionAnswer
}

export function saveQuestion(info){
    return _saveQuestion
}

