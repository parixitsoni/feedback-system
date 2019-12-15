// import React from 'react';

// class Login extends React.Component {
//     state = {
//         email:'',
//         password :'',
//     }
//     onChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     }
//     onSubmit = async () =>  {
//         const response = await this.props.mutate({
//         variables: this.state,
//         });
//     console.log(response);
//     }
// render(){
//     return(
//         <div>
//             <input name = 'email' placeholder='Email' onChange={e => this.onChange(e)} value={this.state.email} />
//             <input name = 'password' placeholder='Password' onChange={e => this.onChange(e)} value={this.state.password} />
            
// <button onClick = {() => this.onSubmit()} type="primary">Login</button>
//         </div>
//     )
// }
// }


// export default Login;