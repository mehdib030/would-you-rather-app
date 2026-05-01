import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectUser from './SelectUser'
import Button from '@mui/material/Button'
import {handleSetAuthedUser} from '../actions/authedUser'
import {withRouter} from '../utils/withRouter'
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
            this.props.navigate("/")
        } else {

            if(this.props.location.pathname==="/"){
                this.props.navigate("/home")
            } else {
                this.props.navigate(this.props.location.pathname)
            }
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


export default withRouter(Login)
