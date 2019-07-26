import React, {Component} from 'react'
import {connect} from 'react-redux'


class Results extends Component {

    render(){

        const {authedUser,question,total,optionOnePercentVote,optionTwoPercentVote,optionOneTotal,optionTwoTotal} = this.props

       return (
            <div>
                <h3>Asked by {question.author}</h3>
                <h2>Results</h2>

                <div>{question.optionOne.text}</div>
                <div>{optionOnePercentVote}%</div>
                <div>{optionOneTotal}</div>
                <div>{question.optionOne.votes.length} out of {total} votes</div>

                <div>{question.optionTwo.text}</div>
                <div>{optionTwoPercentVote}%</div>
                <div>{optionTwoTotal}</div>
                <div>{question.optionTwo.votes.length} out of {total} votes</div>
            
            </div>
       )
    }
}

function mapStateToProps({authedUser,questions,users},props){
    const id  = props.match.params.id

    const question = questions[id]

    const total = question.optionOne.votes.length + question.optionTwo.votes.length
    
    const optionOnePercentVote = (question.optionOne.votes.length / total)*100;

    const optionTwoPercentVote = (question.optionTwo.votes.length / total)*100;

    const optionOneTotal = question.optionOne.votes.length
    const optionTwoTotal = question.optionTwo.votes.length


    return {
      total:total,
      optionOnePercentVote:optionOnePercentVote,
      optionTwoPercentVote:optionTwoPercentVote,
      authedUser:authedUser,
      question:questions[id],
      optionOneTotal:optionOneTotal,
      optionTwoTotal:optionTwoTotal
    }
}
export default connect(mapStateToProps)(Results) 