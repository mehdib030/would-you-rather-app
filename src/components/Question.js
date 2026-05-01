import React, {Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers' 
import {withRouter} from '../utils/withRouter'

class Question extends Component {

    toParent = (e,id) => {
        e.preventDefault()
    }

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

function mapStateToProps({authedUser,users,questions},{id}){
    const question = questions[id] 
    const parentQuestion = question ? questions[question.author]:null
    let questionPreformatted = {
        id:question.id,
        optionOneText:question.optionOne.text,
        optionTwoText:question.optionTwo.text,
        author:question.author
    }

    return {
        authedUser,
        question:question
        
           
    }
}

export default withRouter(connect(mapStateToProps)(Question))
