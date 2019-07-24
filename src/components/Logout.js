import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectUser from './SelectUser'
import Button from '@material-ui/core/Button';
import {handleSetAuthedUser} from '../actions/authedUser'
import {Link,withRouter} from 'react-router-dom'

class Logout extends Component {

    state = {
        userSelected:'',
        users:{}
    }


    render(){

       return (
            <div>
            </div>
       )
    }

    handleClick = (user) => (e) =>{

        e.preventDefault()
       
            
      }
}

function mapStateToProps(questions,users,authedUser){

    return {
            users:Object.values(users)
    }
}
export default withRouter(connect(mapStateToProps)(Logout))