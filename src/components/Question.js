import React, {Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'
import {handleToggleAnswer} from '../actions/questions' 
import {Link,withRouter} from 'react-router-dom'

class Question extends Component {

    handleSelectOption = (e) => {
        e.preventDefault()

        const {dispatch,question,authedUser} = this.props

        dispatch(handleToggleAnswer({
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
            name,author,timestamp,optionOne,optionTwo
        } = question

        return (

            <div className='question'>

            {/* <img src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                />  */}

                <div>AVATAR</div>
            
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
            ? formatQuestion(question,users[question.author],authedUser):null
    }
}

export default connect(mapStateToProps)(Question)