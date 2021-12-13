import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Login extends React.Component{
    url = 'http://localhost:4200/user/all';
    //State
    state = {
        username: '',
        password: ''
    }
    //Function to update username state
    updateUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    //Function to update password state
    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    //Function to validate the user
    validateUser = async(e) => {
        e.preventDefault();
        //Send get request to the backend
        axios.get(`http://localhost:4200/user/all`)
            .then(users => {
                for(let i = 0; i < users.data.data.length; i++){
                    if(users.data.data[i].username === this.state.username && users.data.data[i].password === this.state.password){
                        sessionStorage.setItem('isAuth', JSON.stringify(true))
                        sessionStorage.setItem('userId', JSON.stringify(users.data.data[i].id))
                        this.props.onLogin(true)
                    }
                }
            });
    }
    //JSX
    render(){
        return(
            <React.Fragment>
                <h1 className='text-center'>Login Form</h1>
                <form onSubmit={this.validateUser} className='text-center'> 
                    <div className="form-group">
                        <input type="text" id="username" placeholder="Username" onChange={this.updateUsername}/>
                    </div><br/>
                    <div className="form-group">
                        <input type="password" id="password" placeholder="Password" onChange={this.updatePassword}/>
                    </div><br/>
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Login;