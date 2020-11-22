import React, { useState } from 'react';
import axios from 'axios';

import Book from './Book';

function BookSearch(){

    const [book, setBook] = useState('');
    const [books, setBooks] = useState([]);
    const [apiKey, setApiKey] = useState('AIzaSyAO0sNEMOqy-cw1hTcxCqlKBGB9lq0KMMk');

    const handleChange = event => {
        const book = event.target.value;

        setBook(book);
        }

    const handleSubmit = event => {
        event.preventDefault();

        console.log(book);


        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`)
        .then(response => {
            console.log(response.data.items);
            setBooks(response.data.items);
        })
        .catch(error => console.log('Unable to perform query:', error));

        }



        return(
            <div className="div">
            <form onSubmit={handleSubmit}>
                <input type="text" value={book} onChange={handleChange} name="book" placeholder='Book name'/>
                <button type="submit">Query Book</button>
            </form>
            {
                books.map(book => (
                    <Book book={book} />
                ))
            }
            </div>   
        )

    }





export default BookSearch;