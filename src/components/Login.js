import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectUser from './SelectUser'
import Button from '@material-ui/core/Button';
import {handleSetAuthedUser} from '../actions/authedUser'
import {Link,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

class Login extends Component {

    state = {
        userSelected:'',
        users:{}
    }

    static propTypes = {
        updateShowLogin:PropTypes.func.isRequired
    } 


    render(){

        const {updateShowLogin} = this.props

       return (
            <div>
                <h3>Sign in</h3>

                <SelectUser selectUser={this.selectUser} users={this.props.users}/>

                <Button variant="contained" color="primary" 
                        onClick={
                            () => {
                                updateShowLogin(false,this.state.userSelected)
                                this.handleClick()
                            }
                        }>
                    Sign in
                </Button>
            </div>
       )
    }

    handleClick = (e) =>{

        if(this.state.userSelected === ""){
            this.props.history.push("/")
        } else {
            this.props.history.push("/home")
        }
        
        
      }

      selectUser = (userSelected) => {
        console.log('SELECTED USER = ',userSelected)
        
        this.setState({
            userSelected:userSelected,
        })
      }

      getUsers = () =>{
            
      }
}

function mapStateToProps(questions,users,authedUser){

    return {
            users:Object.values(users)
    }
} 
//export default connect(mapStateToProps)(Login)
export default withRouter((Login))