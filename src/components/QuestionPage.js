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

    const {authedUser,question} = this.props

    return(
        <div>
          <h3>{authedUser.authedUser} asks :</h3>
          <h2>Would you rather</h2>

         <RadioButtons question={question} selectOption={this.selectOption}/>
           
            <Button variant="contained" color="primary" 
            onClick={this.handleClick(question.id)}>
              Submit
            </Button>
        </div>
      
    )
  }

  handleClick = (id) => (e) =>{
    e.preventDefault()

    const {dispatch} = this.props

    dispatch(handleSaveAnswer({
      id:id,
      hasAnswered: this.props.question.hasAnswered,
      authedUser:this.props.authedUser,
      answer:this.state.selectedOption
    })).then(() => {
      this.props.history.push("/results/"+id)
    })
    
  }

  selectOption = (optionSelected) => {
    console.log('SELECTED QUESTION OPTION = ',optionSelected,' QUESTION ID = ',this.props.question.id)
    
    this.setState({
      selectedOption:optionSelected,
    })
  }

}

function mapStateToProps ({ authedUser, questions, users }, props) {
     var id  = props.match.params.id
  
    return {
      authedUser:authedUser,
      question:questions[id]
    }
  }

export default withRouter(connect(mapStateToProps)(QuestionPage))