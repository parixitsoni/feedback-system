import React, { Component } from 'react'

export class search extends Component {
    render() {
        return (
            <div>
                <form className="form"> 
                    <input type="text" name="text" placeholder="serach users....." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

            </div>
        )
    }
}

export default search
