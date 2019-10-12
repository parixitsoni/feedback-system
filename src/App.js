import React, {Component} from 'react';
import Navbar from './component/layout/NavBar';
import Users from './component/users/Users';
import Search from './component/users/search';
import axios from 'axios';
import './App.css';


class App extends Component {
state={
  users: [],
  loading: false
};
  async componentDidMount(){
    this.setState({loading:true});
    const res = await axios.get('https://api.github.com/users');
    this.setState({users: res.data, loading:false });
    console.log(this.state.users);
  }


  render(){ 
    return (
    <div className="App">
      <Navbar/>
        <div className='container'>
              <Search searchUsers={this.searchUsers}/>
             <Users loading={this.state.loading} users={this.state.users} />
        </div>
    </div>
  );
}
}

export default App;
