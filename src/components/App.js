import React, {Component,Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Nav from './Nav'

class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render(){
        return(
            <Router>
                <Fragment>
                    <div className='container'>
                        <Nav />
                        <div>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/question/:id' component={QuestionPage} />
                            <Route path='/new' component={NewQuestion} />
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        loading: authedUser === null
    }
}
export default connect()(App)