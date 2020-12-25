import React, { useState } from 'react';
import axios from 'axios';

import './bookSearch.css';

import Book from './Book';

function BookSearch(){

    const [books, setBooks] = useState([]);

    const [state, setState] = React.useState({
        book: "",
        author: "" 
    })

    const handleChange = event => {
        const value = event.target.value;

        setState({ 
            ...state,
            [event.target.name] : value
         });

        }

    const handleSubmit = event => {
        event.preventDefault();

        if(state.author === '' && state.book === ''){
            alert('Please enter a book and/or author');
            return;
        }

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${state.book}+inauthor:${state.author}&maxResults=40`)
        .then(response => {
            console.log(response.data.items);
            setBooks(response.data.items);
        })
        .catch(error => console.log('Unable to perform query:', error));

        }

        return(
            <div>
            <form className="form__container" onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" value={state.book} onChange={handleChange} name="book" placeholder='Book Name'/>
                </div>
                <button type="submit">Submit Query</button>
            </form>

            <div className="books">
                {
                    books.map(book => {
                        return <Book key={book.id} book={book} />
                    })
                }
            </div>
            </div>   
        )

    }





export default BookSearch;