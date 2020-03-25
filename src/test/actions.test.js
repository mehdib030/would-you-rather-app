import * as actions from '../actions/questions'

describe('actions',() => {

     it('should create an action to add a todo', () => {

            const question = 'Did Borg win the US Open?'

            const expectedAction = {
                type: actions.ADD_QUESTION,
                question
            }
            expect(actions.addQuestion(question)).toEqual(expectedAction)

     })



})