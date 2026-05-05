import React from 'react'
import PropTypes from 'prop-types'

function LeaderBoardItem({ user }) {
    return (
        <li>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>Answered Questions : {Object.keys(user.answers).length} </div>
            <div>Created Questions : {user.questions.length}</div>
            <div>Score : {user.questions.length + Object.keys(user.answers).length}</div>
        </li>
    )
}

LeaderBoardItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        answers: PropTypes.object.isRequired,
        questions: PropTypes.array.isRequired,
    }).isRequired,
}

export default LeaderBoardItem
