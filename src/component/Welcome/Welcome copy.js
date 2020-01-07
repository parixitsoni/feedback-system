import React, {Component} from 'react';

class Welcome extends Component {
  render() {
    return (
     <div className="container" id="Body">
                <h2 id="welcomeText">Make people fall in love with your ideas</h2>
          <div className="row">
            <div className="col-md-6">
              <a href="/TeacherLogin" className="btn btn-dark">Login For Teachers<i className="fa fa-sign-in"></i></a>
          </div>
          <br />
          <div>
                <a href="/Login" className="btn btn-dark">Login For Students<i className="fa fa-sign-in"></i></a>
          </div>
          </div>
    </div>
     
    );
  }
}

export default Welcome;