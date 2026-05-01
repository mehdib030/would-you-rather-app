import React, {Component} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
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

                      {this.props.authedUserName===""?(
                          <Routes>
                                <Route exact path='/' element={<Login updateShowLogin={this.updateShowLogin}/>}/>
                                <Route path='/home' element={<Login updateShowLogin={this.updateShowLogin}/>}/>
                                <Route path='/question/:id' element={<Login updateShowLogin={this.updateShowLogin}/>} />
                                <Route path='/add' element={<Login updateShowLogin={this.updateShowLogin}/>} />
                                <Route path='/leaderboard' element={<Login updateShowLogin={this.updateShowLogin}/>} />
                                <Route path='/results/:id' element={<Login updateShowLogin={this.updateShowLogin}/>} />
                                <Route path='*' element={<Page404 />} />
                          </Routes>
                           
                         ):( 
                            <div className='container'>
                            <Nav authedUserName={this.props.authedUserName} updateShowLogin={this.updateShowLogin} />
                               <Routes>
                                <Route path='/home' element={<Dashboard />} />
                                <Route path='/question/:id' element={<QuestionPage />} />
                                <Route path='/add' element={<NewQuestion />} />
                                <Route path='/leaderboard' element={<LeaderBoard />} />
                                <Route path='/results/:id' element={<Results />} />
                                <Route path='*' element={<Page404 />} />
                            
                                </Routes>
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
        } 
        this.setState({
            showLogin:state,
        }) 

      }


}

const Page404 = () => (
    <div>
       <h2>Page not found</h2>
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
