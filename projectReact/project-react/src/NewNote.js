import React from 'react';
import axios from 'axios';

class NewNote extends React.Component{
    //State
    state={
        userId: JSON.parse(sessionStorage.getItem('userId')),
        content: ''
    }
    //Function to create a note
    createNote = (e) => {
        e.preventDefault()
        //Send post request to the backend
        axios.post(`http://localhost:4200/note/create`, this.state)
            .then(result=>{
                console.log(result)
                this.setState({
                    content: ''
                })
            })
    }
    //Update Content state
    updateContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    //JSX
    render(){
        return(
                <React.Fragment>
                <h1 className='text-center'>Create New Note</h1>
                <form onSubmit={this.createNote} className='text-center'> 
                    <div className="form-group">
                        <textarea id="content" placeholder="Content" onChange={this.updateContent} value={this.state.content}/>
                    </div>
                    <button type="submit" className="btn btn-success">Create</button>
                </form>
            </React.Fragment>
        )
    }
}

export default NewNote;