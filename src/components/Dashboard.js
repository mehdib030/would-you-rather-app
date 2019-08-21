import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import QuestionTabs from './QuestionTabs'

class Dashboard extends Component {
    render(){
        return (
            <div>
               
                <QuestionTabs unansweredQuestions={this.props.unansweredQuestions} 
                              answeredQuestions={this.props.answeredQuestions} />

            </div>
        )
    }
}

function mapStateToProps({authedUser,questions,users}){
    let unansweredQuestions =[]
    let answeredQuestions =[]

    let quests = Object.values(questions)

    quests.map((question) => {
         if(authedUser && (question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0 ) 
         && (question.optionOne.votes.find(userid => userid === authedUser.authedUser) 
             || question.optionTwo.votes.find(userid => userid === authedUser.authedUser))){
            answeredQuestions.push(question.id)
         } else {
            unansweredQuestions.push(question.id)
         }
         
    }
    )
    return {
        answeredQuestions:  answeredQuestions.sort((a,b)=>questions[b].timestamp - questions[a].timestamp), 
        unansweredQuestions: unansweredQuestions.sort((a,b)=>questions[b].timestamp - questions[a].timestamp), 
    
        users:Object.values(users)
          
    }
}


export default connect(mapStateToProps)(Dashboard)