import React, { useState } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { setBooks } from '../redux/book/book-actions';

import './bookSearch.css';

import Book from './Book';

const BookSearch = ({ setBooks }) => {

    // const [books, setBooks] = useState([]);

    const [state, setState] = React.useState({
        book: ""
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

        if(state.book === ''){
            alert('Please enter a book name');
            return;
        }

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${state.book}&maxResults=40`)
        .then(response => {
            // console.log(response.data.items);
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
            </div>   
        )

    }

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(null, mapDispatchToProps)(BookSearch);