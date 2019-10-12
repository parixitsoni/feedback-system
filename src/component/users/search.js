import React, { Component } from 'react'

export class search extends Component {
    state ={
        text: ''
    };
    onSubmit(e) {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="form"> 
                    <input type="text" name="text" placeholder="serach users....." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

            </div>
        )
    }
}

export default search
