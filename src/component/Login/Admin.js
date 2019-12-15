import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/NavBar';
import Users from '../users/Users';
import './admin.css'


export default class Admin extends Component {
constructor(props){
    super(props)
    const token = localStorage.getItem('token')

    let loggedIn = true
    if(token == null){
        loggedIn = false
    }
    this.state = {
        loggedIn, 
        users: [],
    loading: false,
    alert: null
    }
}

  
    async componentDidMount(){
      this.setState({loading:true});
      const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({users: res.data, loading:false });
      console.log(this.state.users);
    }
  

render() {
    const {users, loading } = this.state;
if(this.state.loggedIn === false){
    return <Redirect to = '/' />
}   
return (
        <Router>
            <div className="App">
            <Navbar />
                <div className='container'>
                    <Switch> 
                            <Fragment>
                                
                            <Users loading={loading} users={users} />
                            </Fragment>
                        </Switch>
                </div>
            </div>
        </Router>

    )
  }
}
