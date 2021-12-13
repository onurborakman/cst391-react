import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Navbar from './Navbar';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Notes from './Notes';
import NewNote from './NewNote';
import EditNote from './EditNote';
import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Create Browser History 
const history = createBrowserHistory();

class App extends React.Component {
  //State
  state = {
    isLoggedIn: false,
    selectedNote: ''
  }

  
  //Function to handle logout
  handleLogout = (status) => {
    this.setState({
      isLoggedIn: status
    })
    history.push('/login')
  }
  //Function to handle login
  handleLogin = (status) => {
    this.setState({
      isLoggedIn: status
    });
    history.push('/');
  }
  //Function to handle register
  handleRegister = (status) => {
    if(status === true){
      history.push('/login')
    }
  }
  //Function to handle delete note
  handleDeleteNote = (status) => {
    if(status === true){
      history.push('/notes')
    }
  }
  //Function to navigate to edit note
  editNote = (note) => {
      this.setState({
        selectedNote: note
      })
      history.push(`/edit/${note.id}`, note)
  }
  //Function to handle edit note
  handleEditNote = (status) => {
    this.setState({
      selectedNote: ''
    })
    history.push('/');
  }
  //JSX
  render(){
    return (
        <Router history = {history}>
          <div>
            <Navbar status={this.state.isLoggedIn} onLogout={this.handleLogout}/>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/login" render={()=>{return <Login onLogin={this.handleLogin}/>}}/>
              <Route exact path="/register" render={()=>{return <Register onRegister={this.handleRegister}/>}}/>
              <Route exact path="/notes" render={()=>{return <Notes onDelete={this.handleDeleteNote} onEdit={this.editNote}/>}}/>
              <Route exact path="/create" render={()=>{return <NewNote/>}}/>
              <Route exact path="/edit/:id" render={()=>{return <EditNote note={this.state.selectedNote} onEdit={this.handleEditNote}/>}}/>
            </Switch>
          </div>
        </Router>
        
    );
  }
  
}

export default App;
