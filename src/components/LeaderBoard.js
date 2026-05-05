import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LeaderBoardItem from './LeaderBoardItem'

class LeaderBoard  extends Component {
    render(){
        return (
            <div>
                <h3>LEADER BOARD</h3>

                <h3 className='center'>Leaders</h3>

                <ul className='dash-list'>
                        {this.props.users.map((user) => (
                            <LeaderBoardItem key={user.id} user={user} />
                        ))}
                </ul>
            </div>
        )
    }
}

LeaderBoard.propTypes = {
    users: PropTypes.array.isRequired,
}

function mapStateToProps({users}){

    return {
        
        users:Object.values(users)
        .sort((a,b)=>{

            var aSize = a.questions.length + Object.keys(a.answers).length
            var bSize = b.questions.length + Object.keys(b.answers).length

        
           return (aSize > bSize) ? -1 : 1;
        })}
    
}

export default connect(mapStateToProps)(LeaderBoard)
