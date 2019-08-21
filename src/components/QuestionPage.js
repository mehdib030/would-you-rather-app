import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import RadioButtons from './RadioButtons'
import {Link,withRouter} from 'react-router-dom'
import {handleSaveAnswer} from '../actions/questions'

class QuestionPage extends Component{

  state = {
    selectedOption:''
  }

  render(){

    const {authedUser,question,savedOption} = this.props

    return(
        <div>
          <h3>{authedUser.authedUser} asks :</h3>
          <h2>Would you rather</h2>

         <RadioButtons question={question} selectOption={this.selectOption} savedOption={savedOption}/>
           
            <Button variant="contained" color="primary" 
            onClick={this.handleClick(question)}>
              Submit
            </Button>
        </div>
      
    )
  }

  handleClick = (question) => (e) =>{
    e.preventDefault()

    const {dispatch} = this.props

    dispatch(handleSaveAnswer({
      id:question.id,
      hasAnswered: this.props.question.hasAnswered,
      authedUser:this.props.authedUser,
      answer:this.state.selectedOption
    })).then(() => {
      this.props.history.push("/results/"+question.id)
    })
    
  }

  selectOption = (optionSelected) => {
    console.log('SELECTED QUESTION OPTION = ',optionSelected,' QUESTION ID = ',this.props.question.id)
    
    this.setState({
      selectedOption:optionSelected,
    })
  }

}

const Page404 = ({ location }) => (
  <div>
     <h2>No match found for <code>{location.pathname}</code></h2>
  </div>
);

function mapStateToProps ({ authedUser, questions, users }, props) {
     var id  = props.match.params.id
     
     let uid = authedUser.authedUser

     let user = users[uid]

     let savedOption = user.answers[id]
  
    return {
      authedUser:authedUser,
      question:questions[id],
      savedOption:savedOption
    }
  }

export default withRouter(connect(mapStateToProps)(QuestionPage))