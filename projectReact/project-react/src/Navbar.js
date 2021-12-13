import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
    //State
    state = {
        isLoggedIn: this.props.status
    } 
    //Function to log the user out
    handleLogout= () => {
        sessionStorage.setItem('isAuth', JSON.stringify(false));
        this.props.onLogout(false)
    }
    //JSX
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light nav">
                <span className="navbar-brand" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note App</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    
                <div className="collapse navbar-collapse container" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        {JSON.parse(sessionStorage.getItem('isAuth')) === false ?
                        <>
                        <Link className="nav-item nav-link" to="/login">Login</Link>
                        <Link className="nav-item nav-link" to="/register">Register</Link>
                        </>
                        :
                        <>
                        <Link className="nav-item nav-link" to="/create">Create</Link>   
                        <Link className="nav-item nav-link" to="/notes">My Notes</Link>
                        <Link className="nav-item nav-link" onClick={this.handleLogout} to="/">Logout</Link>
                        </>
                        }
                    </div>
                </div>
            </nav>
            </React.Fragment>
        )
    }
    
}

export default Navbar;