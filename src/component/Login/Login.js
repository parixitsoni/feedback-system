import React, { Component } from 'react'
// import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './admin.css';

export default class Login extends Component {
constructor(props){
    super(props)
    const token = localStorage.getItem('token')

    let loggedIn = true
    if(token == null){
        loggedIn = false
    }
    
    
    this.state = {
        username: '',
        password: '',
        loggedIn
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    
}

onChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
submitForm(e){
    e.preventDefault()
    const {username,password}= this.state
    if(username === 'a' && password ==='b')
        localStorage.setItem('token', 'sefuiidrufhuidofhosh65465dsads')
        this.setState({ 
            loggedIn: true
        })
}

render(){
 
    if(this.state.loggedIn){
        return <Redirect to ='/Admin' />

    }
    return(
<div>
   
  <MuiThemeProvider>
    <div className='container'>
        <Card className='float-left h-100 d-inline-block cardMain' style={{width:'20rem'}}>
      {/* <AppBar title="Login" className='btn btn-toolbar'></AppBar> */}
      <form onSubmit={ this.submitForm} className='form-control'>
          <label>Login</label>
      <TextField hintText="Enter your Username" floatingLabelText="Username" value={this.state.username} onChange={(event, newValue) => this.setState({ username: newValue })} />

      <br />
        <br/>
      <TextField type="password" hintText="Enter your Password" floatingLabelText="Password" value={this.state.password} onChange={(event, newValue) => this.setState({ password: newValue })} />
      <br />
      <br />
      <RaisedButton label="Submit" type='submit' className='button' primary={true}/>
      
      </form>
      </Card>
    </div>
  </MuiThemeProvider>
</div>
        
        )
    }
}
