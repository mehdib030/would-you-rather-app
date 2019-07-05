import {saveAnswerToggle,saveQuestion} from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const TOGGLE_QUESTION = 'TOGGLE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(question){
    return {
        type:ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(optionOne,optionTwo){
    console.log('1-HANDLE QUESTION')
    return (dispatch,getState) => {
        const {authedUser} = getState()

        //dispatch(showLoading())

        console.log('*** AUTHED USER : ',authedUser)

        console.log('*** OPTION ONE : ',optionOne)

        console.log('*** OPTION TWO : ',optionTwo)

        return saveQuestion({
            optionOneText:optionOne,
            optionTwoText: optionTwo,
            author:authedUser,
        }).then((question) => dispatch(addQuestion(question)))
       // .then()
        //.then(() => dispatch(hideLoading()))
    }
}

/* export function handleAddTweet (text, replyingTo) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
  
      dispatch(showLoading())
  
      return saveTweet({
        text,
        author: authedUser,
        replyingTo
      })
        .then((tweet) => dispatch(addTweet(tweet)))
        .then(() => dispatch(hideLoading()))
    }
  } */
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function toggleAnswer({id,authedUser,hasAnswered}){
    return {
        type:TOGGLE_QUESTION,
        id,
        authedUser,
        hasAnswered
    }
}

export function handleToggleAnswer(question){
    return (dispatch) => {
        dispatch(toggleAnswer(question))

        return saveAnswerToggle(question)
                .catch((e)=>{
                    console.warn('Error in handleToggleAnswer: ', e)
                    dispatch(toggleAnswer(question))
                    alert('There was an error selecting an answer.Try again.')
                })
    }
}