import React, {Component} from 'react'
//import { constants } from 'zlib';
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import Button from '@material-ui/core/Button';

class NewQuestion extends Component {

    state = {
        optionOneText:'',
        optionTwoText:''
    }

    handleOptionOneChange = (e) => {
        const optionOneText = e.target.value
        this.setState(() => ({
            optionOneText
        }))
    }

    handleOptionTwoChange = (e) => {
        const optionTwoText = e.target.value

        this.setState(() => ({
            optionTwoText
        }))
    }

     handleSubmit = (e) => {
        e.preventDefault()

        var optionOneText = this.state.optionOneText
        var optionTwoText = this.state.optionTwoText
        const {dispatch,id} = this.props
        // Add question to store

        dispatch(handleAddQuestion(optionOneText,optionTwoText))

        this.setState(() => ({
            optionOneText:'',
            optionTwoText:''
        }))

        this.props.history.push("/home")

    }

   render() {
       const {optionOneText} = this.state.optionOneText
       const {optionTwoText} = this.state.optionTwoText

       {/*todo: redirect to / if submitted */}

        const questionsLeft = 100

        return (
            <div>
                <h3 className='center'>Create New Question</h3>

                <form className='new-question' onSubmit={this.handleSubmit}>

                    <div>

                        <p>Would you rather ...</p>

                        <input placeholder="First option" value={optionOneText}
                        onChange={this.handleOptionOneChange} maxLength = {100}/>

                        <p>OR</p>

                        <input placeholder="First option" value={optionTwoText}
                        onChange={this.handleOptionTwoChange} maxLength = {100}/>

                    </div>
                
                    

                    <Button variant="contained" color="primary" type='submit' 
                    disabled = {optionOneText==='' || optionTwoText === ''}>
                                Save
                                </Button>
                
                
                </form>
            </div>
        )



   }

}

export default connect()(NewQuestion)