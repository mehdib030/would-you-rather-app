import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    render(){
        return (
            <div>
                <h3 className='center'>Questions</h3>

                <ul className='dash-list'>
                    {this.props.questionIds.map((id) =>(
                        <li key={id}>
                            <Question id={id}/>
                        </li>
                    ))}
                </ul>

                <h3 className='center'>Users</h3>

                <ul className='dash-list'>
                        {this.props.users.map((user) => (
                            <li key={user.id}>
                                <div>{user.id}</div>
                                <div>{user.name}</div>
                                <div>{user.questions}</div>
                                
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions,users}){
    return {
        questionIds: Object.keys(questions),
        users:Object.values(users)
           // .sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)