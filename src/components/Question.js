import React, {Component } from 'react'
import {connect} from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import {handleToggleAnswer} from '../actions/questions'

class Question extends Component {

    handleSelectOption = (e) => {
        e.preventDefault()

        const {dispatch,question,authedUser} = this.props

        dispatch(andleToggleAnswer({
            id:question.id,
            hasAnswered: question.hasAnswered,
            authedUser
        }))
    }

    toParent = (e,id) => {
        e.preventDefault()
    }

    render(){
        const {question} = this.props

        if(question === null){
            return <p>This Question does not exist</p>
        }

        const {
            author,timestamp,optionOne,optionTwo
        } = question

        return (

            <div className='question'>
                <img src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                />
            
                <div className='question-info'>
                
                    <div>
                            <span>{name}</span>

                            <button className='' onClick={this.handleLike}>
                                Submit
                            </button>

                    </div>
                </div>

            </div>


        )
    }
}

function mapStateToProps({authedUser,users,questions},{id}){
    const question = questions[id] 
    const parentQuestion = question ? questions[question.author]:null

    return {
        authedUser,
        question:question
            ? formatQuestion(question,users[question.author],authedUser,parentQuestion):null
    }
}

export default connect(mapStateToProps)(Question)