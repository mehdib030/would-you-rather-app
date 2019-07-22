import React, {Component,Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from './actions/shared'
import Dashboard from './components/Dashboard'
import NewQuestion from './components/NewQuestion'
import QuestionPage from './components/QuestionPage'
import LeaderBoard from './components/LeaderBoard'
import Results from './components/Results'
import Nav from './components/Nav'
import Login from './components/Login'

class App extends Component {

    state = {
        visibleNav:false,
    }

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
                            <Route path='/home' exact component={Dashboard} />
                            <Route path='/question/:id' component={QuestionPage} />
                            <Route path='/new' component={NewQuestion} />
                            <Route path='/leader' component={LeaderBoard} />
                            <Route path='/results/:id' component={Results} />
                            <Route path='/' exact component={Login} />
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