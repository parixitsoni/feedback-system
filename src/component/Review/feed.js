import React from "react";
import "./feed.css";
import axios from "axios";
import Navbar from '../layout/NavBar';
import InputRange from 'react-input-range';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    axios({
      method: "post",
      url: `http://localhost/backend/index.php`,
      headers: { "content-type": "application/json" },
    })
      .then(result => console.log(result))
      .catch(error => this.setState({ error: error.message }));
  }
  render() {
    return (
      <div>
        <Navbar />
        <label className="label">A. TIME MANAGEMENT SKILLS</label>

  <div className="container">
  <form onSubmit={this.handleSubmit}>
    <p>1<label htmlFor="question" className="fa fa-long-arrow-right">Punctuality in the Class</label></p>
    <InputRange maxValue={10}  name='rate' className='slider' minValue={0} value={this.state.value} 
    onChange={value => this.setState({ value })} />
    for (let i = 0; i < 10;i++){
}
    <input type="submit" value="Submit" />


  </form>
  </div>

    
      </div>
    );
  }
}

export default Feed;
