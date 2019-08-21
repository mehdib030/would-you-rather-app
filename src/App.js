import React, {Component,Fragment} from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from './actions/shared'
import Dashboard from './components/Dashboard'
import NewQuestion from './components/NewQuestion'
import QuestionPage from './components/QuestionPage'
import LeaderBoard from './components/LeaderBoard'
import Results from './components/Results'
import Nav from './components/Nav'
import Login from './components/Login'
import {handleSetAuthedUser} from './actions/authedUser'

class App extends Component {

    state = {
        showLogin:true,
        authedUser:''
    }

    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render(){
        return(
            <BrowserRouter>
                 <div className="app" >

                      {this.props.authedUserName===""?( //TODO: use redux-persist
                          <Switch>
                                 <Route exact path='/' render={()=>(<Login updateShowLogin={this.updateShowLogin}/>)}/>
                                <Route path='/home'  render={()=>(<Login updateShowLogin={this.updateShowLogin}/>)}/>
                                <Route path='/question/:id'  render={()=>(<Login updateShowLogin={this.updateShowLogin}/>)} />
                                <Route path='/add'  render={()=>(<Login updateShowLogin={this.updateShowLogin}/>)} />
                                <Route path='/leaderboard'  render={()=>(<Login updateShowLogin={this.updateShowLogin}/>)} />
                                <Route path='/results/:id'  render={()=>(<Login updateShowLogin={this.updateShowLogin}/>)} />
                                <Route component={Page404} />
                          </Switch>
                           
                         ):( 
                            <div className='container'>
                            <Nav authedUserName={this.props.authedUserName} updateShowLogin={this.updateShowLogin} />
                               <Switch>
                                <Route path='/home' component={Dashboard} />
                                <Route path='/question/:id' component={QuestionPage} />
                                <Route path='/add' component={NewQuestion} />
                                <Route path='/leaderboard' component={LeaderBoard} />
                                <Route path='/results/:id' component={Results} />
                                <Route component={Page404} />
                            
                                </Switch>
                            </div>
                      )}
              </div>
            </BrowserRouter>
           
        )
    }

    updateShowLogin = (state,selectedUser) => {
       const {dispatch} = this.props
       
        dispatch(handleSetAuthedUser(selectedUser))

        if(selectedUser === "") {
            state =true
           // this.props.history.push("/")
        } 
        this.setState({
            showLogin:state,
        }) 

      }


}

const Page404 = ({ location }) => (
    <div>
       <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
 );


function mapStateToProps({authedUser,question,users},props){
     const map = new Map(Object.entries(users))

     let name =''
     let userName = '' 
     let user =null

     if(Object.entries(users).length > 0){
        if(authedUser) {
            userName = authedUser.authedUser
            user = map.get(userName)
        }
     }

     if(user){
         name = user.name
     }
        
    
    return {
        authedUserName:name,
    }
}
export default connect(mapStateToProps)(App)