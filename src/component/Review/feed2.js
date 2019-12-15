import React from 'react'; // get the React object from the react module
import Navbar from '../layout/NavBar';
import './feed.css';
import InputRange from 'react-input-range';

class Feed2 extends React.Component {
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
          <label className='label'>B. SUBJECT COMMAND & COMMUNICATION SKILLS</label>
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                       
                       <p>1<label htmlFor="question" className="fa fa-long-arrow-right">Focus on Syllabi</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                   
                       <p>2<label htmlFor="question" className="fa fa-long-arrow-right">Self-confidence</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                   
                       <p>3<label htmlFor="question" className="fa fa-long-arrow-right">Communication skills</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                  
                       <p>4<label htmlFor="question" className="fa fa-long-arrow-right">Conducting classroom discussions</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
               
                       <p>5<label htmlFor="question" className="fa fa-long-arrow-right">Teaching the subject matter</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                    
                       <p>6<label htmlFor="question" className="fa fa-long-arrow-right">Skill of linking subject to life experience & creating intrest in the subject</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />

                       <p>7<label htmlFor="question" className="fa fa-long-arrow-right">Reference to latest developments in the field</label></p>
                       <InputRange maxValue={10} className='slider' minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                   
                       <a href="/feed3"><button type="button" className='btn btn-success'>Next</button></a>
                      <a href="/feed"><button type="button" className="btn btn-success" id='Previous'>Previous</button></a>

                </form>
            </div>
           
        </div>

    );  
  }
}

export default Feed2; 