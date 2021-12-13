import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Register extends React.Component{
    //State
    state = {
        username:'',
        firstname:'',
        lastname:'',
        email:'',
        password:''
    }
    //Function to update firstname state
    updateFirstname = (e) => {
        this.setState({firstname:e.target.value})
    }
    //Function to update lastname state
    updateLastname = (e) => {
        this.setState({lastname:e.target.value})
    }
    //Function to update email state
    updateEmail = (e) => {
        this.setState({email:e.target.value})
    }
    //Function to update password state
    updatePassword = (e) => {
        this.setState({password:e.target.value})
    }
    //Function to update username state
    updateUsername = (e) => {
        this.setState({username:e.target.value})
    }
    //Function to insert the user to the database
    registerUser = async(e) => {
        e.preventDefault();
        //Send post request to the backend
        axios.post(`http://localhost:4200/user/create`, this.state)
            .then(result => {
                console.log(result);
                this.props.onRegister(true)
            })
    }
    //Page JSX
    render(){
        return(
            <React.Fragment>
                <h1 className='text-center'>Registration Form</h1>
                <form onSubmit={this.registerUser} className='text-center'> 
                    <div className="form-group">
                        <input type="text" id="username" placeholder="Username" onChange={this.updateUsername}/>
                    </div><br/>

                    <div className="form-group">
                        <input type="text" id="firstname" placeholder="First Name" onChange={this.updateFirstname}/>
                    </div><br/>

                    <div className="form-group">
                        <input type="text" id="lastname" placeholder="Last Name" onChange={this.updateLastname}/>
                    </div><br/>

                    <div className="form-group">
                        <input type="email" id="email" placeholder="Email" onChange={this.updateEmail}/>
                    </div><br/>

                    <div className="form-group">
                        <input type="password" id="password" placeholder="Password" onChange={this.updatePassword}/>
                    </div><br/>
                    <button type="submit" className="btn btn-success">Register</button>
                </form>
            </React.Fragment>
        )
    }
}
export default Register;