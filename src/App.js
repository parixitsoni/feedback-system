import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashbord from './component/layout/Dashbord';
import Feed from './component/Review/feed';
import Feed2 from './component/Review/feed2';
import Feed3 from './component/Review/feed3';
import Login from './component/Login/Login';
import Admin from './component/Login/Admin';
import Logout from './component/Login/Logout';

// import './App.css';

class App extends Component {

  render(){ 
    
    return (   
  
<Router>
    <div className="App">

          <Switch> 
     
                <Route exact path='/' component={Login}/> 
                <Route path='/Admin' component={Admin}/> 
                <Route exact path='/Dashbord' component={Dashbord}/> 
                <Route path='/Logout' component={Logout}/> 
                <Route exact path='/feed' component ={Feed}/>
                <Route exact path='/feed2' component={Feed2}/>
                <Route exact path='/feed3' component={Feed3}/>
                {/* <Route exact path='/' component={A}/>
                <Route exact path='/b' component={B}/> */}
          </Switch>
          
     </div>
</Router>
);
}
}
// const A = () => {
//   return(
//     <div>
//         <h1>Page - A</h1>
//         <Link to ='/b'> A Component</Link>
//     </div>
//   )
// }

// const B = () => {
//   return(
//     <div>
//         <h1>B page</h1>
//         <Link to ='/'> B Component</Link>
//     </div>
//   )
// }
export default App;

