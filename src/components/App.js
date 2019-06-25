import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'

class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render(){
        return(
            <div>
                Starter Code
                {
                    this.props.loading === true?null:<NewQuestion/>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        loading: authedUser === null
    }
}
export default connect()(App)