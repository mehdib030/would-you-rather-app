import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import RadioButtons from './RadioButtons'
import {handleSaveAnswer} from '../actions/questions'
import {withRouter} from '../utils/withRouter'

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
      this.props.navigate("/results/"+question.id)
    })
    
  }

  selectOption = (optionSelected) => {
    this.setState({
      selectedOption:optionSelected,
    })
  }

}

QuestionPage.propTypes = {
    authedUser: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    savedOption: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
}

function mapStateToProps ({ authedUser, questions, users }, props) {
     var id  = props.params.id
     
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
