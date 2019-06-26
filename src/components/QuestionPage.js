import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Question'
import NewTweet from './NewQuestion'

class QuestionPage extends Component{

}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { id } = props.match.params
  
    return {
      id,

      //Add answers
         }
  }

export default connect(mapStateToProps)(QuestionPage)