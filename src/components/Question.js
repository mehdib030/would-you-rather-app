import React, {Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'
//import {handleToggleAnswer} from '../actions/questions' 
import {Link,withRouter} from 'react-router-dom'

class Question extends Component {

   /*  handleSelectOption = (e) => {
        e.preventDefault()

        const {dispatch,question,authedUser} = this.props

        dispatch(handleToggleAnswer({
            id:question.id,
            hasAnswered: question.hasAnswered,
            authedUser
        }))
    }
 */
    toParent = (e,id) => {
        e.preventDefault()
    }

    render(){
        const {question} = this.props

        if(question === null){
            return <p>This Question does not exist</p>
        }

       /*  const {
            name,author,timestamp,optionOne,optionTwo
        } = question */

        return (

            <div className='question'>

            {/* <img src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                />  */}

                <div>AVATAR</div>
                <div>{question.id}</div>
                <div>{question.timestamp}</div>
                <div>{question.name}</div>
               
                <div>{question.optionOne? question.optionOne.text:null}</div>
                <div>{question.optionTwo? question.optionTwo.text:null}</div>
                <div>{question.author}</div>
                <div className='question-info'>
                
                    <div>
                            {/* <span>{name}</span> */}
                            
                            <button type='button' className='' onClick={this.handleViewPoll(question.id)} >
                                View Poll
                            </button>

                    </div>
                </div>

            </div>


        )
    }

    handleViewPoll = (id) => (e) => {
        e.preventDefault()
    
        console.log('VIEWING THE POLL ID = ',id)

        this.props.history.push("/question/"+id)
    
        // console.log('New question: option one : ',optionOneText,
        // ' and option two',optionTwoText)
    
       // dispatch(handleAddQuestion(optionOneText,optionTwoText))
        //dispatch(handleAddQuestion(optionTwoText))
    
       /*  this.setState(() => ({
            optionOneText:'',
            optionTwoText:''
        })) */
    
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
        
        //questionPreformatted
        //?formatQuestion(questionPreformatted):null
           
    }
}

export default withRouter(connect(mapStateToProps)(Question))