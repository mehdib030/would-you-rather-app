import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

function Nav(props){

    let authedUserName = props.authedUserName

    let updateShowLogin =props.updateShowLogin

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/home' className={({isActive}) => isActive ? 'active' : ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' className={({isActive}) => isActive ? 'active' : ''}>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' className={({isActive}) => isActive ? 'active' : ''}>
                        Leader Board
                    </NavLink>
                </li>
                <li>
                    <div>Hello, {authedUserName}</div>
                </li>    
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''} onClick={() => updateShowLogin(true,'')}>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    authedUserName: PropTypes.string.isRequired,
    updateShowLogin: PropTypes.func.isRequired,
}

export default Nav
