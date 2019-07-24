import React, {Component,Fragment} from 'react'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from './actions/shared'
import Dashboard from './components/Dashboard'
import NewQuestion from './components/NewQuestion'
import QuestionPage from './components/QuestionPage'
import LeaderBoard from './components/LeaderBoard'
import Results from './components/Results'
import Nav from './components/Nav'
import Login from './components/Login'
import Logout from './components/Logout'
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
                    {this.state.showLogin ? (

                            <Route exact path='/' render={()=>(<Login updateShowLogin={this.updateShowLogin}/>)}/>
                        
                    ):(
                        <div className='container'>
                                <Nav authedUserName={this.props.authedUserName} updateShowLogin={this.updateShowLogin}/>
                               
                                <div>
                                    <Route path='/home' exact component={Dashboard} />
                                    <Route path='/question/:id' component={QuestionPage} />
                                    <Route path='/new' component={NewQuestion} />
                                    <Route path='/leader' component={LeaderBoard} />
                                    <Route path='/results/:id' component={Results} />
                                    <Route path='/'/>
                                    
                                </div>
                            </div>
                    )}
              </div>
            </BrowserRouter>
           
        )
    }

    updateShowLogin = (state,selectedUser) => {
       console.log('NEW STATE = ',state)
       const {dispatch} = this.props
       
        dispatch(handleSetAuthedUser(selectedUser))

        this.setState({
            showLogin:state,
        }) 
       
      }


}



function mapStateToProps({authedUser,questiosn,users},props){
    //let userList = Object.values(users)
     //let user = userList.filter(user => user.id === authedUser)

     const map = new Map(Object.entries(users))

     let name =''

     let userName = '' 

     let user =null

     if(Object.entries(users).length > 0){
        if(authedUser) {
            userName = authedUser.authedUser
            user = map.get(userName)//.filter(user => user.id === userName)
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