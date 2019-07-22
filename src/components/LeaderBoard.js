import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard  extends Component {
    render(){
        return (
            <div>
                <h3>LEADER BOARD</h3>

                <h3 className='center'>Leaders</h3>

                <ul className='dash-list'>
                        {this.props.users.map((user) => (
                            <li key={user.id}>
                                <div>{user.id}</div>
                                <div>{user.name}</div>
                                <div>Answered Questions : {Object.keys(user.answers).length} </div>
                                <div>Created Questions : {user.questions.length}</div>
                                <div>Score : {user.questions.length + Object.keys(user.answers).length}</div>
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions,users}){


    return {
        
        users:Object.values(users)
        .sort((a,b)=>{

            var aSize = a.questions.length + Object.keys(a.answers).length
            var bSize = b.questions.length + Object.keys(b.answers).length

            console.log(' aSize = ',aSize,' bSize = ',bSize)
        
           return (aSize > bSize) ? -1 : 1;
        })}
    
}

export default connect(mapStateToProps)(LeaderBoard)