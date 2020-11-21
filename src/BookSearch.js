import React from 'react';
import axios from 'axios';

class BookSearch extends React.Component{

    constructor(){
        super();

        this.state = {
            author: '',
            title: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const { author, title } = this.state;

        if(author === '' && title === ''){
            alert('please enter an Author and/or Title');
            return;
        }
        
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}`)
        .then(response => console.log(response.data))
        .catch(error => console.log('Unable to perform query:', error));
    }


    render(){
        return(
            <div className="div">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.author} onChange={this.handleChange} name="author" placeholder='Author'/>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="title" placeholder='Title'/>
                <button type="submit">Query Book</button>
            </form>
            </div>   
        )
    }

}

export default BookSearch;