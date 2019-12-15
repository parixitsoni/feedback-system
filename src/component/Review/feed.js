import React from "react";
import "./feed.css";
import axios from "axios";
import Navbar from '../layout/NavBar';
import InputRange from 'react-input-range';
// import 'react-input-range/lib/css/index.css';
 

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // arrayvar: this.state.arrayvar.concat([newelement])
      value: 0,
      // value1:0,
      // value2: 0,
      // value3:0,
      // value4: 0,
      // value5:0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value});
    // let obj = {};
    // obj[e.target.name] = e.target.value;
    // this.setState(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    // console.log(this.state.value1);
    // console.log(this.state.value2);
    // console.log(this.state.value3);
    // console.log(this.state.value4);
    // console.log(this.state.value5);
    // alert('Your favorite flavor is: ' + this.state.value);
    // let formData = new FormData();
    // formData.append('value', this.state.value)
    // console.log(formData);
    axios({
      method: "post",
      url: `http://localhost/backend/index.php`,
      headers: { "content-type": "application/json" },
      // data: this.state
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
            {/* <input type="range" className="slider" id="customRange1" min="0" max="10" value={this.state.value} onChange={e => this.setState({value: e.target.value})} /> */}
            <InputRange maxValue={10}  name='rate' className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />

           {/* <p>2<label htmlFor="question" className="fa fa-long-arrow-right">Regularity in taking Classes</label></p>
            <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value1} onChange={value1 => this.setState({ value1 })} />

            <p>3<label htmlFor="question" className="fa fa-long-arrow-right">Student's attendance/presence in the class of teacher who is being evaluated</label></p>
            <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value2} onChange={value2 => this.setState({ value2 })} />

            <p>4<label htmlFor="question" className="fa fa-long-arrow-right">Completes syllabus of the course as per teaching plan</label></p>
            <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value3} onChange={value3 => this.setState({ value3 })} />

            <p>5<label htmlFor="question" className="fa fa-long-arrow-right">Scheduled organization of assignments, class, test, quizzes and seminars</label></p>
            <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value4} onChange={value4 => this.setState({ value4 })} />

            <p>6<label htmlFor="question" className="fa fa-long-arrow-right">Makes alternate arrangement of class in his/her absence</label></p>
            <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value5} onChange={value5 => this.setState({ value5 })} />
 */}

            <input type="submit" value="Submit" />
            {/* <a href="/feed2"><button type="button" className="btn btn-success">Next</button></a> */}
         
       
          </form>
        </div>

    
      </div>
    );
  }
}

export default Feed;
