import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {PostData} from '../../services/PostData';
// import UserFeed from '../UserFeed/UserFeed';
import TeacherNavBar from '../layout/TeacherNavbar';


export default class Admin extends Component {
constructor(props){
    super(props)
    this.state = {
        data:[],
        userFeed: '',
        redirectToReferrer: false,
    }
    this.getUserFeed = this
    .getUserFeed
    .bind(this);
}
componentWillMount() {

    if(sessionStorage.getItem("userData")){
     this.getUserFeed();
    }
   
    else{
     this.setState({redirectToReferrer: true});
    }
    
 
   }
   getUserFeed() {
  
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, token: data.userData.token}; 

    if (data) {
      PostData('feed', postData).then((result) => {
        let responseJson = result;
        this.setState({data: responseJson.feedData});
        console.log(this.state);
      });
    }
    
  }

  onChange(e){
    this.setState({userFeed:e.target.value});
   }
 
render() {
   
  
return (
<Router>
    <div className="App">
    <TeacherNavBar />
        <div className='container'>
            <Switch> 
                <Fragment>     
                    
                </Fragment>
            </Switch>
        </div>
    </div>
</Router>

    )
  }
}

