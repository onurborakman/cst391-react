import React from 'react';
import axios from 'axios';

import './Notes.css';

class Notes extends React.Component{
    //State
    state={
        notes: [],
        user: JSON.parse(sessionStorage.getItem('userId'))
    } 
    
    componentDidMount(){
        this.loadNotes();
      }
      //Function to load the notes of the user
      loadNotes = async() =>{
        let list = []
        //Send GET request to the backend
        axios.get(`http://localhost:4200/note/all`)
            .then(result => {
                result.data.data.forEach(note=>{
                    if(note.userId === this.state.user){
                        list.push({
                            id: note.id,
                            content: note.content,
                            userId: note.userId
                        })
                    }
                })
            })
        this.setState({
            notes: list
        })
    }
    //Function to delete a note
    deleteNote = async(id)=>{
        //Send a post request to the backend 
        axios.post(`http://localhost:4200/note/delete/${id}`)
            .then(result=>{
                console.log(result);
                this.props.onDelete(true)
            });
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        })
    }
    //Function to edit note
    editNote = (note)=> {
        this.props.onEdit(note);
    }
    //JSX
    render(){
        const notes = this.state.notes.map(note=>{
            return(<div><br/>
                <div className="card" style={{width: "18rem"}} key={note.id}>
                    <div className="card-body">
                    <h5 className="card-title">{note.id}</h5>
                        <p className="card-text">{note.content}</p>
                        <span className="btn btn-info" onClick={()=>this.editNote(note)}>Edit</span>&nbsp;
                        <span className="btn btn-danger" onClick={()=>this.deleteNote(note.id)}>Delete</span>
                    </div>
                </div><br/></div>
            )
        })
        return(
            <div className='flex'>
                {notes}
            </div>
        )
    }
}

export default Notes;