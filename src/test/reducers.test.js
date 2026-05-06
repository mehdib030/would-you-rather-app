import authedUserReducer from '../reducers/authedUser'
import questionsReducer from '../reducers/questions'
import usersReducer from '../reducers/users'
import { SET_AUTHED_USER } from '../actions/authedUser'
import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'
import { RECEIVE_USERS, SAVE_USER_ANSWER } from '../actions/users'
import { ADD_QUESTION_ID_TO_USER } from '../actions/questions'

describe('authedUser reducer', () => {
  it('returns the initial state', () => {
    expect(authedUserReducer(undefined, {})).toBeNull()
  })

  it('handles SET_AUTHED_USER', () => {
    const action = {
      type: SET_AUTHED_USER,
      authedUser: 'sarahedo',
    }
    expect(authedUserReducer(null, action)).toEqual({
      authedUser: 'sarahedo',
    })
  })
})

describe('questions reducer', () => {
  it('returns the initial state', () => {
    expect(questionsReducer(undefined, {})).toEqual({})
  })

  it('handles RECEIVE_QUESTIONS', () => {
    const questions = {
      q1: { id: 'q1', author: 'sarahedo' },
    }
    const action = { type: RECEIVE_QUESTIONS, questions }
    expect(questionsReducer({}, action)).toEqual(questions)
  })

  it('handles ADD_QUESTION', () => {
    const question = { id: 'newQ', author: 'sarahedo', optionOne: { text: 'a', votes: [] }, optionTwo: { text: 'b', votes: [] } }
    const action = { type: ADD_QUESTION, question }
    const result = questionsReducer({}, action)
    expect(result.newQ).toEqual(question)
  })

  it('handles SAVE_ANSWER by adding vote when not answered', () => {
    const initialState = {
      q1: {
        id: 'q1',
        optionOne: { text: 'a', votes: [] },
        optionTwo: { text: 'b', votes: [] },
      },
    }
    const action = {
      type: SAVE_ANSWER,
      id: 'q1',
      authUser: 'sarahedo',
      answer: 'optionOne',
      hasAnswered: false,
    }
    const result = questionsReducer(initialState, action)
    expect(result.q1.optionOne.votes).toContain('sarahedo')
  })

  it('handles SAVE_ANSWER by removing vote when already answered', () => {
    const initialState = {
      q1: {
        id: 'q1',
        optionOne: { text: 'a', votes: ['sarahedo'] },
        optionTwo: { text: 'b', votes: [] },
      },
    }
    const action = {
      type: SAVE_ANSWER,
      id: 'q1',
      authUser: 'sarahedo',
      answer: 'optionOne',
      hasAnswered: true,
    }
    const result = questionsReducer(initialState, action)
    expect(result.q1.optionOne.votes).not.toContain('sarahedo')
  })
})

describe('users reducer', () => {
  it('returns the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({})
  })

  it('handles RECEIVE_USERS', () => {
    const users = {
      sarahedo: { id: 'sarahedo', name: 'Sarah Edo' },
    }
    const action = { type: RECEIVE_USERS, users }
    expect(usersReducer({}, action)).toEqual(users)
  })

  it('handles ADD_QUESTION_ID_TO_USER', () => {
    const initialState = {
      sarahedo: { id: 'sarahedo', questions: ['q1'] },
    }
    const action = { type: ADD_QUESTION_ID_TO_USER, id: 'q2', author: 'sarahedo' }
    const result = usersReducer(initialState, action)
    expect(result.sarahedo.questions).toEqual(['q1', 'q2'])
  })

  it('handles SAVE_USER_ANSWER', () => {
    const initialState = {
      sarahedo: { id: 'sarahedo', answers: {} },
    }
    const action = { type: SAVE_USER_ANSWER, id: 'q1', authUser: 'sarahedo', answer: 'optionOne' }
    const result = usersReducer(initialState, action)
    expect(result.sarahedo.answers).toEqual({ q1: 'optionOne' })
  })
})
