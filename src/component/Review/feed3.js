import React from 'react'; // get the React object from the react module
import Navbar from '../layout/NavBar';
import './feed.css';
import InputRange from 'react-input-range';

class Feed3 extends React.Component {
  constructor(){
    super();
    this.state = {
      value:5
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }
  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();


  }
  render() {
    return(
        <div>
          <Navbar />
          
           <label className='label'>C. TEACHING SKILLS</label>
            <div className='container'>

            <form onSubmit={this.handleSubmit}>
                       
                       <p>1<label htmlFor="question" className="fa fa-long-arrow-right">Uses of teaching aids (OHP/Blackboard/PPT's)</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                   
                       <p>2<label htmlFor="question" className="fa fa-long-arrow-right">Blackboard/Whiteboard work in terms of legibility, visibility and structure</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                   
                       <p>3<label htmlFor="question" className="fa fa-long-arrow-right">Uses of innovation teaching methods</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                  
                       <p>4<label htmlFor="question" className="fa fa-long-arrow-right">Shares the answers of class tests or sessional test questions</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
               
                       <p>5<label htmlFor="question" className="fa fa-long-arrow-right">Shows the evaluated answer books of class tests to the students</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                    

                       <a href="/"><button type="button" className='btn btn-success'>Submit</button></a>
                       <a href="/feed2"><button type="button" className="btn btn-success" id='Previous'>Previous</button></a>
                </form>
            </div>

        </div>

    );
  }
}

export default Feed3; 