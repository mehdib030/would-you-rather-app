import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav(props){

    let authedUserName = props.authedUserName

    let updateShowLogin =props.updateShowLogin

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/home' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leader' activeClassName='active'>
                        Leader Board
                    </NavLink>
                </li>
                <li>
                    <div>Hello, {authedUserName}</div>
                </li>    
                <li>
                    <NavLink to='/' activeClassName='active' onClick={() => updateShowLogin(true,'')}>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>




    )
}