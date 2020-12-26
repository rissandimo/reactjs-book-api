import React, { useState } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { setBooks } from '../redux/book/book-actions';

import './bookSearch.css';

const BookSearch = ({ setBooks }) => {

    const [book, setBook] = useState('');

    const handleChange = event => {
        const value = event.target.value;
        setBook(value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(book === ''){
            alert('Please enter a book name');
            return;
        }

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=10`)
        .then(response => {
            setBooks(response.data.items);
            setBook('');
        })
        .catch(error => console.log('Unable to perform query:', error));
        }

        return(
            <div>
            <form className="form__container" onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" value={book} onChange={handleChange} name="book" placeholder='Book Name'/>
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