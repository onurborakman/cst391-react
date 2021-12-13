import React from 'react';
import axios from 'axios';

class EditNote extends React.Component{
    //State
    state={
        userId: JSON.parse(sessionStorage.getItem('userId')),
        content: this.props.note.content,
        id: this.props.note.id
    }
    //Function to update the note
    updateNote = (e) => {
        e.preventDefault()
        //Send post request to the backend
        axios.post(`http://localhost:4200/note/update/${this.state.id}`, this.state)
            .then(result=>{
                console.log(result)
                this.setState({
                    content: ''
                })
            })
        this.props.onEdit(true)
    }
    //Function to update the content state
    updateContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    //JSX
    render(){
        return(
                <React.Fragment>
                <h1 className='text-center'>Edit Note</h1>
                <form onSubmit={this.updateNote} className='text-center'> 
                    <div className="form-group">
                        <textarea id="content" placeholder="Content" onChange={this.updateContent} value={this.state.content}/>
                    </div>
                    <button type="submit" className="btn btn-success">Edit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default EditNote;