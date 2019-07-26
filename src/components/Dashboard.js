import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    render(){
        return (
            <div>
               

                <h3 className='center'>Unanswered Questions</h3>
                <ul className='dash-list-1'>
                    {this.props.unansweredQuestions1.map((id) => (
                        <li key={id}>
                            <Question id={id}/>
                        </li>
                    ))}
                </ul>

                <h3 className='center'>Answered Questions</h3>

                <ul className='dash-list'>
                    {this.props.answeredQuestions1.map((id) => (
                        <li key={id}>
                            <Question id={id}/>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}

function mapStateToProps({authedUser,questions,users}){
    let unansweredQuestions =[]
    let answeredQuestions =[]

    let quests = Object.values(questions)

    quests.map((question) => {
         if((question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0 ) 
         && (question.optionOne.votes.find(userid => userid === authedUser.authedUser) 
             || question.optionTwo.votes.find(userid => userid === authedUser.authedUser))){
            answeredQuestions.push(question.id)
         } else {
            unansweredQuestions.push(question.id)
         }
         
    }
    )
    return {
        answeredQuestions1:  answeredQuestions.sort((a,b)=>questions[b].timestamp - questions[a].timestamp), 
        unansweredQuestions1: unansweredQuestions.sort((a,b)=>questions[b].timestamp - questions[a].timestamp), 
    
        users:Object.values(users)
          
    }
}


export default connect(mapStateToProps)(Dashboard)