import React, {Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from '../utils/withRouter'

class Question extends Component {

    render(){
        const {question,isAnswered} = this.props

        if(question === null){
            return <p>This Question does not exist</p>
        }

        return (

            <div className='question'>

                <div>AVATAR</div>
                <div>{question.id}</div>
                <div>{question.timestamp}</div>
                <div>{question.name}</div>
               
                <div>{question.optionOne? question.optionOne.text:null}</div>
                <div>{question.optionTwo? question.optionTwo.text:null}</div>
                <div>{question.author}</div>
                <div className='question-info'>
                
                    <div>
                            
                            <button type='button' className='' onClick={this.handleViewPoll(question.id,isAnswered)} >
                                View Poll
                            </button>

                    </div>
                </div>

            </div>


        )
    }

    handleViewPoll = (id,isAnswered) => (e) => {
        e.preventDefault()
    
       if(isAnswered){
        this.props.navigate("/results/"+id)
       } else {
        this.props.navigate("/question/"+id)
       }
    
    }
}

Question.propTypes = {
    question: PropTypes.object,
    isAnswered: PropTypes.bool.isRequired,
    navigate: PropTypes.func.isRequired,
}

function mapStateToProps({authedUser,questions},{id}){
    const question = questions[id] 

    return {
        authedUser,
        question:question
    }
}

export default withRouter(connect(mapStateToProps)(Question))
