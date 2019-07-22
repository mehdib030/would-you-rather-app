import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectUser from './SelectUser'
import Button from '@material-ui/core/Button';
import {handleSetAuthedUser} from '../actions/authedUser'
import {Link,withRouter} from 'react-router-dom'

class Login extends Component {

    state = {
        userSelected:'',
    }


    render(){

       return (
            <div>
                <h3>Sign in</h3>

                <SelectUser selectUser={this.selectUser}/>

                <Button variant="contained" color="primary" 
                        onClick={this.handleClick(this.state.userSelected)}>
                    Sign in
                </Button>
            </div>
       )
    }

    handleClick = (user) => (e) =>{

        e.preventDefault()
        const {dispatch} = this.props

        console.log('SAVING SELECTED USER = ',user)

        dispatch(handleSetAuthedUser(user)) 
           
        this.props.history.push("/home")
        
      }

      selectUser = (userSelected) => {
        console.log('SELECTED USER = ',userSelected)
        
        this.setState({
            userSelected:userSelected,
        })
      }
}

function mapStateToProps(questions,users,authedUser){

    return {

    }
}
export default withRouter(connect(mapStateToProps)(Login))